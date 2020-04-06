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
  items = 
  [
    {
      name:'iPhone11 Pro', 
      price: '$140'
    }, 
    {
      name:'iPhone11', 
      price: '$110'
    }, 
    {
      name: 'MacBookPro', 
      price: '$2400'
    }, 
    {
      name: 'MacBookAri'
      , price: '$1300'
    }
  ];



}
