/* @flow */

const {createStore} = require('redux');

describe('redux', () => {
  it('has a createStore that works', (done) => {
    type State = {
      something: 1232
    };
    type Action = {
      type: 'action1',
      payload: {
        something: string
      }
    } | {
      type: 'action2',
      something: string
    };
    const reducer = (a: State, b: Action) => a;
    const store = createStore(reducer);

    store.subscribe(function () {
      const state: State = store.getState();
      done();
    });

    store.dispatch({
      type: 'action1',
      payload: {
        something: 'asad'
      }
    });

    store.dispatch({
      type: 'action2',
      something: 'string'
    })
  });
});
