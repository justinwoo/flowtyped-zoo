/* @flow */

const Rx = require('rx');

const subject: Rx.Subject<number> = new Rx.Subject();
const simpleObserver = x => null;

subject.onNext(1);
subject.onNext(2);
subject.onNext(3);

describe('rx', () => {
  it('has from', () => {
    Rx.Observable.from([1, 2, 3]);
  });
  it('has map', () => {
    subject.map(x => x)
      .map(x => x / 2)
      .subscribe(simpleObserver);
    subject.map(x => 'some other type')
      .map(x => x.replace('some', 'Some'))
      .subscribe(simpleObserver);
  });
  it('has do', () => {
    subject.do(x => null)
      .map(x => x / 2)
      .subscribe(simpleObserver);
  });
  it('has scan', () => {
    subject.scan((a, b) => a + b)
      .map(x => x / 2)
      .subscribe(simpleObserver);
    subject.scan((a, b) => 'some other type')
      .map(x => x.replace('some', 'Some'))
      .subscribe(simpleObserver);
  });
  it('has startWith', () => {
    subject.startWith(123)
      .map(x => x / 2)
      .subscribe(simpleObserver);

    subject.startWith('something')
      .scan((a: string, b: number) => a)
      .map(x => x.replace('some', 'Some'))
      .subscribe(simpleObserver);

    // i think these lines are impossible to type reasonably:
    // subject.startWith('some other type')
    //   .take(1)
    //   .map(x => x.replace('some', 'Some'))
    //   .subscribe(simpleObserver);
    // subject.startWith('some other type')
    //   .skip(1)
    //   .map(x => x / 2)
    //   .map(x => x / 3)
    //   .subscribe(simpleObserver);
  });
});
