import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BoutiqueService } from '../boutique/boutique.service';
@Component({
  moduleId:module.id,
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {

  articles:any;
  id:any;
  constructor(private boutiqueService:BoutiqueService ,private route: ActivatedRoute,private router:Router) { 
         this.route.params.subscribe(params => {
       this.id = params['id'];
       this.boutiqueService.getAchats(this.id).subscribe(
          data =>{this.articles=data;console.log(this.articles)},
          err => {console.log(err)},
          ()=> {}
      )
    });

}
  ngOnInit() {
  }

}
