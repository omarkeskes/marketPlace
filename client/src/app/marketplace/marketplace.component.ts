import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles/articles.service';
@Component({
  moduleId: module.id,
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

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
