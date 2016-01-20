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
      output: output$ => {
        const myreplay = new Rx.ReplaySubject(3);
        Rx.Observable.from([1,2,3]).subscribe(myreplay);
        myreplay.subscribe(x => x);

        // this part doesn't work in jest for some reason:
        // you can see cycle and rx aren't being mocked, so what gives?

        let count = 0;

        output$.subscribe(x => {
          console.log('dfsdfd');
          if (++count === 3) {
            done();
          }
        })

        done();
      }
    };

    run(main, drivers);
  });
});
