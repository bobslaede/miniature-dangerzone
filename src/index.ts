/// <reference path="../typings/tsd.d.ts" />

import angular = require('angular');
import clients = require('./clients/clients');

var app = angular.module('app', [
  clients.module.name
]);

app.run((clientsStore:any) => {
  console.log('App is bootstrapped', clientsStore);
});

angular.bootstrap(document.documentElement, [app.name]);
