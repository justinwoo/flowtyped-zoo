declare module 'redux' {
  declare type Reducer<T, R> = (state: T, action: R) => T;

  declare interface Store<T, R> {
    subscribe(observer: () => void): void;
    dispatch(action: R): void;
    getState(): T;
  }

  declare function createStore<T, R>(reducer: Reducer<T, R>, init: T): Store<T, R>;
}
