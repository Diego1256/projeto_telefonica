
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PlanoService } from '../../plano.service'; // Substitua pelo caminho correto
import { enviroment } from '../../enviroment/app.enviroment';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {
  mensagemSucesso: string = '';
  mensagemErro: string = '';
  planos: any[] = []; // Adicione a tipagem adequada
  selectedPlanoId: number = 0;

  constructor(
    private httpClient: HttpClient,
    private planoService: PlanoService
  ) { }


logValor(campo: string, event: any): void {
  if (event && event.target && event.target.value) {
    console.log(`Valor do campo ${campo}:`, event.target.value);
  }
}
  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(200)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
    plano: new FormControl('', []), // Alterado o nome do controle
    senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  });

  get form() : any{
    return this.formCadastro.controls;
  }

  ngOnInit(): void {
    this.carregarPlanos();
  }

  carregarPlanos(): void {
    this.planoService.getPlanos().subscribe({
      next: (dados) => {
        this.planos = dados;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  onSubmit(): void {
    this.mensagemErro = '';
    this.mensagemSucesso = '';

    const planoSelecionadoControl = this.formCadastro.get('plano');

    if (planoSelecionadoControl && planoSelecionadoControl.value) {
      // Verifica se o valor do planoSelecionado é válido
      const planoId = parseInt(planoSelecionadoControl.value, 10);
      if (!isNaN(planoId)) {
        this.selectedPlanoId = planoId;

        console.log('Formulário antes do envio:', this.formCadastro.value);

      // Utilize o valor do novo campo 'planoSelecionado' no envio
      this.formCadastro.patchValue({ plano: this.selectedPlanoId.toString() });

      console.log('Formulário após modificação:', this.formCadastro.value);

      this.httpClient.post(
        enviroment.API_URL + "/api/criar-conta",
        this.formCadastro.value, { responseType: "text" }
      ).subscribe({
        next: (dados) => {
          this.mensagemSucesso = dados;
          this.formCadastro.reset();
        },
        error: (e) => {
          this.mensagemErro = e.error;
        }
      });
    }
    else {
      // Caso o planoId não seja um número válido
      console.error('ID do plano inválido:', planoSelecionadoControl.value);
      this.mensagemErro = 'Plano inválido. Selecione um plano válido.';
    }
  } else {
    // Caso o campo planoSelecionado esteja vazio ou não exista
    console.error('Campo do plano não preenchido.');
    this.mensagemErro = 'Plano não selecionado. Selecione um plano.';
  }
}}