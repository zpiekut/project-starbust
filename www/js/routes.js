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
      /page1/tab2/redeemListScroll
      /page1/tab5/redeemListScroll
      /page1/tab4/redeemListScroll
  */
  .state('tabController.redeemListScroll', {
    url: '/redeemListScroll',
    views: {
      'tab2': {
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.home'
      2) Using $state.go programatically:
        $state.go('tabController.home');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page20
      /page1/tab5/page20
  */
  .state('tabController.home', {
    url: '/page20',
    views: {
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      },
      'tab5': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.redeemJamesSt'
      2) Using $state.go programatically:
        $state.go('tabController.redeemJamesSt');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page12
      /page1/tab5/page12
      /page1/tab4/page12
  */
  .state('tabController.redeemJamesSt', {
    url: '/page12:id',
    views: {
      'tab2': {
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.redeemJamesStPass'
      2) Using $state.go programatically:
        $state.go('tabController.redeemJamesStPass');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page32
      /page1/tab5/page32
      /page1/tab4/page32
  */
  .state('tabController.redeemJamesStPass', {
    url: '/page32',
    views: {
      'tab2': {
        templateUrl: 'templates/redeemJamesStPass.html',
        controller: 'redeemJamesStPassCtrl'
      },
      'tab5': {
        templateUrl: 'templates/redeemJamesStPass.html',
        controller: 'redeemJamesStPassCtrl'
      },
      'tab4': {
        templateUrl: 'templates/redeemJamesStPass.html',
        controller: 'redeemJamesStPassCtrl'
      }
    }
  })

  .state('tabController.wallet', {
    url: '/page22',
    views: {
      'tab3': {
        templateUrl: 'templates/wallet.html',
        controller: 'walletCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.redeemPhoto'
      2) Using $state.go programatically:
        $state.go('tabController.redeemPhoto');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page28
      /page1/tab5/page28
      /page1/tab4/page28
  */
  .state('tabController.redeemPhoto', {
    url: '/page28',
    views: {
      'tab2': {
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.redeemPhotoPass'
      2) Using $state.go programatically:
        $state.go('tabController.redeemPhotoPass');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page31
      /page1/tab5/page31
      /page1/tab4/page31
  */
  .state('tabController.redeemPhotoPass', {
    url: '/page31',
    views: {
      'tab2': {
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.redeemDeco'
      2) Using $state.go programatically:
        $state.go('tabController.redeemDeco');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page27
      /page1/tab5/page27
      /page1/tab4/page27
  */
  .state('tabController.redeemDeco', {
    url: '/page27',
    views: {
      'tab2': {
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.redeemDecoPass'
      2) Using $state.go programatically:
        $state.go('tabController.redeemDecoPass');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page34
      /page1/tab5/page34
      /page1/tab4/page34
  */
  .state('tabController.redeemDecoPass', {
    url: '/page34',
    views: {
      'tab2': {
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.redeemVenture'
      2) Using $state.go programatically:
        $state.go('tabController.redeemVenture');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page26
      /page1/tab5/page26
      /page1/tab4/page26
  */
  .state('tabController.redeemVenture', {
    url: '/page26',
    views: {
      'tab2': {
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.redeemVenturePass'
      2) Using $state.go programatically:
        $state.go('tabController.redeemVenturePass');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page33
      /page1/tab5/page33
      /page1/tab4/page33
  */
  .state('tabController.redeemVenturePass', {
    url: '/page33',
    views: {
      'tab2': {
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
    url: '/page1',
    templateUrl: 'templates/tabController.html',
    abstract:true
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.volunteerListScroll'
      2) Using $state.go programatically:
        $state.go('tabController.volunteerListScroll');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page11
      /page1/tab5/page11
  */
  .state('tabController.volunteerListScroll', {
    url: '/page11',
    views: {
      'tab2': {
        templateUrl: 'templates/volunteerListScroll.html',
        controller: 'volunteerListScrollCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerListScroll.html',
        controller: 'volunteerListScrollCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.volunteerLOL'
      2) Using $state.go programatically:
        $state.go('tabController.volunteerLOL');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page23
      /page1/tab5/page23
  */
  .state('tabController.volunteerLOL', {
    url: '/page23:id',
    views: {
      'tab2': {
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.volunteerEcostewardThanks'
      2) Using $state.go programatically:
        $state.go('tabController.volunteerEcostewardThanks');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page25
      /page1/tab5/page25
  */
  .state('tabController.volunteerEcostewardThanks', {
    url: '/page25',
    views: {
      'tab2': {
        templateUrl: 'templates/volunteerEcostewardThanks.html',
        controller: 'volunteerEcostewardThanksCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerEcostewardThanks.html',
        controller: 'volunteerEcostewardThanksCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.volunteerEcosteward'
      2) Using $state.go programatically:
        $state.go('tabController.volunteerEcosteward');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page14
      /page1/tab5/page14
  */
  .state('tabController.volunteerEcosteward', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/volunteerEcosteward.html',
        controller: 'volunteerEcostewardCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerEcosteward.html',
        controller: 'volunteerEcostewardCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.volunteerDumpBuster'
      2) Using $state.go programatically:
        $state.go('tabController.volunteerDumpBuster');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page24
      /page1/tab5/page24
  */
  .state('tabController.volunteerDumpBuster', {
    url: '/page24',
    views: {
      'tab2': {
        templateUrl: 'templates/volunteerDumpBuster.html',
        controller: 'volunteerDumpBusterCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerDumpBuster.html',
        controller: 'volunteerDumpBusterCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.volunteerDumpBusterThank'
      2) Using $state.go programatically:
        $state.go('tabController.volunteerDumpBusterThank');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page13
      /page1/tab5/page13
  */
  .state('tabController.volunteerDumpBusterThank', {
    url: '/page13',
    views: {
      'tab2': {
        templateUrl: 'templates/volunteerDumpBusterThank.html',
        controller: 'volunteerDumpBusterThankCtrl'
      },
      'tab5': {
        templateUrl: 'templates/volunteerDumpBusterThank.html',
        controller: 'volunteerDumpBusterThankCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.volunteerLOLThanks'
      2) Using $state.go programatically:
        $state.go('tabController.volunteerLOLThanks');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/page17
      /page1/tab5/page17
  */
  .state('tabController.volunteerLOLThanks', {
    url: '/page17',
    views: {
      'tab2': {
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

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabController.yourProfile'
      2) Using $state.go programatically:
        $state.go('tabController.yourProfile');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab2/profile
      /page1/tab5/profile
  */

  .state('tabController.yourProfile', {
    url: '/profile',
    views: {
      'tab2': {
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

//VOUCHER ROUTE
  .state('voucher', {
    url: '/voucher',
    templateUrl: 'templates/voucher.html',
    controller: 'voucherCtrl'
  })
//

.state('voucher-list', {
  url: '/voucher-list',
  templateUrl: 'templates/voucher-list.html',
  controller: 'voucherListCtrl'
})

  .state('signUp', {
    url: '/signup',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

$urlRouterProvider.otherwise('/page1/tab2/page20')



});
