import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { NavbarBottomComponent } from './components/navbar-bottom/navbar-bottom.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { CollectButtonComponent } from './components/collect-button/collect-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    PokemonCataloguePage,
    TrainerPage,
    NavbarTopComponent,
    NavbarBottomComponent,
    LoginFormComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    CollectButtonComponent,
    LogoutButtonComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
