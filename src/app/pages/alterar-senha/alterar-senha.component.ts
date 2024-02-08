import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {

  constructor(
    private httpClient : HttpClient
  ){}

  formAltera = new FormGroup({
    senhaAtual : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
    novaSenha : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)])
  });

  get form() : any{
    return this.formAltera.controls;
  }

  onSubmit(){

  }
}
