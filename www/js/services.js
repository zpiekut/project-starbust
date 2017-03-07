angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('AuthenticationService', function($rootScope, $http, authService, localStorageService) {

  login: function (user) {
    $http.post('https://login', { user: user }, { ignoreAuthModule: true })
      .success(function (data, status, headers, config) {

        $http.defaults.headers.common.Authorization = data.authorizationToken;
        localStorageService.set('authorizationToken', data.authorizationToken);

        authService.loginConfirmed(data, function(config) {
          config.headers.Authorization = data.authorizationToken;
          return config;
        });
      })
      .error(function (data, status, headers, config) {
        $rootScope.$broadcast('event:auth-login-failed', status);
      });
  },
  logout: function (user) {
    $http.post('https://logout', {}, { ignoreAuthModule: true })
      .finally(function(data) {
        localStorageService.remove('authorizationToken');
        delete $http.defaults.headers.common.Authorization;
        $rootScope.$broadcast('event:auth-logout-complete');
      });
  },
  loginCancelled: function() {
    authService.loginCancelled();
  }

})

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

.service('RedemptionsService', ['$http','$q',function($http, $q){
    var redemptions = [];

    return {
      getRedemptions: function() {
        return $http.get("http://localhost:8081/api/redemptions")
        .then(function(response) {
          redemptions = response.data;
          console.log(response);
          return redemptions;
        })
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
