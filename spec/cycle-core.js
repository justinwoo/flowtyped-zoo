/* @flow */

const {run} = require('@cycle/core');
const Rx = require('rx');

describe('cycle-core', () => {
  it('has run', (done) => {
    type Crap = Rx.Observable<number>;
    type Output = Rx.Observable<number>;
    type Drivers = {
      crap: () => Crap,
      output: (output$: Output) => any;
    };
    type Sources = {
      crap: Crap
    };
    type Sinks = {
      output: Output
    };

    function main(sources: Sources): Sinks {
      return {
        output: sources.crap
      };
    }

    let count = 1;

    const drivers: Drivers = {
      crap: () => Rx.Observable.from([1,2,3]),
      output: output$ => output$.subscribe(x => {
        if (count++ === 3) {
          done();
        }
      })
    };

    run(main, drivers);
  });
});
