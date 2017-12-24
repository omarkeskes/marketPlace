import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { LoginService } from './../../../login/login.service';
@Component({
  moduleId:module.id,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id:any;
  article:any;
  text:any;
  commentaires:any;

  constructor(private loginservice:LoginService,private articlesService:ArticlesService,private route: ActivatedRoute,private router:Router) {
         this.route.params.subscribe(params => {
       this.id = params['id'];
       
    });
   }

  ngOnInit() {
    this.articlesService.getOneArtilce(this.id).subscribe(
          data =>{this.article=data;console.log(this.article)},
          err => {console.log(err)},
          ()=> {}
      )
             this.articlesService.getCommentaires(this.id).subscribe(
          data =>{this.commentaires=data;console.log(data)},
          err => {console.log(err)},
          ()=> {}
      )
  }

  error : boolean = false;
  acheter(){
    if (parseInt(document.getElementById("product-quantity").getAttribute("value")) > this.article.quantite){
    var data={
      article:this.article._id,
      member:this.loginservice.getUser()._id
    }
    this.articlesService.acheterArticle(data).subscribe(
      data=> {console.log(data)},
      err =>{console.log(err)},
      ()=>{}
    );
    }else {
      this.error = true ;
    }
  }
  
  commentaire(){
    var comm={
      text:this.text,
      member:this.loginservice.getUser()._id,
      article:this.article._id
    }
    this.articlesService.addCommentaire(comm).subscribe(
      data =>{console.log(data)},
      err =>{console.log(err)},
      () => {}
    )
                 this.articlesService.getCommentaires(this.id).subscribe(
          data =>{this.commentaires=data;console.log(data)},
          err => {console.log(err)},
          ()=> {}
      )
  }
}
