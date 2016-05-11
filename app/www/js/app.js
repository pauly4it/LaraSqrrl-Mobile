// LaraSqrrl mobile app

var APP = angular
  .module('larasqrrl', ['ionic', 'ngResource'])
  .run(function($ionicPlatform) {
    console.log('loaded core');

    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // hide accessory bar by default
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        // prevents the view from scrolling when input is in focus
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        // style the status bar
        StatusBar.styleBlackTranslucent();
      }
    });
  })
  .controller('AppController', ["$scope", "$resource", '$state', '$ionicHistory', 'CurrentUser', function ($scope, $resource, $state, $ionicHistory, CurrentUser) {
    $scope.logout = function() {
      // don't allow back navigation on logout
      $ionicHistory.nextViewOptions({
        disableBack: true
      });

      // destroy the current user service
      CurrentUser.destroy();

      // navigate to login screen
      $state.go('app');
    }

  }])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
    $stateProvider

      .state('app', {
        url: '/',
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
      })

      .state('feed', {
        url: '/feed',
        templateUrl: 'partials/feed.html',
        controller: 'FeedController'
      });

    $urlRouterProvider.otherwise('/');

    $ionicConfigProvider.views.transition('android');
    $ionicConfigProvider.views.swipeBackEnabled(false);

    $httpProvider.defaults.useXDomain = true;
  });
