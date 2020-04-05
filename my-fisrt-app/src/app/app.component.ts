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
  greets = ['Good Morning', 'Hello', 'Good Evening'];



}
