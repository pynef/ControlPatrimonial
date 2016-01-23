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
    templateUrl: '/static/app/patrimonio/views/catalogo/list.html',
    controller: 'catalogoCtrl',
  })
  .when('/catalogo-de-bienes/edit/:id', {
    templateUrl: '/static/app/patrimonio/views/catalogo/list.html',
    controller: 'catalogoCtrl',
  })
  .when('/catalogo-de-bienes/crear', {
    templateUrl: '/static/app/patrimonio/views/catalogo/form.html',
    controller: 'catalogoCtrl',
  })
  .when('/institucion', {
    templateUrl: '/static/app/patrimonio/views/institucion/list.html',
    controller: 'institucionCtrl',
  })
  .when('/institucion/edit/:id', {
    templateUrl: '/static/app/patrimonio/views/institucion.html',
    controller: 'institucionCtrl',
  })
  .when('/institucion/crear', {
    templateUrl: '/static/app/patrimonio/views/institucion.html',
    controller: 'institucionCtrl',
  });
  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);
});
