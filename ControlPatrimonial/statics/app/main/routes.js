'use strict';
/* jshint -W097 */
/* global angular */
// Setup Rounting For All Pages

angular.module('app')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: window.static_url + 'app/main/views/home.html',
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
      });
  }
]);

/*
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
<<<<<<< HEAD
    templateUrl: '/static/app/patrimonio/views/institucion/institucion.html',
    controller: 'institucionCtrl',
  })
  .when('/institucion/:idInstitucion/sedes', {
    templateUrl: '/static/app/patrimonio/views/institucion/sede.html',
    controller: 'sedeCtrl',
=======
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
>>>>>>> 792ff8b2637c03eaebe8da042134f2d3eab37abb
  });
  // configure html5 to get links working on  jsfiddle
  //$locationProvider.html5Mode(true);
});
*/
