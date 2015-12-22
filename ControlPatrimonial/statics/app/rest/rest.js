angular.module('RESTServices', ['ngResources'])
.run(['$rootScope', function($rootScope){
  $rootScope.rest_base = '';
}]);
