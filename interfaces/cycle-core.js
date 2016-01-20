import Rx from 'rx';

declare module '@cycle/core' {
  declare function run<T,R,S>(main: (sources: T) => R, drivers: S): void;
}
