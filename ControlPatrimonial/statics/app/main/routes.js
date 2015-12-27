'use strict';
/* jshint -W097 */
/* global angular */
// Setup Rounting For All Pages
angular.module('app')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise('/');
    // pages
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/static/app/patrimonio/views/home.html',
      controller: 'homeCtrl'
    });
  }
]);
