
/**************************
 Initialize the Angular App
 **************************/

var app = angular.module('app',
['ngRoute', 'ngAnimate','ngAria','ngMessages','ngMaterial','app.config',
 'ui.bootstrap', 'easypiechart','app.material', 'mgo-angular-wizard',
 'ui.tree', 'app.ui.ctrls', 'app.ui.services', // 'ngTagsInput',
 'app.controllers', 'app.directives', 'app.form.validation',
 'app.ui.form.ctrls', 'app.ui.form.directives', 'app.tables', //,'countTo'
 'app.task', 'app.chart.ctrls', 'app.chart.directives','app.music'
]).run(['$rootScope', '$location',
    function ($rootScope, $location) {
        console.log('app.run');
        $(document).ready(function(config){

            setTimeout(function(){
                $('.page-loading-overlay').addClass('loaded');
                $('.load_circle_wrapper').addClass('loaded');
            },1000);

        });
    }
]).config(['$routeProvider',
    function($routeProvider) {
        console.log('app.ROUTES');
        return $routeProvider.when('/', {
            redirectTo: '/dashboard'
        }).when('/dashboard', {
                templateUrl: '/static/app/main/views/home.html'
            }).otherwise({
                redirectTo: '/dashboard'
            });
    }
]).config(function($mdThemingProvider,$mdGestureProvider) {
    console.log('app.config');

  $mdGestureProvider.skipClickHijack();

  $mdThemingProvider.theme('default')
        .primaryPalette('cyan',{
            'default': '800'
        })
        .accentPalette('grey',{
            'default': '800'
        })
        /*.primaryPalette('deep-orange',{
          'default': '600'
        })
        .accentPalette('grey',{
          'default': '900'
        })*/
        /*.primaryPalette('indigo',{
          'default': '500'
        })
        .accentPalette('grey',{
          'default': '600'
        })*/
        ;
});

/**************************
 Timer
 **************************/
/* 
angular.module('countTo', []).controller('countTo', ['$scope',
        function($scope) {

            return $scope.countersmall1 = {
                countTo: 20,
                countFrom: 0
            },$scope.countersmall2 = {
                countTo: 42,
                countFrom: 0
            },$scope.countersmall3 = {
                countTo: 90,
                countFrom: 0
            },$scope.countersmall1dash = {
                countTo: 420,
                countFrom: 0
            },$scope.countersmall2dash = {
                countTo: 742,
                countFrom: 0
            },$scope.countersmall3dash = {
                countTo: 100,
                countFrom: 0
            };

        }]).directive('countTo', ['$timeout', function ($timeout) {
        return {
            replace: false,
            scope: true,
            link: function (scope, element, attrs) {

                var e = element[0];
                var num, refreshInterval, duration, steps, step, countTo, value, increment;

                var calculate = function () {
                    refreshInterval = 30;
                    step = 0;
                    scope.timoutId = null;
                    countTo = parseInt(attrs.countTo) || 0;
                    scope.value = parseInt(attrs.value, 10) || 0;
                    duration = (parseFloat(attrs.duration) * 1000) || 0;

                    steps = Math.ceil(duration / refreshInterval);
                    increment = ((countTo - scope.value) / steps);
                    num = scope.value;
                };

                var tick = function () {
                    scope.timoutId = $timeout(function () {
                        num += increment;
                        step++;
                        if (step >= steps) {
                            $timeout.cancel(scope.timoutId);
                            num = countTo;
                            e.textContent = countTo;
                        } else {
                            e.textContent = Math.round(num);
                            tick();
                        }
                    }, refreshInterval);

                };

                var start = function () {
                    if (scope.timoutId) {
                        $timeout.cancel(scope.timoutId);
                    }
                    calculate();
                    tick();
                };

                attrs.$observe('countTo', function (val) {
                    if (val) {
                        start();
                    }
                });

                attrs.$observe('value', function (val) {
                    start();
                });

                return true;
            }
        };

    }]);
*/