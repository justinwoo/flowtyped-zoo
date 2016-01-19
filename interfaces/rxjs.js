declare module 'rxjs' {
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
      next: (item: T) => any,
      error?: (error: any) => any,
      complete?: (item: T) => any
    ): Subscription;
  }

  declare class Subscription {
    isUnsubscribed: boolean;
    unsubscribe: () => void;
  }

  declare class Subject<T> extends Observable<T> {
    next(item: T): void;
    error(err: any): void;
    complete(): void;
  }
}
