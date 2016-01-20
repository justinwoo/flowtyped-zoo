declare module 'rx' {
  declare interface ArrayLike<T> {
    length: number;
    [index: number]: T;
  }

  declare class Observable<T> {
    static from(array: T[] | ArrayLike<T>): Observable<T>;
    static merge<R>(...sources: Observable<R>[]): Observable<R>;

    do(f: (item: T) => any): Observable<T>;
    map<R>(f: (item: T) => R): Observable<R>;
    scan<R>(f: (prev: R, next: T) => R): Observable<R>;
    skip(count: number): Observable<T>;
    startWith(init: any): Observable<T>;
    take(count: number): Observable<T>;

    subscribe(
      onNextOrSubject: ((item: T) => any) | Subject,
      onError?: (error: any) => any,
      Complete?: (item: T) => any
    ): {
      unsubscribe: () => void;
    };
  }

  declare class Subject<T> extends Observable<T> {
    onNext(item: T): void;
  }

  declare class ReplaySubject<T> extends Subject<T> {}
}
