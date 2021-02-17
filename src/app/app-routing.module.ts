import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmigosComponent } from './amigos/amigos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConvitesComponent } from './convites/convites.component';
import { HomeComponent } from './home/home.component';
import { InicialComponent } from './inicial/inicial.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
} , {
  path: 'cadastro',
  component: CadastroComponent,
} , {
  path: 'inicial',
  component: InicialComponent,
} , {
  path: 'perfil',
  component: PerfilComponent,
} , {
  path: 'amigos',
  component: AmigosComponent,
} , {
  path: 'convites',
  component: ConvitesComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
