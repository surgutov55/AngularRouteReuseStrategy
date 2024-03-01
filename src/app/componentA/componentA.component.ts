import { Component } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './componentA.component.html',
})
export class ComponentA {
  constructor() {}

  ngOnInit() {
    console.log('Component A Initialized');
  }

  ngOnDestroy() {
    console.log('Component A Destroyed');
  }
}
