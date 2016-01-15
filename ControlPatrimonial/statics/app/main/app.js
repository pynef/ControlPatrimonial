'use strict';
/* jshint -W097 */
/* global angular, $, document, setTimeout */
/**************************
 Initialize the Angular App
 **************************/

angular.module('app',
[
  'ngRoute',
  //'ui.router',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial',
  'ngMdIcons',
  'app.config',
  'ui.bootstrap',
  'uiModule',
  'RESTServices',
  'patrimonioModule'
])
.run(['$rootScope', '$location',
  function ($rootScope, $location) {
    //console.log('app.run');
    $rootScope.static_url = window.static_url;
    $rootScope.api_url = '/rest/';
    $(document).ready(function(config){
      //setTimeout(function(){
          $('.page-loading-overlay').addClass('loaded');
          $('.load_circle_wrapper').addClass('loaded');
      //},1000);
    });
  }
])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])
.config(function($mdThemingProvider,$mdGestureProvider) {
  //console.log('app .config');
  $mdGestureProvider.skipClickHijack();
  $mdThemingProvider.theme('default')
    /*.primaryPalette('cyan',{
        'default': '800'
    })
    .accentPalette('grey',{
        'default': '800'
    })*/
    /*.primaryPalette('deep-orange',{
      'default': '600'
    })
    .accentPalette('grey',{
      'default': '900'
    })*/
    .primaryPalette('indigo',{
      'default': '500'
    })
    .accentPalette('grey',{
      'default': '600'
    })
    ;
});
