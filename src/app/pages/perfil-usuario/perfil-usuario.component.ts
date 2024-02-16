import { Component, OnInit } from '@angular/core';


import { UserService } from './UserService';
import { TempoMaximoUsuarioPlanoService } from './TempoMaximoUsuarioPlanoService';



@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css',
})


export class PerfilUsuarioComponent implements OnInit {
  nomeUsuario: string = '';
  telefoneUsuario: string = '';
  emailUsuario: string = '';
  nomePlano: string = '';
  tempoMaximoPlano: number=0; // Tempo máximo do plano em minutos
  tempoRestante: number=0; // Tempo restante do plano em segundos
  timer: any; // Referência para o timer

  constructor(
    private userService: UserService,
    private tempoMaximoUsuarioPlanoService: TempoMaximoUsuarioPlanoService
  ) { }

  ngOnInit(): void {

    this.userService.getUserData().subscribe((data) => {
      this.nomeUsuario = data.nome;
      this.telefoneUsuario = data.telefone;
      this.emailUsuario = data.email;
      this.nomePlano = data.nomePlano;
    });

    this.tempoMaximoUsuarioPlanoService.getTemposDeAplicacaoDosPlanos().subscribe((tempoMaximo) => {
      this.tempoMaximoPlano = tempoMaximo.tempoDeAplicacao;
      this.iniciarContagemRegressiva();
    });
  }

  iniciarContagemRegressiva(): void {
    this.tempoRestante = this.tempoMaximoPlano; // Converter minutos em segundos
    
    this.timer = setInterval(() => {
      this.tempoRestante --;
      console.log('Tempo restante:', this.tempoRestante * 60); // Mostrar tempo restante no console log
      if (this.tempoRestante <= 0) {
        this.notificarExpiracaoPlano();
      }
    }, 1000); // Executar a cada segundo
  }

  notificarExpiracaoPlano(): void {
    clearInterval(this.timer); // Parar a contagem regressiva
    // Aqui você pode exibir uma mensagem para o usuário ou tomar alguma outra ação
    alert('O tempo do plano expirou!');

    localStorage.removeItem('access-token');
    localStorage.removeItem('telefone_usuario');
    window.location.href = "/acessar-conta";
   
  }

  
calcularPorcentagemTempoRestante(): number {
  if (this.tempoMaximoPlano === 0) {
    return 0; // Evitar divisão por zero
  }
  const porcentagem =((this.tempoMaximoPlano - this.tempoRestante) / (this.tempoMaximoPlano)) * 100; // Calcular porcentagem concluída
  return Math.floor(porcentagem);
}

  logout(): void {
    if (window.confirm('Deseja mesmo sair do sistema?')) {
      localStorage.removeItem('access-token');
      localStorage.removeItem('telefone_usuario');
      window.location.href = "/acessar-conta";
    }
  }
}
