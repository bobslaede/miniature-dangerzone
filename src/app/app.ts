/// <reference path="../../typings/tsd.d.ts" />

import angular = require('angular');

class AppService {

  private scope:ng.IScope;

  constructor($rootScope:ng.IRootScopeService) {

    this.scope = $rootScope.$new();

  }

  foo(s:string):string {
    console.log(this.scope);
    return "FOO" + s;
  }

}

export var module = angular.module('app', [])
  .service('appService', AppService)
  .run((appService:AppService, $rootScope:ng.IRootScopeService) => {
    console.log('hey foo! >(', appService.foo("string"), $rootScope);
  });
