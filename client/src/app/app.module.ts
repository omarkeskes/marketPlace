import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { MarketplaceRoutingModule } from './marketplace/marketplace-routing.module';
import { LoginComponent } from './login/login.component';
import { CreerCompteComponent } from './login/creer-compte/creer-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreerCompteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    MarketplaceModule,
    MarketplaceRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
