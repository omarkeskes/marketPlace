import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceComponent } from './marketplace.component';
import { MarketplaceService } from './marketplace.service';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { ArticlesService } from './articles/articles.service';
import { AccountComponent } from './account/account.component';
import { BoutiqueComponent } from './account/boutique/boutique.component';
import { BoutiqueService } from './account/boutique/boutique.service';
import { AchatsComponent } from './account/achats/achats.component';
import { AddComponent } from './account/boutique/add/add.component';
import { FormsModule} from '@angular/forms';
import { ArticleFilterPipe } from './articles/article-filter.pipe';
@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    MarketplaceRoutingModule
  ],
  declarations: [MarketplaceComponent, ArticlesComponent, ArticleComponent,  AccountComponent, BoutiqueComponent, AchatsComponent, AddComponent, ArticleFilterPipe],
  providers:[MarketplaceService,ArticlesService,BoutiqueService ]
})
export class MarketplaceModule { }
