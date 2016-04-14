'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('personaService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'persona/:id/',{id:'@id'});
  }
]);
