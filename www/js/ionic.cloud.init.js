angular.module('ionic.cloud.init', ['ionic.cloud'])

.config(function($ionicCloudProvider) {
  $ionicCloudProvider.init({
    "core": {
      "app_id": "b7546a0c"
    }
  });
})