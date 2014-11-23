/// <reference path="../../typings/tsd.d.ts" />

import angular = require('angular');

import actions = require('./clients.actions');
import store = require('./clients.store');

export var module = angular.module('clients', [
  store.module.name,
  actions.module.name
]);
