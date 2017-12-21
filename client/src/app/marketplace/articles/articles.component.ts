import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ArticlesService } from './articles.service';
import { LoginService } from './../../login/login.service';
@Component({
  moduleId:module.id,
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  categorie:any;
  articles:any;
  listFilter:String;

  constructor(private loginservice:LoginService,private articlesService:ArticlesService,private route: ActivatedRoute,private router:Router) { 
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

  acheter(id:any){
    var data={
      article:id,
      member:this.loginservice.getUser()._id
    }
    this.articlesService.acheterArticle(data).subscribe(
      data=> {console.log(data)},
      err =>{console.log(err)},
      ()=>{}
    );
  }

}
