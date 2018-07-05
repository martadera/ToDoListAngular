import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';
  tabTask=[];
  @ViewChild('inpucik') inpucikhtml: ElementRef;


  add(task:string):void {
    this.tabTask.push(task);
    this.inpucikhtml.nativeElement.value = '';
  }
  deleteTask(index:number){
    this.tabTask.splice(index,1);

}

}
