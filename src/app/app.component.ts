import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CounterInterface } from './interface/change-counter.interface';
import { CounterInterfaceToken } from './interface/interface-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialCount = 2;
  counter$: Observable<number> = this.counterService.counter$;

  constructor(@Inject(CounterInterfaceToken) private counterService: CounterInterface) {
  }
}
