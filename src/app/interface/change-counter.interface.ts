import { Observable } from 'rxjs/Observable';

export interface CounterInterface {
  counter$: Observable<number>;

  setInitialCount(initialValue: number);

  addOne(): void;

  minusOne(): void;
}
