'use strict';
/* jshint -W097 */
/* global angular */
angular.module('patrimonioModule', [])
.run(['$rootScope', function($rootScope){
  $rootScope.static_url = window.static_url;
  $rootScope.api_url = '/rest/';
}]);
