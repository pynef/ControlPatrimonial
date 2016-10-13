'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('personaService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'personas/:id/',{id:'@id'});
  }
])
  .factory('puestoService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'puestos/:id/',{id:'@id'});
  }
])
  .factory('areaService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'areas/:id/',{id:'@id'});
  }
])
  .factory('trabajadorService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'trabajadores/:id/',{id:'@id'});
  }
])
  .factory('areaPuestosService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'puestos/:id/area/',{id:'@id'});
  }
])
  .factory('personasNoTrabajadorasService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'personas/:idInstitucion/personas_no_trabajadoras/',
    {idInstitucion:'@id'});
  }
])
  .factory('personasNoProveedorasService',
  ['$rootScope', 'djResource', function ($rootScope, djResource) {
    return djResource($rootScope.api_url + 'personas/:idInstitucion/personas_no_proveedoras/',
    {idInstitucion:'@id'});
  }
]);
