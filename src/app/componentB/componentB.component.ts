import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './componentB.component.html',
})
export class ComponentB implements OnInit {
  ngOnInit() {
    console.log('Component B Initialized');
  }

  ngOnDestroy() {
    console.log('Component B Destroyed');
  }
}
