declare module 'rx' {
  declare class Observable<T> {
    static from(array: T[]): Observable<T>;
    static merge<R>(...sources: Observable<R>[]): Observable<R>;

    do(f: (item: T) => any): Observable<T>;
    map<R>(f: (item: T) => R): Observable<R>;
    scan<R>(f: (prev: R, next: T) => R): Observable<R>;
    skip(count: number): Observable<T>;
    startWith(init: any): Observable<T>;
    take(count: number): Observable<T>;

    subscribe(
      next: (item: T) => any,
      error?: (error: any) => any,
      complete?: (item: T) => any
    ): {
      unsubscribe: () => void;
    };
  }

  declare class Subject<T> extends Observable<T> {
    onNext(item: T): void;
  }
}
