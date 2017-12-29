import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private loginservice:LoginService,private router:Router){
      
  }
    ngOnInit() {



  }

  logout(){
    sessionStorage.removeItem('login');
    this.router.navigate(['/login']);
  }
}
