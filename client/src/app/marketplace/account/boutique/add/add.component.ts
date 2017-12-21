import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../login/login.service';
import { BoutiqueService } from '../boutique.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  titre:any;
  prix:any;
  quantite:any;
  description:any;
  photo:any;
  marque:any;
  etat:any;
  provenance:any;
  categorie:any;
  categories:any[]=['Art, antiquités','Auto, moto','Beauté, bien-être, parfums','Bijoux, montres',
  'DVD, cinéma','Immobilier','Informatique, réseaux','Jeux vidéo, consoles','Loisirs créatifs','Maison',
  'Téléphonie, mobilité','Vêtements, accessoires','Livres, BD, revues','Electroménager'
  ];

  constructor(private loginservice:LoginService,private boutiqueService:BoutiqueService) { }

  ngOnInit() {
  }

  add(){
    var article={
      titre:this.titre,
      prix:this.prix,
      description:this.description,
      marque:this.marque,
      quantite:this.quantite,
      categorie:this.categorie,
      provenance:this.provenance,
      etat:this.etat,
      vendeur:this.loginservice.getUser()._id
    }
    console.log(article);
    this.boutiqueService.addArticle(article).subscribe(
      data=>{console.log(data)},
              err => {console.log(err)},
        () => {}
    );
    

  }

}
