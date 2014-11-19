/// <reference path="../../typings/tsd.d.ts" />

import angular = require('angular');

export var module = angular.module('foo.directive', [])
  .directive('fooBar', function ():Object {
    return {
      template: require('./foo.directive.html')
    }
  });
