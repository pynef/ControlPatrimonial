'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('CtaContableService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'cuenta_contables/:id/', {id: '@id'});
    }
  ]);
