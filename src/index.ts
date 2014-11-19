/// <reference path="../typings/tsd.d.ts" />

import angular = require('angular');
import app = require('./app/app');
import foo = require('./foo/foo.directive');

var mod = angular.module('mod', [app.module.name, foo.module.name]);

angular.bootstrap(document.documentElement, [mod.name]);

console.log('bootstrapped');
