angular.module('starter', ['ionic','ngCordova', 'starter.controllers'])
.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider


        .state('dashboard', {
            url: "/dashboard",
            templateUrl: 'templates/dashboard.html',
            controller: 'dashboardCtrl'
        })
        
        .state('canvas', {
            url: "/canvas",
            templateUrl: 'templates/canvas.html',
            controller: 'canvasCtrl'
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/dashboard');
});