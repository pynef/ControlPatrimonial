'use strict';
/* jshint -W097 */
/* global angular, window */
// Setup Rounting For All Pages

angular.module('app')
.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: window.static_url + 'app/patrimonio/views/home.html',
        controller: 'homeCtrl'
      })
      .state('catalogo', {
        url: '/catalogo',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/home.html',
        controller: 'catalogoCtrl'
      })
      .state('catalogo.show', {
        url: '/:id/ver-mas',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/show.html',
        controller: 'catalogoShowCtrl'
      })
      .state('catalogo.edit', {
        url: '/:id/editar',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/form.html',
        controller: 'catalogoSaveCtrl'
      })
      .state('catalogo.create', {
        url: '/nuevo',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/form.html',
        controller: 'catalogoSaveCtrl'
      })
      .state('nota_entrada', {
        url: '/nota-de-entrada',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/nota_entrada.html',
        controller: 'notaEntradaCtrl'
      })
      .state('nota_entrada.info', {
        url: '/:id_nota',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/nota_entrada.info.html',
        controller: 'infoNotaEntradaCtrl'
      })
      .state('nota_entrada.create', {
        url: '/nota-de-entrada/nueva',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/nota_entrada.nuevo.html',
        controller: 'newNotaEntradaCtrl'
      })
      .state('nota_salida', {
        url: '/nota-de-salida',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/nota-salida.html',
        controller: 'notaSalidaCtrl'
      })
      .state('institucion', {
        url: '/institucion',
        templateUrl: window.static_url + 'app/patrimonio/views/institucion/instituciones.html',
        controller: 'institucionCtrl'
      })
      .state('institucion.new', {
        url: '/new',
        views: {
          "viewInstitucionNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/institucionNew.html',
            controller: 'institucionNewCtrl'
          }
        }
      })
      .state('institucion.edit', {
        url: '/:idInstitucion/edit',
        views: {
          "viewInstitucionNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/institucionNew.html',
            controller: 'institucionNewCtrl'
          }
        }
      })
      .state('institucion.sedes', {
        url: '/:idInstitucion/sedes',
        views: {
          "ViewInstitucionSedes": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/sedes.html',
            controller: 'institucionSedesCtrl'
          }
        }
      })
      .state('institucion.sedes.new', {
        url: '/new',
        views: {
          "viewSedeNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/sedeNew.html',
            controller: 'institucionSedeNewCtrl'
          }
        }
      })
      .state('institucion.sedes.edit', {
        url: '/:idSede/edit',
        views: {
          "viewSedeNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/sedeNew.html',
            controller: 'institucionSedeNewCtrl'
          }
        }
      })
      .state('institucion.sedes.locales', {
        url: '/:idSede/locales',
        views: {
          "ViewInstitucionSedeLocales": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/locales.html',
            controller: 'institucionSedeLocalesCtrl'
          }
        }
      })
      .state('institucion.sedes.locales.new', {
        url: '/new',
        views: {
          "ViewInstitucionSedeLocalesNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/localNew.html',
            controller: 'institucionSedeLocalesNewCtrl'
          }
        }
      })
      .state('institucion.sedes.locales.edit', {
        url: '/:idLocal/edit',
        views: {
          "ViewInstitucionSedeLocalesNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/localNew.html',
            controller: 'institucionSedeLocalesNewCtrl'
          }
        }
      })
      .state('institucion.sedes.locales.ambientes', {
        url: '/:idLocal/ambientes',
        views: {
          "ViewInstitucionSedeLocalAmbientes": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/ambientes.html',
            controller: 'institucionSedeLocalAmbientesCtrl'
          }
        }
      })
      .state('institucion.sedes.locales.ambientes.new', {
        url: '/new',
        views: {
          "ViewInstitucionSedeLocalAmbientesNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/ambienteNew.html',
            controller: 'institucionSedeLocalAmbientesNewCtrl'
          }
        }
      })
      .state('institucion.sedes.locales.ambientes.edit', {
        url: '/:idAmbiente/edit',
        views: {
          "ViewInstitucionSedeLocalAmbientesNew": {
            templateUrl: window.static_url + 'app/patrimonio/views/institucion/ambienteNew.html',
            controller: 'institucionSedeLocalAmbientesNewCtrl'
          }
        }
      })
      .state('cuenta_contable', {
        url: '/contabilidad',
        templateUrl: window.static_url + 'app/patrimonio/views/contabilidad/cuentas_contables.html',
        controller: 'contabilidadCtrl'
      })
      .state('cuenta_contable.new', {
        url: '/nuevo',
        templateUrl: window.static_url + 'app/patrimonio/views/contabilidad/cuenta_contableNew.html',
        controller: 'cuenta_contableNewCtrl'
      })
      .state('cuenta_contable.edit', {
        url: '/:idCuentaContable/edit',
        templateUrl: window.static_url + 'app/patrimonio/views/contabilidad/cuenta_contableNew.html',
        controller: 'cuenta_contableNewCtrl'
      })
      .state('cuenta_contable.depreciacion', {
        url: '/:idCuentaContable/depreciacion',
        views: {
          "ViewCuentasDepreciacion": {
            templateUrl: window.static_url + 'app/patrimonio/views/contabilidad/depreciacion.html',
            controller: 'cuenta_contableDepreciacionCtrl'
          }
        }
      })
      .state('rrhh', {
        url: '/rrhh',
        templateUrl: window.static_url + 'app/patrimonio/views/rrhh/rrhh.html',
        controller: 'rrhhCtrl'
      })
      .state('personas', {
        url: '/personas',
        templateUrl: window.static_url + 'app/patrimonio/views/rrhh/personas.html',
        controller: 'personaCtrl'
      })
      .state('personas.new', {
        url: '/nuevo',
        templateUrl: window.static_url + 'app/patrimonio/views/rrhh/personaNew.html',
        controller: 'personaNewCtrl'
      })
      .state('personas.edit', {
        url: '/:idPersona/edit',
        templateUrl: window.static_url + 'app/patrimonio/views/rrhh/personaNew.html',
        controller: 'personaNewCtrl'
      })
      .state('areas', {
        url: '/areas',
        templateUrl: window.static_url + 'app/patrimonio/views/rrhh/areas.html',
        controller: 'areaCtrl'
      })
      .state('areas.new', {
        url: '/new',
        templateUrl: window.static_url + 'app/patrimonio/views/rrhh/areaNew.html',
        controller: 'areaNewCtrl'
      })
      .state('areas.edit', {
        url: '/:idArea/edit',
        templateUrl: window.static_url + 'app/patrimonio/views/rrhh/areaNew.html',
        controller: 'areaNewCtrl'
      })
      .state('areas.puestos', {
        url: '/:idArea/puesto',
        views: {
          "ViewAreaPuestosShow": {
            templateUrl: window.static_url + 'app/patrimonio/views/rrhh/areaPuestos.html',
            controller: 'areaPuestosCtrl'
          }
        }
      })
      .state('areas.puestos.edit', {
        url: '/:idPuesto',
        views: {
          "ViewAreaPuestosEdit": {
            templateUrl: window.static_url + 'app/patrimonio/views/rrhh/areaPuestoEdit.html',
            controller: 'areaPuestosEditCtrl'
          }
        }
      })
      .state('proveedor', {
        url: '/proveedores',
        templateUrl: window.static_url + 'app/patrimonio/views/proveedor/proveedores.html',
        controller: 'proveedorCtrl'
      })
      .state('proveedor.new', {
        url: '/new',
        templateUrl: window.static_url + 'app/patrimonio/views/proveedor/proveedorNew.html',
        controller: 'proveedorNewCtrl'
      })
      .state('proveedor.edit', {
        url: '/:idProveedor/edit',
        templateUrl: window.static_url + 'app/patrimonio/views/proveedor/proveedorNew.html',
        controller: 'proveedorNewCtrl'
      })
      .state('trabajadores', {
        url: '/trabajadores',
        templateUrl: window.static_url + 'app/patrimonio/views/rrhh/trabajadores.html',
        controller: 'trabajadorCtrl'
      })
      .state('trabajadores.new', {
        url: '/new',
        templateUrl: window.static_url + 'app/patrimonio/views/rrhh/trabajadorNew.html',
        controller: 'trabajadorNewCtrl'
      })
      .state('trabajadores.edit', {
        url: '/:idTrabajador/edit',
        templateUrl: window.static_url + 'app/patrimonio/views/rrhh/trabajadorNew.html',
        controller: 'trabajadorNewCtrl'
      })
      .state('mantenimiento', {
        url: '/mantenimiento',
        templateUrl: window.static_url + 'app/patrimonio/views/catalogo/mantenimientoBien.html',
        controller: 'mantenimientoBienCtrl'
      })
  }
]);
