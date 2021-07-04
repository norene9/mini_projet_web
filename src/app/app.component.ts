import { Component , OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'login2-in-angular';
  email:string;
  password:string;

   constructor(private router: Router) { }
   ngOnInit() {}

  loginUser(){
  if(this.email== 'admin@gmail.com' && this.password == "admin"){
  this.router.navigate(['/dashboard']);
  } else {
  alert("please check")
  }
  }
}
