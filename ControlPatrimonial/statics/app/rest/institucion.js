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
  .factory('SedeLocalesService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'sedes/:id/locales/',{id:'@id'});
  }
  ])
  .factory('localService',
    ['$rootScope', 'djResource', function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'locales/:id/',{id:'@id'});
    }
  ])
  .factory('localAmbientesService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'locales/:id/ambientes/',{id:'@id'});
  }
  ])
  .factory('ambienteService',
    ['$rootScope', 'djResource', function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'ambientes/:id/',{id:'@id'});
    }
  ])
  .factory('tipoAmbientesService',
    ['$rootScope', 'djResource', function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'tipo_ambientes/:id/',{id:'@id'});
    }
  ]);
///nexus/users/1/movements/
