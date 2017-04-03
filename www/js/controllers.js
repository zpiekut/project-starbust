angular.module('app.controllers', [])

.controller('redeemListScrollCtrl', ['$scope', '$stateParams', 'RedemptionsService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, RedemptionsService) {
    $scope.redemptions = [];

    RedemptionsService.getRedemptions().then(function(redemptions) {
      $scope.redemptions = redemptions;
      redemptions[0].link = "redeemFamilyFarms";
      console.log(redemptions);
    });

    $scope.getRedemptions =
      RedemptionsService.getRedemptions().then(function(redemptions) {
        $scope.redemptions = redemptions;
        redemptions[0].link = "redeemJamesSt";
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



     //
     $scope.login = function(){
        $scope.error = '';
        $ionicAuth.login('basic', $scope.data).then(function(){
            $state.go('tabController.home');
        }, function(){
            $scope.error = 'Error logging in.';
        })
    }

}
   ])

.controller('redeemFamilyFarmsCtrl', ['$scope', '$stateParams', 'RedemptionsService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, RedemptionsService) {
  $scope.redemption = {};

  RedemptionsService.getRedemption($stateParams.id).then(function(redemption) {
    $scope.redemption = redemption;
    console.log(redemption);
  });

}])

.controller('redeemFamilyFarmsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
}])

.controller('redeemFamilyFarmsPassCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
}])

.controller('walletCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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

.controller('volunteerLOLCtrl', ['$scope', '$stateParams', 'ProjectsService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ProjectsService) {
  $scope.project = {};

  ProjectsService.getProject($stateParams.id).then(function(project) {
    $scope.project = project;
    console.log(project);
  });

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

.controller('volunteerDumpBusterThankCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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

.controller('yourProfileCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', 'AuthenticationService',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state, AuthenticationService) {

    $scope.userData = $ionicUser.details;


    $scope.logout = function(){
        AuthenticationService.logout();
        $state.go('tabController.home_tab5');
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
      $state.go('tabController.yourProfile_tab2', {}, {reload: true, inherit: false});
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

.controller('voucherCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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
