import { Component, OnInit} from '@angular/core';


import { UserService } from './UserService';



@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css',
})


export class PerfilUsuarioComponent implements OnInit{
  nomeUsuario : string = '';
  telefoneUsuario : string = '';
  emailUsuario : string = '';
  nomePlano : string = '';
  constructor (
    private userService : UserService
  ){}
  
  ngOnInit(): void {

    this.userService.getUserData().subscribe((data) => {
      this.nomeUsuario = data.nome; 
      this.telefoneUsuario=data.telefone;
      this.emailUsuario=data.email;
      this.nomePlano=data.nomePlano;
    });
    
  }
  

  logout() : void{
    if(window.confirm('Deseja mesmo sair do sistema?')){
      localStorage.removeItem('access-token');
      localStorage.removeItem('telefone_usuario');
      window.location.href="/acessar-conta";
    }
  }
}
