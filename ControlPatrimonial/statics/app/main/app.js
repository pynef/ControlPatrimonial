'use strict';
/* jshint -W097 */
/* global angular, $, document, setTimeout */

var appControlPatrimonial = angular.module('app',
[
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ui.bootstrap',
  'RESTServices',
  'patrimonioModule'
])
.run(['$rootScope', '$location',
  function ($rootScope, $location) {
    console.log('run app');
  }
])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);
appControlPatrimonial.directive('renderInstitucion',['$resource', 'institucionService',
  function ($resource, institucionService) {

    return {
      restrict: 'EA',
      require: 'ngModel',
      template: '<span>{{ institucion.nombre }}</span>',
      priority: 1,
      scope:{ value:'='},
      link: function(scope, element, attrs, ngModelController){
        console.log(1)
        ngModelController.$formatters.unshift(function (valueFromModel) {
          //console.log('reverse local directive', valueFromModel)
          if(valueFromModel){
            console.log(2)
            InstitucionService.get({id: valueFromModel}).$promise.then(
              function(institucion){
                console.log(3)
                scope.institucion = institucion;
              },
              function(error){
              }
            );
          }
        });
      }
    };

}]);
