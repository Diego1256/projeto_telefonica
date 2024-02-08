import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { AcessarContaComponent } from "./pages/acessar-conta/acessar-conta.component";
import { CriarContaComponent } from "./pages/criar-conta/criar-conta.component";
import { AlterarSenhaComponent } from "./pages/alterar-senha/alterar-senha.component";
import { RecuperarSenhaComponent } from "./pages/recuperar-senha/recuperar-senha.component";

const routes : Routes = [
    {path:'', pathMatch:'full', redirectTo:'acessar-conta'},
    {path:'acessar-conta', component:AcessarContaComponent},
    {path:'criar-conta', component:CriarContaComponent},
    {path:'alterar-senha', component:AlterarSenhaComponent},
    {path:'recuperar-senha',component:RecuperarSenhaComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}