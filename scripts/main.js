require.config({
    baseUrl: './scripts',
    paths: {
        'jquery': 'vendors/jquery-2.1.4',
        'angular': 'vendors/angular',
        'angular-route': 'vendors/angular-route',
        'angular-resource': 'vendors/angular-resource',
        'angular-ui-bootstrap': 'vendors/ui-bootstrap-tpls',
        'coreModule': '../app/modules/core/module',
        'coreRoutes': '../app/modules/core/routes',
    },
    shim: {
        'jquery': { exports: 'jquery' },
        'angular': { exports: 'angular', deps: ['jquery'] },
        'angular-route': { exports: 'angular-route', deps: ['angular'] },
        'angular-resource': { exports: 'angular-resource', deps: ['angular'] },
        'angular-ui-bootstrap': { exports: 'angular-ui-bootstrap', deps: ['angular'] },
    },
});
require(['jquery', 'angular', 'angular-route', 'angular-resource', 'coreModule', 'coreRoutes'], function ($, angular, angularRoute, angularResource, angularUiBootstrap, coreModule, coreRoutes) {
    $(function () {
        angular.bootstrap(document, ['coreModule']);
    });
});
