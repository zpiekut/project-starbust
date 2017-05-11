var _baseUrl = "http://localhost:8081/";

angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('AuthenticationService', ['$rootScope', '$http', 'MyLocalStorageService',
  function($rootScope, $http, MyLocalStorageService
  ) {
  return {
    login: function (user) {

      $http.post(_baseUrl + 'api/auth/login', { user: user }, { ignoreAuthModule: true })
        .success(function (data, status, headers, config) {
          if(data.jwt) {
            $rootScope.$broadcast('event:auth-login-confirmed', status);
            MyLocalStorageService.storeToken(data.jwt);
            MyLocalStorageService.storeUserInfo(data.user);
          }else{
            $rootScope.$broadcast('event:auth-login-failed', status);
          }
        })
        .error(function (data, status, headers, config) {
          $rootScope.$broadcast('event:auth-login-failed', status);
        });
    },
    logout: function () {
      $http.post(_baseUrl + 'api/auth/logout', {}, { ignoreAuthModule: true })
        .finally(function() {
          MyLocalStorageService.destroyToken();
          MyLocalStorageService.destroyUserInfo();
          $rootScope.$broadcast('event:auth-logout-complete');
        });
    },
    signUp: function(user) {
      $http.post(_baseUrl + 'api/users', user, { ignoreAuthModule: true }) 
        .success(function (data, status, headers, config) { 
          if(data.message == "Email already exists"){ 
            $rootScope.$broadcast('event:auth-signup-failed-email-already-exists', status); 
          }else{ 
            if(data.message == "Passwords do not match") 
              $rootScope.$broadcast('event:auth-signup-failed-passwords-do-not-match', status); 
            else 
              $rootScope.$broadcast('event:auth-signup-complete', status); 
          } 
        }) .error(function (data, status, headers, config) { 
        $rootScope.$broadcast('event:auth-signup-failed-field-reqs-not-met', status); 
      });
    }
  }
}])

.service('MyLocalStorageService', ['$http', function($http){
  var authToken;
  var isAuthenticated;
  return {

    storeUserInfo: function (info) {
      window.localStorage.setItem('userInfo', JSON.stringify(info));
    },
    loadUserInfo: function () {
      return window.localStorage.getItem('userInfo');
    },
    destroyUserInfo: function () {
      window.localStorage.removeItem('userInfo');
    },
    storeToken: function (token) {
      window.localStorage.setItem('tokenKey', token);
      authToken = token;
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
        return $http.get(_baseUrl + "api/projects")
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
	    },
      getProjectsForUser: function(userId){
        return $http.get(_baseUrl + 'api/projects/user/' + userId)
          .success(function (data, status, headers, config) {
            return data;
          })
          .error(function (data, status, headers, config) {
            console.log("error data: " + status);
          });
      },
      addUserToProject: function(data) {
        return $http.post(
          _baseUrl + "api/projects/user",
          data
        )
      }
    }
}])

.service('RedemptionsService', ['$http','$q', 'MyLocalStorageService', function($http, $q, MyLocalStorageService){
    var redemptions = [];
    var userRedemptions = [];

    return {
      getRedemptions: function() {
        console.log(MyLocalStorageService.loadToken());
        var req = {
          method: 'GET',
          url: _baseUrl + 'api/redemptions',
          headers: {
            Authorization:  MyLocalStorageService.loadToken()
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
	    },
      redeemForVoucher: function(RedemptionId, UserId){
        return $http.post(
          _baseUrl + "api/redemptions/user",
          {
            redemptionId: RedemptionId,
            userId: UserId
          }
        )
      },
      getUserRedemptions: function(userId) {
        console.log(MyLocalStorageService.loadToken());
        var req = {
          method: 'GET',
          url: _baseUrl + 'api/redemptions/user/' + userId,
          headers: {
            Authorization:  MyLocalStorageService.loadToken()
          }
        };

        return $http(req)
        .success(function(data, status, headers, config) {
          userRedemptions = data;
          console.log(data);
          return userRedemptions;
        })
        .error(function (r) {
          console.log("error data: " + r);
        });
      }
    }
}])

.service('CreditsService', ['$http','$q', 'MyLocalStorageService', function($http, $q, MyLocalStorageService) {
  var credits = [];
  var user = MyLocalStorageService.loadUserInfo();

  return {
    getCreditsForUser: function (userId) {
      return $http.get(_baseUrl + 'api/credits/user/' + userId)
      .then(function(response) {
        credits = response.data;
        return credits;
      })
    },
    getTotalUserHours: function (userId) {
      return $http.get(_baseUrl + 'api/transactions/to/' + userId)
      .then(function(response) {
        return response.data;
      })
    },
    transferCreditsToUser: function (code, userId) {
      console.log(userId);
      return $http.post(_baseUrl + 'api/transactions/project-redeem',
          {
            RedeemCode: code, 
            ToId: userId
          }
        )
        .success(function (data, status, headers, config) {
          console.log(data);
        })
        .error(function (data, status, headers, config) {
          console.log("error data: " + status);
        });
    },
    transferCreditsToBusiness: function (redemption, creditArray) {
      return $http.put(_baseUrl + 'api/transactions/' + user.id,
        {FromId: MyLocalStorageService.loadUserInfo().id, ToId: redemption.id, CreditIds: creditArray})
        .success(function (data, status, headers, config) {
          console.log(data);
        })
        .error(function (data, status, headers, config) {
          console.log("error data: " + status);
        });
    }
  }
}])

.service('VoucherService', ['$http','$q', 'MyLocalStorageService', function($http, $q, MyLocalStorageService){
    var userVouchers = [];

    return {
      getUserVouchers: function(userId) {
        var req = {
          method: 'GET',
          url: _baseUrl + 'api/voucher-code/user/' + userId,
          headers: {
            Authorization:  MyLocalStorageService.loadToken()
          }
        };

        return $http(req)
        .success(function(data, status, headers, config) {
          userVouchers = data;
          console.log(data);
          return userVouchers;
        })
        .error(function (r) {
          console.log("error data: " + r);
        });
      },
      getVoucher: function(id){

        console.log('id  ' + id);
        var deferred = $q.defer();

        userVouchers.forEach(function(voucher) {
          console.log(voucher.id);
          if(voucher.id == id) {
            console.log("found " + voucher);
            deferred.resolve(voucher);
            return deferred.promise;
          }
        });

        deferred.resolve();
        return deferred.promise;
      },
    }
}])