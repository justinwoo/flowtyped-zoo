/* @flow */

const {run} = require('@cycle/core');
const Rx = require('rx');

describe('cycle-core', () => {
  it('has run', (done) => {
    function main(sources) {
      return {
        test: sources.crap,
        output: sources.crap
      };
    }

    let count = 1;

    const drivers = {
      crap: () => Rx.Observable.from([1,2,3]),
      test: test$ => console.log('test$', test$.subscribe),
      output: output$ => output$.subscribe(x => {
        console.log('dfsdfd');
        if (count++ === 3) {
          done();
        }
      })
    };

    run(main, drivers);
  });
});
