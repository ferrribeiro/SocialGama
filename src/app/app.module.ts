import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmigosComponent } from './amigos/amigos.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConvitesComponent } from './convites/convites.component';
import { HomeComponent } from './home/home.component';
import { InicialComponent } from './inicial/inicial.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './login/login.component';
import { SairComponent } from './sair/sair.component';

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
    ConvitesComponent,
    LoginComponent,
    SairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
