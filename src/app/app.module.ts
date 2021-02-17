import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AmigosComponent } from './amigos/amigos.component';
import { ConvitesComponent } from './convites/convites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CadastroComponent,
    InicialComponent,
    PerfilComponent,
    AmigosComponent,
    ConvitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
