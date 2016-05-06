'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('bienService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'bienes/:id/',
      {id: '@id'},
        {
          detalle_ingreso: { method: 'GET', isArray:true, params: { detalle_ingreso: 'detalle_ingreso'} }
        }
      );
    }
  ])
  .factory('bienDisponiblesService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'bienes_disponibles/:id/', {id: '@id'});
    }
  ]);
