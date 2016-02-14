'use strict';
/* jshint -W097 */
/* global angular, $, document, setTimeout */

angular.module('app',
[
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ui.bootstrap',
  'RESTServices',
  'patrimonioModule'
])
.run(['$rootScope', '$location',
  function ($rootScope, $location) {
    console.log('run app');
  }
])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);
