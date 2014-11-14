/// <reference path="../../typings/tsd.d.ts" />

import angular = require('angular');

class AppService {

  constructor() {

  }

  foo(s:string):string {
    return "FOO" + s;
  }

}

export var module = angular.module('app', [])
  .service('appService', AppService)
  .run((appService:AppService, $rootScope:ng.IRootScopeService) => {
    console.log('hey foo! >(', appService.foo("bar"), $rootScope);
  });
