define(["require", "exports", 'angular'], function (require, exports, angular) {
    var coreModule = angular.module('coreModule', ['ngRoute', 'ngResource']);
    return coreModule;
});
