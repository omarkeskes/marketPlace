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
  company:any;
  poste:any;
  prenom:any;
  ville:any;
  pays:any;
  fax:any;
  mail:any;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  register(){
    var data = {
      name : this.name,
      login : this.login,
      prenom:this.prenom,
      mail:this.mail,
      fax:this.fax,
      poste:this.poste,
      ville:this.ville,
      pays:this.pays,
      company:this.company,
      adresse : this.addresse,
      tel:this.tel,
      password : this.password  
      }
    this.loginService.register(data).subscribe(
      data => {console.log(data)},
      err=> {console.log(err)},
      ()=> {}
    );

  }

}
