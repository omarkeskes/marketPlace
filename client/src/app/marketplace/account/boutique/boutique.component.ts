import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BoutiqueService } from './boutique.service';

@Component({
  moduleId:module.id,
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  articles:any;
  login:any;
  constructor(private boutiqueService:BoutiqueService ,private route: ActivatedRoute,private router:Router) {
         this.route.params.subscribe(params => {
       this.login = params['login'];
       this.boutiqueService.getArticles(this.login).subscribe(
          data =>{this.articles=data;console.log(this.articles)},
          err => {console.log(err)},
          ()=> {}
      )
    });

   }

  ngOnInit() {
  }

  delete(id:any){
    this.boutiqueService.deleteArticle(id).subscribe(
      data => {this.articles=data,console.log(data)},
      err=>{console.log(err)}
    );
  }

}
