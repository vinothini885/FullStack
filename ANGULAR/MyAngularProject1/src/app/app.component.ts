import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string;
  age:number;
  email:string;

  constructor(){
    this.name="vinothini";
    this.age=21;
    this.email="vinothini21@gmail.com";
  }
  changeName(){
    this.name="vino";
  }
  changeAge(){
    this.age=22;
  }
  changeEmail(){
    this.email="vino22@gmail.com"
  }
}
