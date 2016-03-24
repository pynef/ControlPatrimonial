'use strict';
/* jshint -W097 */
/* global angular, window */
// Setup Rounting For All Pages

angular.module('app')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: window.static_url + 'app/patrimonio/views/home.html',
        controller: 'homeCtrl'
      })
      .state('institucion', {
        url: '/institucion',
        templateUrl: window.static_url + 'app/patrimonio/views/institucion/instituciones.html',
        controller: 'institucionCtrl'
      })
      .state('institucion.new', {
        url: '/new',
        views: {
          "viewInstitucionNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/institucionNew.html',
            controller: 'institucionNewCtrl'
          }
        }
      })
      .state('institucion.edit', {
        url: '/:idInstitucion/edit',
        views: {
          "viewInstitucionNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/institucionNew.html',
            controller: 'institucionNewCtrl'
          }
        }
      })
      .state('institucion.sedes', {
        url: '/:idSede/sedes',
        views: {
          "ViewInstitucionSedes": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/sedes.html',
            controller: 'institucionSedesCtrl'
          }
        }
      })
      .state('institucion.sedes.new', {
        url: '/sede/new',
        views: {
          "viewSedeNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/sedeNew.html',
            controller: 'institucionSedeNewCtrl'
          }
        }
      })
      .state('catalogo', {
        url: '/catalogo',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/home.html',
        controller: 'catalogoCtrl'
      })
      .state('catalogo.show', {
        url: '/:id/ver-mas',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/show.html',
        controller: 'catalogoShowCtrl'
      })
      .state('catalogo.edit', {
        url: '/:id/editar',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/form.html',
        controller: 'catalogoSaveCtrl'
      })
      .state('catalogo.create', {
        url: '/nuevo',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/form.html',
        controller: 'catalogoSaveCtrl'
      })
      .state('contabilidad', {
        url: '/contabilidad',
        templateUrl: window.static_url + 'app/patrimonio/views/contabilidad/cuentas_contables.html',
        controller: 'contabilidadCtrl'
      })
  }
]);
