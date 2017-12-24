import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { MarketplaceRoutingModule } from './marketplace/marketplace-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CreerCompteComponent } from './login/creer-compte/creer-compte.component';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import {CompteService} from './compte/compte.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreerCompteComponent,
    CompteComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MarketplaceModule,
    MarketplaceRoutingModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'register',component:CreerCompteComponent},
      {path:'compte',component:CompteComponent}
    ])
  ],
  providers: [LoginService,CompteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
