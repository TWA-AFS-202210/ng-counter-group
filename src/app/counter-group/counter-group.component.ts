import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter.model';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent implements OnInit {
  counters: Counter[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

  doCreateCounter(): void {
    this.counters.push(new Counter(0))
  }

  sumCounts(): number {
    return this.counters.map(counter => counter.count)
      .reduce((a, b) => a + b, 0);
  }
}
