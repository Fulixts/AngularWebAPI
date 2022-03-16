import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:`
  <div>
  <app-todoItem></app-todoItem>
  </div>`
})
export class AppComponent {
  title = 'AngularWebAPI';
}
