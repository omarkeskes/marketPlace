import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
@Component({
  moduleId:module.id,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id:any;
  article:any;
  constructor(private articlesService:ArticlesService,private route: ActivatedRoute,private router:Router) {
         this.route.params.subscribe(params => {
       this.id = params['id'];
       this.articlesService.getOneArtilce(this.id).subscribe(
          data =>{this.article=data;console.log(this.article)},
          err => {console.log(err)},
          ()=> {}
      )
    });
   }

  ngOnInit() {
  }

}
