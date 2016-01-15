'use strict';
/* jshint -W097 */
/* global angular */

angular.module('RESTServices')
  .factory('grupoService',
    ['$rootScope', 'djResource', function ($rootScope, djResource) {
      return djResource($rootScope.api_url + 'grupos/:id/:clases',
        {id:'@id'},
        {
          clases: { method: "GET", isArray:true, params: { clases: 'clases'} }
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
      return djResource( $rootScope.api_url + 'catalogobienes/:id',{id:'@id'});
    }
  ]);
///nexus/users/1/movements/
