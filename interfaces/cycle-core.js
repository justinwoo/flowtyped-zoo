import Rx from 'rx';

declare module '@cycle/core' {
  declare type Sources = {
    [key: string]: Rx.Observable
  };

  declare type Sinks = Sources;

  declare type Drivers = {
    [key: string]: Rx.Observable
  };

  declare function run(main: (sources: Sources) => Sinks, drivers: Drivers): void;
}
