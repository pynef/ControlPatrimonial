'use strict';
/* jshint -W097 */
/* global angular, $, document, setTimeout */
angular.module("app.directives", [])
.directive('reverseInstitucion',['$resource', 'institucionService',
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
