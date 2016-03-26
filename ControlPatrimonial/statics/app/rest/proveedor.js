'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('ProveedorService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'proveedores/:id/',{id:'@id'});
  }
]);
