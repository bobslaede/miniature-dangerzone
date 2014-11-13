/// <reference path="../typings/tsd.d.ts" />

require('angular');
import app = require('./app/app');

angular.bootstrap(document.documentElement, [app.name]);
