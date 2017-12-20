import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './marketplace.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { AccountComponent } from './account/account.component';
import { BoutiqueComponent } from './account/boutique/boutique.component';
import { AchatsComponent } from './account/achats/achats.component';

const routes: Routes = [{path:'home', component:MarketplaceComponent},
                        {path:'articles/:categorie',component:ArticlesComponent},
                        {path:'article/:id',component:ArticleComponent},
                         {path:'boutique/:login',component:BoutiqueComponent},
                        {path:'achats',component:AchatsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
