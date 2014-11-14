/// <reference path="../../typings/tsd.d.ts" />

import angular = require('angular');

export var module = angular.module('app', [])
  .run(() => {
    console.log('foo bar baz');
  });
