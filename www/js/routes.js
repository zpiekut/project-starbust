angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.redeemListScroll'
      2) Using $state.go programatically:
        $state.go('tabController.redeemListScroll');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/volinteer-tab/redeemListScroll
      /page1/tab5/redeemListScroll
      /page1/tab4/redeemListScroll
  */
  .state('tabController.redeemListScroll', {
    url: '/redeemListScroll',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/redeemListScroll.html',
        controller: 'redeemListScrollCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemListScroll.html',
        controller: 'redeemListScrollCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemListScroll.html',
        controller: 'redeemListScrollCtrl'
      }
    }
  })

  .state('tabController.home', {
    url: '/page20',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab5': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabController.redeemFamilyFarms', {
    url: '/page12:id',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/redeemFamilyFarms.html',
        controller: 'redeemFamilyFarmsCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemFamilyFarms.html',
        controller: 'redeemFamilyFarmsCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemFamilyFarms.html',
        controller: 'redeemFamilyFarmsCtrl'
      }
    }
  })

  .state('tabController.redeemJamesSt', {
    url: '/page29:id',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/redeemJamesSt.html',
        controller: 'redeemJamesStCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemJamesSt.html',
        controller: 'redeemJamesStCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemJamesSt.html',
        controller: 'redeemJamesStCtrl'
      }
    }
  })

  .state('tabController.redeemFamilyFarmsPass', {
    url: '/page32',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/redeemFamilyFarmsPass.html',
        controller: 'redeemFamilyFarmsPassCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemFamilyFarmsPass.html',
        controller: 'redeemFamilyFarmsPassCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemFamilyFarmsPass.html',
        controller: 'redeemFamilyFarmsPassCtrl'
      }
    }
  })

  .state('tabController.wallet', {
    // url: '/page22',
    url: '/wallet',
    views: {
      // 'tab3': {
      'wallet-tab': {
        templateUrl: 'templates/wallet.html',
        controller: 'walletCtrl'
      }
    }
  })

  .state('tabController.redeemPhoto', {
    url: '/page28',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/redeemPhoto.html',
        controller: 'redeemPhotoCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemPhoto.html',
        controller: 'redeemPhotoCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemPhoto.html',
        controller: 'redeemPhotoCtrl'
      }
    }
  })

  .state('tabController.redeemPhotoPass', {
    url: '/page31',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/redeemPhotoPass.html',
        controller: 'redeemPhotoPassCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemPhotoPass.html',
        controller: 'redeemPhotoPassCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemPhotoPass.html',
        controller: 'redeemPhotoPassCtrl'
      }
    }
  })

  .state('tabController.redeemDeco', {
    url: '/page27',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/redeemDeco.html',
        controller: 'redeemDecoCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemDeco.html',
        controller: 'redeemDecoCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemDeco.html',
        controller: 'redeemDecoCtrl'
      }
    }
  })

  .state('tabController.redeemDecoPass', {
    url: '/page34',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/redeemDecoPass.html',
        controller: 'redeemDecoPassCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemDecoPass.html',
        controller: 'redeemDecoPassCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemDecoPass.html',
        controller: 'redeemDecoPassCtrl'
      }
    }
  })

  .state('tabController.redeemVenture', {
    url: '/page26',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/redeemVenture.html',
        controller: 'redeemVentureCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemVenture.html',
        controller: 'redeemVentureCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemVenture.html',
        controller: 'redeemVentureCtrl'
      }
    }
  })

  .state('tabController.redeemVenturePass', {
    url: '/page33',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/redeemVenturePass.html',
        controller: 'redeemVenturePassCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemVenturePass.html',
        controller: 'redeemVenturePassCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemVenturePass.html',
        controller: 'redeemVenturePassCtrl'
      }
    }
  })

  .state('tabController', {
    // url: '/page1',
    url: '/tab',
    templateUrl: 'templates/tabController.html',
    abstract:true
  })

  .state('tabController.volunteerListScroll', {
    // url: '/page11',
    url: '/volunteerList',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/volunteerListScroll.html',
        controller: 'volunteerListScrollCtrl'
      }
      ,
      'tab5': {
        templateUrl: 'templates/volunteerListScroll.html',
        controller: 'volunteerListScrollCtrl'
      }
    }
  })

  .state('tabController.volunteerLOL', {
    url: '/page23:id',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/volunteerLOL.html',
        controller: 'volunteerLOLCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerLOL.html',
        controller: 'volunteerLOLCtrl'
      },
      'tab4': {
        templateUrl: 'templates/volunteerLOL.html',
        controller: 'volunteerLOLCtrl'
      }
    }
  })

  .state('tabController.volunteerEcostewardThanks', {
    url: '/page25',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/volunteerEcostewardThanks.html',
        controller: 'volunteerEcostewardThanksCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerEcostewardThanks.html',
        controller: 'volunteerEcostewardThanksCtrl'
      }
    }
  })

  .state('tabController.volunteerEcosteward', {
    url: '/page14',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/volunteerEcosteward.html',
        controller: 'volunteerEcostewardCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerEcosteward.html',
        controller: 'volunteerEcostewardCtrl'
      }
    }
  })

  .state('tabController.volunteerDumpBuster', {
    url: '/page24',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/volunteerDumpBuster.html',
        controller: 'volunteerDumpBusterCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerDumpBuster.html',
        controller: 'volunteerDumpBusterCtrl'
      }
    }
  })

  .state('tabController.volunteerDumpBusterThank', {
    url: '/page13',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/volunteerDumpBusterThank.html',
        controller: 'volunteerDumpBusterThankCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerDumpBusterThank.html',
        controller: 'volunteerDumpBusterThankCtrl'
      }
    }
  })

  .state('tabController.volunteerLOLThanks', {
    url: '/page17',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/volunteerLOLThanks.html',
        controller: 'volunteerLOLThanksCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerLOLThanks.html',
        controller: 'volunteerLOLThanksCtrl'
      }
    }
  })

  .state('volunteerDumpBusterThanks', {
    url: '/page30',
    templateUrl: 'templates/volunteerDumpBusterThanks.html',
    controller: 'volunteerDumpBusterThanksCtrl'
  })

  .state('redeemFamilyFarms', {
    url: '/redeemFamilyFarms:id',
    templateUrl: 'templates/redeemFamilyFarms.html',
    controller: 'redeemFamilyFarmsCtrl'
  })

  .state('redeemJamesSt', {
    url: '/redeemJamesSt',
    templateUrl: 'templates/redeemJamesSt.html',
    controller: 'redeemJamesStCtrl'
  })

  .state('tabController.yourProfile', {
    url: '/profile',
    views: {
      'volinteer-tab': {
        templateUrl: 'templates/yourProfile.html',
        controller: 'yourProfileCtrl'
      },
      'tab5': {
        templateUrl: 'templates/yourProfile.html',
        controller: 'yourProfileCtrl'
      }
    }
  })

  .state('login', {
    url: '/log',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('voucher', {
    url: '/voucher',
    templateUrl: 'templates/voucher.html',
    controller: 'voucherCtrl'
  })

  .state('jamesvoucher', {
    url: '/jamesvoucher',
    templateUrl: 'templates/jamesvoucher.html',
    controller: 'jamesVoucherCtrl'
  })

.state('farmsVoucher', {
  url: '/farmsvoucher',
  templateUrl: 'templates/familyFarmsVoucher.html',
  controller: 'farmsVoucherCtrl'
})

.state('volunteerOps', {
  url: '/volunteerops',
  templateUrl: 'templates/volunteerOps.html',
  controller: 'volunteerOpsCtrl'
})

  .state('signUp', {
    url: '/signup',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

$urlRouterProvider.otherwise('/tab/tab5/page20')

});
