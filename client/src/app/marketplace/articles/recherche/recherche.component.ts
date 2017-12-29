import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
@Component({
  moduleId:module.id,
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  categorie:any;
  categories:any[]=['Art, antiquités','Auto, moto','Beauté, bien-être, parfums','Bijoux, montres',
  'DVD, cinéma','Immobilier','Informatique, réseaux','Jeux vidéo, consoles','Loisirs créatifs','Maison',
  'Téléphonie, mobilité','Vêtements, accessoires','Livres, BD, revues','Electroménager'
  ];
  articles:any;
  constructor(private articlesService:ArticlesService) { }

  ngOnInit() {
           this.articlesService.getArtilces().subscribe(
          data =>{this.articles=data;console.log(this.articles)},
          err => {console.log(err)},
          ()=> {}
      )
  }

}
