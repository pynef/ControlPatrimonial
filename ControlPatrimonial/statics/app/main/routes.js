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
<<<<<<< HEAD
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
=======
    templateUrl: '/static/app/patrimonio/views/institucion/institucion.html',
    controller: 'institucionCtrl',
  })
  .when('/institucion/:idInstitucion/sedes', {
    templateUrl: '/static/app/patrimonio/views/institucion/sede.html',
    controller: 'sedeCtrl',
>>>>>>> a754be821a984b91a4d5bd08580db125f2466b0f
  });
  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);
});
