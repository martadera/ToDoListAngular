import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';
  tablica=[];


  dodaj(task:string):void {
this.tablica.push(task);
  }
}
