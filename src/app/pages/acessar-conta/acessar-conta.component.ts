import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { enviroment } from '../../enviroment/app.enviroment';

@Component({
  selector: 'app-acessar-conta',
  templateUrl: './acessar-conta.component.html',
  styleUrls: ['./acessar-conta.component.css']
})
export class AcessarContaComponent {

  mensagemErro: string = '';

  constructor(
    private httpClient : HttpClient
  ){}

    formAcesso = new FormGroup({
      telefone : new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
      senha : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)])
    });
    get form() : any{
      return this.formAcesso.controls;
    }

    onSubmit(): void{
      this.mensagemErro='';
      this.httpClient.post(enviroment.API_URL + "/api/autenticar",this.formAcesso.value, 
      {responseType:'text'}).subscribe({
        next :(data)=>{
          localStorage.setItem('access-token', data);
          this.formAcesso.reset();
          window.location.href ="/perfil-usuario"

          let telefone = this.formAcesso.value.telefone
          if(telefone != null){
            localStorage.setItem('telefone_usuario', telefone);
          }
        },
        error:(e)=>{
          this.mensagemErro=e.error;
        }

      })
      
    }

}
