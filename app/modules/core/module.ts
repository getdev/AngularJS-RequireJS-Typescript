import angular = require('angular');
import angularRoute = require('angular-route');
import angularResource = require('angular-resource');

var coreModule = angular.module('coreModule', ['ngRoute', 'ngResource']);
export = coreModule