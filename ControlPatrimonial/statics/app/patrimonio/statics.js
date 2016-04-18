'use strict';
/* jshint -W097 */
/* global angular, window */
angular.module('patrimonioModule')
.constant('statics', {
    unidades_medida: [
      {id: 1, nombre: 'unidades'},
      {id: 2, nombre: 'Kilogramos'},
      {id: 3, nombre: 'Litros'},
    ],
    tipo_moneda: [
      {id: 1, nombre: 'Soles'},
      {id: 2, nombre: 'Dolares'}
    ],
    tipo_comprobante: [
      {id: 1, nombre: 'Factura'},
      {id: 2, nombre: 'Boleta'}
    ],
    tipo_condiciones: [
      {id: 1, nombre: 'Compra'},
      {id: 2, nombre: 'Donación'},
      {id: 3, nombre: 'Bonificación'}
    ]
  });
