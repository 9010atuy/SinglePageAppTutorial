import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-fisrt-app';

  codeby:string = 'yuta';
  
  // type
  year:number = 2020;
  month:number = 4;
  day:number = 5;
  // codeby:any = 'yuta';

  // array
  greets = [
    {name: 'Bob', greet:'Good Morning'},
    {name: 'Ann', greet:'2002'}, 
    {name: 'Jonus', greet: 'Perfect Stranger'}];
  

  doSomething(){
    alert('button clicked;');
  }

  share(){
    alert('shared!');
  }

  onNotify(){
    alert('You will be notified when the item goes on sale');
  }
  
}
