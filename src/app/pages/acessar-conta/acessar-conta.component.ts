import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-acessar-conta',
  templateUrl: './acessar-conta.component.html',
  styleUrls: ['./acessar-conta.component.css']
})
export class AcessarContaComponent {

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
      
    }

}
