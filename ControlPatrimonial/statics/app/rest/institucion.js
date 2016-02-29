'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('institucionService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'instituciones/:id/',{id:'@id'});
  }
  ])
  .factory('institucionSedesService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'instituciones/:id/sedes/',{id:'@id'});
  }
  ])
  .factory('sedeService',
    ['$rootScope', 'djResource', function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'sedes/:id/',{id:'@id'});
    }
  ])

///nexus/users/1/movements/
