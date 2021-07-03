import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login2-in-angular';
  email:string;
  password:string;

  loginUser(){
  if(this.email== 'admin@gmail.com' && this.password == "admin"){
  alert ("welcome")
  } else {
  alert("please check")
  }
  }
}
