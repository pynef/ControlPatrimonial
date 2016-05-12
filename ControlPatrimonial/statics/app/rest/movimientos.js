'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('bienService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'bienes/:id/',{id: '@id'});
    }
  ])
  .factory('bienDisponiblesService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'bienes_disponibles/:id/', {id: '@id'});
    }
  ])
  .factory('bienDetalleIngresoService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'bienes/:detalle_ingreso/detalle_ingreso/',
        {detalle_ingreso: '@detalle_ingreso'}
      );
    }
  ])
  .factory('bienAmbienteService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'bienes/:ambiente_id/ambiente/',
        {ambiente_id: '@ambiente_id'}
      );
    }
  ]);
