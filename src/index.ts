/// <reference path="../typings/tsd.d.ts" />

import angular = require('angular');

var app = angular.module('app', []);

app.run(() => {
  console.log('App is bootstrapped');
});

angular.bootstrap(document.documentElement, [app.name]);
