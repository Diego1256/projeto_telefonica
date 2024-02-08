import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent {

  constructor(
    private httpClient : HttpClient
  ){}

  formRecupera = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email])
  });

  get form() : any{
    return this.formRecupera.controls;
  }

  onSubmit() : void{
    
  }

}
