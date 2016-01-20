/* @flow */

const {run} = require('@cycle/core');
const Rx = require('rx');

describe('cycle-core', () => {
  it('has run', (done) => {
    function main(sources) {
      return {
        output: sources.crap
      };
    }

    let count = 1;

    const drivers = {
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
