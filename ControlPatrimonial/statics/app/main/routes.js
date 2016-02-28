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
        templateUrl: window.static_url + 'app/patrimonio/views/institucion/home.html',
        controller: 'institucionCtrl'
      })
      .state('institucion.sede', {
        url: '/:id/sedes',
        templateUrl: window.static_url + '',
        controller: 'sedeCtrl'
      })
      .state('institucion.sedes.local', {
        url: '/:id/locales',
        templateUrl: window.static_url + '',
        controller: 'sedeCtrl'
      })
      .state('catalogo', {
        url: '/catalogo',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/home.html',
        controller: 'catalogoCtrl'
      })
      .state('catalogo.show', {
        url: '/:id/ver-mas',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/home.html',
        controller: 'catalogoCtrl'
      })
      .state('catalogo.edit', {
        url: '/:id/editar',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/home.html',
        controller: 'catalogoCtrl'
      })
      .state('catalogo.create', {
        url: '/nuevo',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/home.html',
        controller: 'catalogoCtrl'
      });
  }
]);
