import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ArticlesService } from './articles.service';
@Component({
  moduleId:module.id,
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  categorie:any;
  articles:any;

  constructor(private articlesService:ArticlesService,private route: ActivatedRoute,private router:Router) { 
     this.route.params.subscribe(params => {
       this.categorie = params['categorie'];
       this.articlesService.getArtilcesByCategories(this.categorie).subscribe(
          data =>{this.articles=data;console.log(this.articles)},
          err => {console.log(err)},
          ()=> {}
      )
    });

  }

  ngOnInit() {

  }

}
