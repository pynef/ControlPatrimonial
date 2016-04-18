'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('grupoService',
    ['$rootScope', 'djResource', function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'grupos/:id/:clases',
        {id:'@id'},
        {
          clases: { method: 'GET', isArray:true, params: { clases: 'clases'} }
        }
      );
    }
  ])
  .factory('claseService',
    ['$rootScope', 'djResource', function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'clases/:id',{id:'@id'});
    }
  ])
  .factory('tipoService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'tipos/:id',{id:'@id'});
    }
  ])
  .factory('CatalogoService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'catalogobienes/:id/:search/',
        {id:'@id'},
          {
            search: {method: 'GET', isArray:true, params: { search: 'search'}}
          }
      );
    }
  ])
  .factory('NotaIngresoService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'nota_ingreso/:id/:ext/',{id:'@id'},
        {
          'save_detalles': {
            method: 'post',
            isArray: true,
            params: {'ext': 'savedetalles'}
          },
          'detalles': {
            method: 'get',
            isArray: true,
            params: {'ext': 'detalles'}
          }

        }
      );
    }
  ])
  .factory('NotaIngresoDetalleService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'nota_ingreso_detalle/:id/:ext/',{id:'@id'},
      {
        generar: {method: 'POST', isArray:true, params: {ext:'generar'}}
      });
    }
  ])
.factory('ingresoPorGuiaRemisionService',
  ['$rootScope', 'djResource',
  function ($rootScope, djResource) {
    return djResource( $rootScope.api_url + 'nota_ingreso_detalle/:guia_remision/guia_remision',{guia_remision:'@guia_remision'});
  }
])
;
///nexus/users/1/movements/
