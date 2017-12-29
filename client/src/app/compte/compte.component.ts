import { Component, OnInit } from '@angular/core';
import {CompteService} from './compte.service';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
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

  constructor(private loginservice:LoginService,private compteservice:CompteService,private router:Router) { 
    if(!this.loginservice.isAuthenticated()){
      this.router.navigateByUrl('/login');
    }
  }
  compte : any ;
  ngOnInit() {
    this.compteservice.getUser(this.loginservice.getUser()._id).subscribe(
      (data) => {this.compte = data ;console.log(this.compte)},
      (err)=> {},
      ()=> {}
    )
  }

  update(){
    var membre = {
      id : this.loginservice.getUser()._id,
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
      password :  this.loginservice.getUser().password   
    }

    if(!membre.adresse){membre.adresse = this.loginservice.getUser().adresse;}
    if(!membre.name){membre.name = this.loginservice.getUser().name;}
    if(!membre.mail){membre.mail = this.loginservice.getUser().mail;}
    if(!membre.tel){membre.tel = this.loginservice.getUser().tel;}
    if(!membre.poste){membre.adresse = this.loginservice.getUser().poste;}
    if(!membre.fax){membre.name = this.loginservice.getUser().fax;}
    if(!membre.login){membre.mail = this.loginservice.getUser().login;}
    if(!membre.ville){membre.tel = this.loginservice.getUser().ville;}
    if(!membre.prenom){membre.name = this.loginservice.getUser().prenom;}
    if(!membre.company){membre.mail = this.loginservice.getUser().company;}
    if(!membre.pays){membre.tel = this.loginservice.getUser().pays;}
    console.log(membre);
    this.compteservice.updateUser(membre).subscribe(
      (data)=> {this.compte = data;console.log(this.compte);sessionStorage.setItem('login',JSON.parse(data));},
      (err)=> {console.log(err);},
      ()=> {}
    )

  }

}
