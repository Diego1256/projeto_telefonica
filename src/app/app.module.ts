import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarContaComponent } from './pages/criar-conta/criar-conta.component';
import { AcessarContaComponent } from './pages/acessar-conta/acessar-conta.component';
import { AlterarSenhaComponent } from './pages/alterar-senha/alterar-senha.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarContaComponent,
    AcessarContaComponent,
    AlterarSenhaComponent,
    RecuperarSenhaComponent,
    PerfilUsuarioComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
