import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';
  tabTask=[];


  add(task:string):void {
this.tabTask.push(task);
  }
deleteTask(index:number){
this.tabTask.splice(index,1);

}

}
