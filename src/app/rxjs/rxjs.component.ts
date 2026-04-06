import { Component } from '@angular/core';
import { of, from, interval, fromEvent, Observable, timer, range, throwError, EMPTY, defer, tap, filter, map, catchError } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {

  ngOnInit() {
    // Example subscriptions (you can uncomment one by one to test)
    // this.obs1.subscribe(console.log);
    // this.obs2.subscribe(console.log);
    // this.obs3.subscribe(console.log);
    // this.obs4.subscribe(e => console.log('Clicked!', e));
    // this.obs5.subscribe(console.log);
    // this.obs6.subscribe(console.log);
    // this.obs7.subscribe({
    //   next: val => console.log('Emitted:', val),
    //   error: err => console.error('Error:', err)
    // });
    // this.obs8.subscribe({
    //   complete: () => console.log('Completed without emitting')
    // });
    // this.obs9.subscribe(console.log);
    // this.obs10.subscribe(console.log);

    of(1, 2, 3, 4, 5)
      .pipe(
        tap(val => console.log('Before:', val)),
        filter(num => num % 2 === 0),    // only even numbers
        map(num => num * 10),            // transform
        tap(val => console.log('After:', val)),
        catchError(err => of('Error occurred!'))
      )
      .subscribe({
        next: val => console.log('Final:', val),
        complete: () => console.log('Completed!')
      });

  }

  // 1️⃣ Emits given values immediately
  obs1 = of(1, 2, 3);

  // 2️⃣ Converts array or promise to observable
  obs2 = from([10, 20, 30]);

  // 3️⃣ Emits values at regular intervals (in ms)
  obs3 = interval(1000); // emits 0, 1, 2, ...

  // 4️⃣ Emits event when user clicks anywhere on the document
  obs4 = fromEvent(document, 'click');

  // 5️⃣ Emits after a delay, and optionally continues
  obs5 = timer(2000, 1000);
  // → emits first value after 2s, then every 1s (like setTimeout + setInterval)

  // 6️⃣ Emits a range of sequential numbers
  obs6 = range(5, 3);
  // → starts from 5, emits 5,6,7

  // 7️⃣ Emits an error immediately
  obs7 = throwError(() => new Error('Something went wrong!'));

  // 8️⃣ Creates an observable that emits nothing and completes immediately
  obs8 = EMPTY;

  // 9️⃣ Creates an observable dynamically (lazy)
  obs9 = defer(() => of(Math.random()));
  // → creates a *new* observable each time it’s subscribed (not cached)

  // 🔟 Manually created observable
  obs10 = new Observable(observer => {
    observer.next('Hello');
    observer.next('RxJS');
    observer.complete();
  });
}

/*

The pipe() method is used to chain multiple RxJS operators together in a readable way.
It takes the emitted values from an observable, transforms them, and returns a new observable.

*/

/*
1. Transformation Operators
| Operator         | What it does                                                  | Example                               |
| ---------------- | ------------------------------------------------------------- | ------------------------------------- |
| map()        | Transforms each emitted value                                 | `map(val => val * 2)`                 |
| pluck()      | Extracts a property from an object                            | `pluck('name')` for `{name: 'Tejas'}` |
| mapTo()      | Replaces every emitted value with a constant                  | `mapTo('Clicked!')`                   |


*/


/*
2. Filtering Operators

| Operator             | Description                          | Example                         |
| -------------------- | ------------------------------------ | ------------------------------- |
| filter()         | Filters values based on condition    | `filter(x => x > 10)`           |
| take(n)          | Takes only the first `n` values      | `take(3)`                       |
| takeUntil(obs)   | Emits until another observable emits | `takeUntil(click$)`             |
| skip(n)          | Skips first `n` values               | `skip(2)`                       |
| distinct()       | Filters out duplicate values         | `distinct()`                    |
| debounceTime(ms) | Waits before emitting the last value | Useful for search boxes         |
| throttleTime(ms) | Ignores emissions for a duration     | Useful for rate-limiting clicks |


*/


/*
3. Combination Operators

| Operator            | Description                                                   | Example              |
| ------------------- | ------------------------------------------------------------- | -------------------- |
| combineLatest() | Combines latest values from multiple observables              | Combine form inputs  |
| concat()        | Runs observables sequentially                             | `concat(obs1, obs2)` |
| merge()         | Runs observables in parallel                              | `merge(obs1, obs2)`  |
| zip()           | Pairs emissions one by one                                    | `zip(obs1, obs2)`    |
| forkJoin()      | Waits for all observables to complete, then emits final array | Multiple API calls   |


*/


/*

4. Utility & Error Handling Operators

| Operator         | Description                                                 | Example                           |
| ---------------- | ----------------------------------------------------------- | --------------------------------- |
| tap()        | Perform side effects (like logging) without changing values | `tap(val => console.log(val))`    |
| catchError() | Handles errors and returns a fallback observable            | `catchError(err => of('Error!'))` |
| finalize()   | Executes code after completion/error                        | Cleanup                           |
| delay(ms)    | Delays emission                                             | Simulate network delay            |
| retry(n)     | Retries failed observable                                   | API retry mechanism               |


*/

/*

Transformation Operators  
switchMap vs mergeMap vs concatMap vs exhaustMap

| Operator       | Behavior                                         | Example Use                   |
| -------------- | ------------------------------------------------ | ----------------------------- |
| switchMap  | Cancels previous request and switches to new one | Live search                   |
| mergeMap   | Runs all requests in parallel                    | Loading multiple APIs at once |
| concatMap  | Waits for previous to complete before next       | Sequential tasks              |
| exhaustMap | Ignores new triggers while one is active         | Form submission prevention    |


*/