type redux$Reducer<T, R> = (state: T, action: R) => T;

interface redux$Store<T, R> {
  subscribe(observer: () => void): void;
  dispatch(action: R): void;
  getState(): T;
};

declare module 'redux' {
  declare function createStore<T, R>(reducer: redux$Reducer<T, R>): redux$Store<T, R>;
}
