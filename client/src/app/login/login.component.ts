import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any;
  password:any;

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  authenticate(){
    var user={
      login:this.login,
      password:this.password

    }
    console.log(user);
    this.loginService.login(user).subscribe(
      data => {
        sessionStorage.setItem('login',JSON.stringify(data));
        console.log(data);
          this.router.navigate(['/']);

      }
    );
  }

  continuer(){
    this.router.navigate(['/register']);
  }

}
