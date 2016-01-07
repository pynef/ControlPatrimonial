'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('institucionService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'instituciones/:id',{id:'@id'});
  }
])
///nexus/users/1/movements/
