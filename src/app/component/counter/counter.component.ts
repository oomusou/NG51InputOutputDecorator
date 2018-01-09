import { Component, Inject, Input, OnInit } from '@angular/core';
import { CounterInterface } from '../../interface/change-counter.interface';
import { Observable } from 'rxjs/Observable';
import { CounterInterfaceToken } from '../../interface/interface-token';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() initialCount;
  counter$: Observable<number> = this.counterService.counter$;

  constructor(@Inject(CounterInterfaceToken) private counterService: CounterInterface) {
  }

  ngOnInit() {
    this.counterService.setInitialCount(this.initialCount);
  }

  onIncrementClick() {
    this.counterService.addOne();
  }

  onDecrementClick() {
    this.counterService.minusOne();
  }
}
