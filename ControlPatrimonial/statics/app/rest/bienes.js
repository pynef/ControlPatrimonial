'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('tipoMediaService',
    ['$rootScope', 'djResource', function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'bien/grupo/:id',{id:'@id'});
    }
  ])
  .factory('tipoAlmacenService',
    ['$rootScope', 'djResource', function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'users/:id/balance',{id:'@id'});
    }
  ])
  .factory('almacenService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'deposits/:id',{id:'@id'});
    }
  ])
  .factory('inventarioService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'deposits/:id',{id:'@id'});
    }
  ])
  .factory('altaBienService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'deposits/:id',{id:'@id'});
    }
  ])
  .factory('disposicionBienService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'deposits/:id',{id:'@id'});
    }
  ])
  .factory('asignacionBienService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'deposits/:id',{id:'@id'});
    }
  ])
  .factory('trasladoBienService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'deposits/:id',{id:'@id'});
    }
  ])
///Grupos y Clases
  .factory('grupoService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource( $rootScope.api_url + 'grupos/:id',{id:'@id'});
    }
  ])
  .factory('grupoClasesService',
    ['$rootScope', 'djResource',
    function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'grupos/:id/clases',{id:'@id'});
    }
  ]);
