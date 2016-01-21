'use strict';
/* jshint -W097 */
/* global angular */
// Setup Rounting For All Pages
angular.module('app')
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/static/app/patrimonio/views/home.html',
    controller: 'homeCtrl',
  })
  .when('/home', {
    templateUrl: '/static/app/patrimonio/views/home.html',
    controller: 'homeCtrl',
  })
  .when('/catalogo-de-bienes', {
    templateUrl: '/static/app/patrimonio/views/catalogo.html',
    controller: 'catalogoCtrl',
  })
  .when('/institucion', {
    templateUrl: '/static/app/patrimonio/views/institucion/institucion.html',
    controller: 'institucionCtrl',
  })
  .when('/institucion/:idInstitucion/sedes', {
    templateUrl: '/static/app/patrimonio/views/institucion/sede.html',
    controller: 'sedeCtrl',
  });
  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);
});
