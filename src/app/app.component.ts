import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'projeto_tim';
 
  isAuthenticated : boolean = false;
  telefoneUsuario : string = '';

  ngOnInit(): void {
    var token = localStorage.getItem('access-token');
    if(token != null){
      this.isAuthenticated=true;
    }

    let telefone = localStorage.getItem('telefone_usuario');
    if(telefone != null){
      this.telefoneUsuario=telefone;
    }
  }

 

 
}
