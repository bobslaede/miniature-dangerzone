/// <reference path="../typings/tsd.d.ts" />

import angular = require('angular');
import app = require('./app/app');

angular.bootstrap(document.documentElement, [app.module.name])
