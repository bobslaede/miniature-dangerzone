/// <reference path="../typings/tsd.d.ts" />

import Immutable = require('immutable');

export var module = angular.module('immutable', [])
  .factory('Immutable', function () {
    return Immutable;
  });
