/**
 * Created by jeppe on 11/23/14.
 */

/// <reference path="../bower_components/immutable/dist/immutable.d.ts" />

declare module Fynx {

  interface Action {
    listen(callback:Function): void;
  }

  interface Actions {
    [index: string] : Fynx.Action
  }

  interface Store {

  }

  interface Fynx {
    createActions (actions:string[]) : Fynx.Actions;

    createStore (immutableStructure:Immutable.Map): Fynx.Store;
  }

}

declare var Fynx:Fynx.Fynx

declare module 'fynx' {
  export = Fynx;
}
