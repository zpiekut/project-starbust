angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('AuthenticationService', ['$rootScope', '$http', 'MyLocalStorageService',
  function($rootScope, $http, MyLocalStorageService
  ) {
  return {
    login: function (user) {

      $http.post('http://localhost:8081/api/auth/login', { user: user }, { ignoreAuthModule: true })
        .success(function (data, status, headers, config) {
          if(data.jwt) {
            $rootScope.$broadcast('event:auth-login-confirmed', status);
            MyLocalStorageService.storeToken(data.jwt);
          }else{
            $rootScope.$broadcast('event:auth-login-failed', status);
          }
        })
        .error(function (data, status, headers, config) {
          $rootScope.$broadcast('event:auth-login-failed', status);
        });
    },
    logout: function () {
      $http.post('https://localhost:8081/api/auth/logout', {}, { ignoreAuthModule: true })
        .finally(function() {
          MyLocalStorageService.destroyToken();
          $rootScope.$broadcast('event:auth-logout-complete');
        });
    },
    signUp: function(user) {
      $http.post('http://localhost:8081/api/users', user, { ignoreAuthModule: true })
        .success(function (data, status, headers, config) {
          login(data)
        })
        .error(function (data, status, headers, config) {
          $rootScope.$broadcast('event:auth-login-failed', status);
        });
    }
  }
}])

.service('MyLocalStorageService', ['$http', function($http){
  var authToken;
  var isAuthenticated;
  return {

    storeToken: function (token) {
      window.localStorage.setItem('tokenKey', token);
      authToken = token;
      //tried to add this to authenticationservice as a method but learned about a circular dependency error
      $http.defaults.headers.common.Authorization = authToken;
      isAuthenticated = true;
    },
    loadToken: function () {
      var token = window.localStorage.getItem('tokenKey');
      if (token) {
        authToken = token;
        $http.defaults.headers.common.Authorization = authToken;
        isAuthenticated = true;
      }
      return token
    },
    destroyToken: function () {
      authToken = undefined;
      isAuthenticated = false;
      $http.defaults.headers.common.Authorization = authToken;
      window.localStorage.removeItem('tokenKey');
    },
    isAuthenticated: function() { isAuthenticated;}

  }

}])

.service('ProjectsService', ['$http','$q',function($http, $q){
    var projects = [];

    return {
      getProjects: function() {
        return $http.get("http://localhost:8081/api/projects")
        .then(function(response) {
          projects = response.data;
          console.log(response);
          return projects;
        })
      },
      getProject: function(id){

        console.log('id  ' + id);
        var deferred = $q.defer();

        projects.forEach(function(project) {
          console.log(project.id);
          if(project.id == id) {
            console.log("found " + project);
            deferred.resolve(project);
            return deferred.promise;
          }
        });

        deferred.resolve();
        return deferred.promise;
	    }
    }
}])

.service('RedemptionsService', ['$http','$q', 'MyLocalStorageService', function($http, $q, MyLocalStorageService){
    var redemptions = [];

    return {
      getRedemptions: function() {
        console.log(MyLocalStorageService.loadToken());
        var req = {
          method: 'GET',
          url: 'http://localhost:8081/api/redemptions',
          headers: {
            Authorization:  MyLocalStorageService.loadToken() //"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFudGhvbnkgVmFsaWQgVXNlciIsImlhdCI6MTQyNTQ3MzUzNX0.KA68l60mjiC8EXaC2odnjFwdIDxE__iDu5RwLdN1F2A"
          }
        };

        return $http(req)
        .success(function(data, status, headers, config) {
          redemptions = data;
          console.log(data);
          return redemptions;
        })
        .error(function (r) {
          console.log("error data: " + r);
        });
      },
      getRedemption: function(id){

        console.log('id  ' + id);
        var deferred = $q.defer();

        redemptions.forEach(function(redemption) {
          console.log(redemption.id);
          if(redemption.id == id) {
            console.log("found " + redemption);
            deferred.resolve(redemption);
            return deferred.promise;
          }
        });

        deferred.resolve();
        return deferred.promise;
	    }
    }
}]);
