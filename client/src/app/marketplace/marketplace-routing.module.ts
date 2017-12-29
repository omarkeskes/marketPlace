import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './marketplace.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { AccountComponent } from './account/account.component';
import { BoutiqueComponent } from './account/boutique/boutique.component';
import { AchatsComponent } from './account/achats/achats.component';
import { AddComponent } from './account/boutique/add/add.component';
import { RechercheComponent } from './articles/recherche/recherche.component';
const routes: Routes = [{path:'', component:MarketplaceComponent},
                        {path:'articles/:categorie',component:ArticlesComponent},
                        {path:'article/:id',component:ArticleComponent},
                         {path:'boutique/:login',component:BoutiqueComponent},
                        {path:'achats/:id',component:AchatsComponent},
                        {path:'add',component:AddComponent},
                        {path:'recherche',component:RechercheComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
