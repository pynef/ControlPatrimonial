'use strict';
/* global angular, _, $ */
/*
 Application controllers
 Main controllers for the app
 */

angular.module("app")
.controller("AdminAppCtrl", ["$scope", "$location",
  function ($scope, $location) {
    $scope.checkIfOwnPage = function () {
      return _.contains(["/404", "/pages/500", "/pages/login", "/pages/signin", "/pages/signin1", "/pages/signin2", "/pages/signup", "/pages/signup1", "/pages/signup2", "/pages/forgot", "/pages/lock-screen"], $location.path());
    };
    $scope.info = {
      theme_name: "Kimono",
      user_name: "John Doe"
    };
  }
])
.controller("NavCtrl", ["$scope",
  function ($scope) {
    $scope.navInfo = {
      tasks_number: 5,
      widgets_number: 13
    };
    $scope.toggleAlternativeMenu = function(){
      $('body .page-wrapper').toggleClass('nav-style--alternative');
    };
  }
])
.controller("DashboardCtrl", ["$scope",
    function ($scope) {
    }
])
.controller("signinCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.user = {
      email: "",
      password: ""
    }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
      return $scope.user = angular.copy(original), $scope.form_signin.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_signin.$valid && !angular.equals($scope.user, original);
    }, $scope.submitForm = function () {
      return $scope.showInfoOnSubmit = !0, $scope.revert();
    };
  }
])
.controller("signupCtrl", ["$scope",
  function ($scope) {
    var original;
    return $scope.user = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: ""
    }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
      return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine();
    }, $scope.canRevert = function () {
      return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
    }, $scope.canSubmit = function () {
      return $scope.form_signup.$valid && !angular.equals($scope.user, original);
    }, $scope.submitForm = function () {
      return $scope.showInfoOnSubmit = !0, $scope.revert();
    };
  }
])
.directive("validateEquals", [
  function () {
    return {
      require: "ngModel",
      link: function (scope, ele, attrs, ngModelCtrl) {
        var validateEqual;
        return validateEqual = function (value) {
          var valid;
          return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({
            value: void 0
          }) : void 0;
        }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function (newValue, oldValue) {
          return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0;
        });
      }
    };
  }
]);
