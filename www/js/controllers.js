angular.module('app.controllers', [])

.controller('redeemListScrollCtrl', ['$scope', '$stateParams', 'RedemptionsService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, RedemptionsService) {
    $scope.redemptions = [];

    RedemptionsService.getRedemptions().then(function(redemptions) {
      $scope.redemptions = redemptions.data;
      console.log(redemptions);
    });
}])

.controller('homeCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {

    $scope.data = {
        'email': '',
        'password': ''
    };

    $scope.error = '';

    if ($ionicAuth.isAuthenticated()){
       $state.go('tabController.yourProfile')
    }

    $scope.login = function(){
      $scope.error = '';
      $ionicAuth.login('basic', $scope.data).then(function(){
          $state.go('tabController.home');
      }, function(){
          $scope.error = 'Error logging in.';
      })
    } 
}])

.controller('redeemFamilyFarmsCtrl', ['$scope', '$rootScope','$stateParams', '$state', 'RedemptionsService', 'MyLocalStorageService',
function ($scope, $rootScope, $stateParams, $state, RedemptionsService, MyLocalStorageService) {
  $scope.redemption = {};
  $scope.userData = JSON.parse(MyLocalStorageService.loadUserInfo());

  RedemptionsService.getRedemption($stateParams.id).then(function(redemption) {
    $scope.redemption = redemption;
    console.log(redemption);
  });

  $scope.redeemForVoucher = function() {
    RedemptionsService.redeemForVoucher($scope.redemption.id, $scope.userData.id)
    .then(function(response) {
      if(response.status === 200) {
        $rootScope.$broadcast('event:redeemedForVoucher');
        $state.go('tabController.voucher',{id: response.data.id})
      }
      else {
        alert("error");
      }
    });
  }

}])

.controller('redeemJamesStCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
}])

.controller('redeemFamilyFarmsPassCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
}])

.controller('walletCtrl', ['$scope', '$rootScope', '$stateParams', 'VoucherService', 'MyLocalStorageService',
function ($scope, $rootScope, $stateParams, VoucherService, MyLocalStorageService) {
    $scope.vouchers = [];
    $scope.userData = JSON.parse(MyLocalStorageService.loadUserInfo());

    VoucherService.getUserVouchers($scope.userData.id).then(function(redemptions) {
      $scope.vouchers = redemptions.data;
      console.log(redemptions);
    });

    $rootScope.$on('event:redeemedForVoucher', function() {
      console.log("broadcast redeemed for voucher");
      VoucherService.getUserVouchers($scope.userData.id).then(function(redemptions) {
        $scope.vouchers = redemptions.data;
        console.log(redemptions);
      });
    });

}])

.controller('redeemPhotoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('redeemPhotoPassCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('redeemDecoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('redeemDecoPassCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('redeemVentureCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('redeemVenturePassCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('volunteerListScrollCtrl', ['$scope', '$stateParams', 'ProjectsService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $stateParams, ProjectsService) {
    $scope.projects = [];

    ProjectsService.getProjects().then(function(projects) {
      $scope.projects = projects;
      projects[0].link = "volunteerLOL";
      console.log(projects);
    });
}])

.controller('volunteerLOLCtrl', ['$scope', '$stateParams', '$state', '$rootScope', 'ProjectsService', 'MyLocalStorageService',
function ($scope, $stateParams, $state, $rootScope, ProjectsService, MyLocalStorageService) {
  
  $scope.userData = JSON.parse(MyLocalStorageService.loadUserInfo());
  $scope.project = {};

  ProjectsService.getProject($stateParams.id).then(function(project) {
    $scope.project = project;
    console.log(project);
  });

  $scope.addUserToProject = function() {
    console.log("addUserToProject");
    var reqBody = {
      projectId: $scope.project.id,
      userId: $scope.userData.id
    };
    ProjectsService.addUserToProject(reqBody)
    .then(function(response) {
      if(response.status === 200) {
        $rootScope.$broadcast('event:signedUpForProject');
        $state.go('tabController.volunteerDumpBusterThank', {id: $scope.project.id})
      }
      else {
        alert("error");
      }
    });
  }
}])

.controller('volunteerEcostewardThanksCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('volunteerEcostewardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('volunteerDumpBusterCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('volunteerDumpBusterThankCtrl', ['$scope', '$stateParams', 'ProjectsService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ProjectsService) {
  $scope.project = {};

  ProjectsService.getProject($stateParams.id).then(function(project) {
    $scope.project = project;
    console.log(project);
  });

}])

.controller('volunteerLOLThanksCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('volunteerDumpBusterThanksCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('yourProfileCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', '$rootScope', 'AuthenticationService', 'MyLocalStorageService', 'CreditsService', 'ProjectsService',
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state, $rootScope, AuthenticationService, MyLocalStorageService, CreditsService, ProjectsService) {

  $scope.userData = JSON.parse(MyLocalStorageService.loadUserInfo());
  $scope.credits = '-';
  $scope.hours = '-';
  $scope.projects = [];

  $scope.data = {
    'code' : ''
  };

  activate();

  $scope.transferCreditsToUser = function () {
    CreditsService.transferCreditsToUser($scope.data.code, $scope.userData.id);
  };

  $scope.logout = function(){
      AuthenticationService.logout();
      $state.go('tabController.home_tab5');
  }

  function getUserCredits() {
    CreditsService.getCreditsForUser($scope.userData.id)
    .then(function(response) {
      if(response.credits) {
          $scope.credits = response.credits.length;
      }
      else {
        console.log("error getting credits");
      }
    });
  }

  function getUserProjects() {
    ProjectsService.getProjectsForUser($scope.userData.id)
    .then(function(response) {
      if(response) {
        $scope.projects = response.data;
      }
      else {
        console.log("error getting user projects");
      }
    });
  }

  function getTotalUserHours() {
    CreditsService.getTotalUserHours($scope.userData.id)
    .then(function(response) {
      if(response) {
        $scope.hours = response.length;
      }
      else {
        console.log("error getting user hours");
      }
    });
  }

  $rootScope.$on('event:redeemedForVoucher', function() {
    getUserCredits();
  });

  $rootScope.$on('event:signedUpForProject', function() {
    getUserProjects();
  });

  function activate() {
    
    ProjectsService.getProjects();

    getUserCredits();

    getTotalUserHours();

    getUserProjects();
  }

}])


.controller('loginCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', 'AuthenticationService',
  'ProjectsService',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state, AuthenticationService, ProjectsService) {

    $scope.data = {
        'email': '',
        'password': ''
    };

    $scope.login = function() {

      AuthenticationService.login($scope.data);
    };

    $scope.$on('event:auth-loginRequired', function(e, rejection) {
      console.log('handling login required');
      //$scope.loginModal.show();
    });

    $scope.$on('event:auth-login-confirmed', function() {
      $scope.username = null;
      $scope.password = null;
      $scope.message = '';
      //TODO: resolve state.go error
      $state.go('tabController.yourProfile_tab5', {}, {reload: true, inherit: false});
    });

    $scope.$on('event:auth-login-failed', function(e, status) {
      var error = "Login failed.";
      if (status == 401) {
        error = "Invalid Username or Password.";
      }
      $scope.message = error;
    });

    $scope.$on('event:auth-logout-complete', function() {
      console.log("logout complete");
      $state.go('app.login', {}, {reload: true, inherit: false});
    });
}])


.controller('AppCtrl', function($scope, $state, $ionicPopup, AuthService, AUTH_EVENTS) {
  $scope.username = AuthService.username();

  $scope.$on(AUTH_EVENTS.notAuthorized, function(event) {
    var alertPopup = $ionicPopup.alert({
      title: 'Unauthorized!',
      template: 'You are not allowed to access this resource.'
    });
  });

  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    AuthService.logout();
    $state.go('login');
    var alertPopup = $ionicPopup.alert({
      title: 'Session Lost!',
      template: 'Sorry, You have to login again.'
    });
  });

  $scope.setCurrentUsername = function(name) {
    $scope.username = name;
  };
})

.controller('signUpCtrl', ['$scope', '$rootScope', '$stateParams', '$ionicAuth', '$ionicUser', '$state', 'AuthenticationService',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $ionicAuth, $ionicUser, $state, AuthenticationService) {

    $scope.data = {
        'email': '',
        'password': '',
        'confirmpassword': '',
        'firstname': '',
        'lastname': '',
        'age': '',
        'zipcode': ''
    };

    $scope.error= '';
    $scope.message='';
    $scope.signup = function(){
      AuthenticationService.signUp($scope.data);
    };

    $rootScope.$on('event:auth-signup-complete', function(status) {
      console.log("Status: " + status);
      AuthenticationService.login($scope.data);
    });
    $rootScope.$on('event:auth-signup-failed-email-already-exists', function(status) {
      console.log("Status: " + status);
      $scope.message = "This email address already exists";
    });

    $rootScope.$on('event:auth-signup-failed-field-reqs-not-met', function(status) {
      console.log("Status: " + status);
      $scope.message = "Field requirements not met";
    });

    $rootScope.$on('event:auth-signup-failed-passwords-do-not-match', function(status) {
      console.log("Status: " + status);
      $scope.message = "Passwords do not match";
    });

    $scope.$on('event:auth-login-confirmed', function() {
      $scope.username = null;
      $scope.password = null;
      $scope.message = '';
      //TODO: resolve state.go error
      $state.go('tabController.yourProfile_tab5', {}, {reload: true, inherit: false});
    });


}])

.controller('farmsVoucherCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('voucherCtrl', ['$scope', '$stateParams', 'VoucherService', 'MyLocalStorageService',
function ($scope, $stateParams, VoucherService, MyLocalStorageService) {
  $scope.voucher = {};
  $scope.userData = JSON.parse(MyLocalStorageService.loadUserInfo());

  VoucherService.getUserVouchers($scope.userData.id).then(function(redemptions) {
    VoucherService.getVoucher($stateParams.id).then(function(voucher) {
      $scope.voucher = voucher;
      console.log(voucher);
    });
  });

}])

.controller('jamesVoucherCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('volunteerOpsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
