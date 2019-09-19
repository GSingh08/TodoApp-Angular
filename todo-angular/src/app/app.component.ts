import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


//This runs on load
  constructor() {

  }

//void means it does not return anything
  changeName(name:string):void {

  }
}
