/**
 * Created by jeppe on 11/23/14.
 */

/// <reference path="../bower_components/immutable/dist/immutable.d.ts" />

declare module Fynx {

  interface Action {
    listen(listener:Function): Function;
    unlisten(listener:Function): void;
  }

  interface Actions {
    [index: string] : Fynx.Action
  }

  interface Store extends Fynx.Action {
    isEmpty():Boolean;
  }

  interface Fynx {
    createActions (actions:string[]) : Fynx.Actions;

    createStore (data?:any, prepare?:Function): Fynx.Store;
  }

}

declare var Fynx:Fynx.Fynx

declare module 'fynx' {
  export = Fynx;
}
