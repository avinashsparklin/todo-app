import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  name:string = 'Avinash';

  constructor(){
    console.log('qwerty');
    this.changeName('Wadhawan');
  }

  changeName(name:string):void {
    this.name = name;
  }
}
