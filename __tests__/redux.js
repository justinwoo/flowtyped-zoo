/* @flow */

const {createStore} = require('redux');

describe('redux', () => {
  it('has a createStore that works', (done) => {
    type State = {
      something: number
    };
    type Action = {
      type: 'action1',
      payload: {
        something: number
      }
    } | {
      type: 'action2',
      payload: number
    };
    const reducer = (a: State, b: Action) => {
      switch (b.type) {
        case 'action1':
          return {
            something: b.payload.something
          };
        case 'action2':
          return {
            something: b.payload
          };
        default:
          return a;
      }
    };
    const store = createStore(reducer);

    store.subscribe(function () {
      const state: State = store.getState();
      done();
    });

    store.dispatch({
      type: 'action1',
      payload: {
        something: 123
      }
    });

    store.dispatch({
      type: 'action2',
      payload: 123
    })
  });
});
