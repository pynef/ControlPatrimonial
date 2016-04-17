'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('cuentasService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'cuentas/:id/', {id: '@id'});
    }
  ]);
