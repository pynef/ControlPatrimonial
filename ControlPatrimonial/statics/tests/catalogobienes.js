'use strict';

/* global describe, it, expect, beforeEach, module, inject */

describe('MainCtrl', function(){
  var $rootScope,
      $scope,
      controller;

  beforeEach(function(){
    module('CombinatorApp');

    inject(function($injector){
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('MainCtrl',{$scope: $scope});
    });

  });

  describe('Test de inicializacion del controlador "MainCtrl".', function(){

    it('Lenguaje por defecto de be ser igual a EN ', function(){
      expect($scope.lang).toBe('en');
    });
    it('poderes deben estar como no definidas', function(){
      expect($scope.powers).toBe(undefined);
    });
    describe('Cargando poderes', function(){
      beforeEach(function(){
        //load data inicial para el scope
        $scope.load();
      });
      it('los poderes deberian estar cargados', function(){
        expect($scope.power).toBe(false);
        expect($scope.apowers.length).toBe(0);
        expect($scope.bpowers.length).toBe(0);
      });
    });
    describe('Removiendo poderes', function(){
      beforeEach(function(){
        //load data inicial para el scope
        $scope.clearPower();
      });
      it('poderes deberian estar en blanco', function(){
        expect($scope.powers).toBe(undefined);
      });
    });
  });
});
