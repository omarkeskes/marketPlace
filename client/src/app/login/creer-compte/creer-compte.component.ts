import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent implements OnInit {
  login : any ;
  name:any ;
  addresse : any ;
  tel : any ;
  password : any ;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  register(){
    var data = {
      name : this.name,
      mail : this.login,
      addresse : this.addresse,
      tel:this.tel,
      password : this.password    }
    this.loginService.register(data).subscribe(
      data => {console.log(data)},
      err=> {console.log(err)},
      ()=> {}
    );

  }

}
