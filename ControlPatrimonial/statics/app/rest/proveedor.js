'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('proveedorService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'proveedores/:id/',{id:'@id'});
  }
]);
