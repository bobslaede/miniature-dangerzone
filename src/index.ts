/// <reference path="../typings/tsd.d.ts" />

import angular = require('angular');
import clients = require('./clients/clients');

var app = angular.module('app', [
  clients.module.name
]);

app.run(() => {
  console.log('App is bootstrapped');
});

angular.bootstrap(document.documentElement, [app.name]);
