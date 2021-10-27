import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../cliente/cliente.model';
import { ClienteService } from '../../cliente/cliente.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  clientes: Cliente[];
  //usuario logado é a variavel que eu preciso para para o comprar.components
  //usuario logado é a variavel que eu preciso para para o comprar.components, ainda não consegui fazer isso
  
  constructor(private clienteService: ClienteService, private router: Router) {
   }

  ngOnInit(): void {
 }

  //o link do objeto nome com os valores dos inputs se da pelo:
  //[(ngModel)].usuario.<login ou senha>
  //exemplo: [(ngModel)] = "usuario.email"

  usuario = {email: '', senha: ''}
  //testando para ver se ta puxando certinho
  public login(){
    console.log(`Teste login:${this.usuario.email} senha:${this.usuario.senha}`)
    this.validarClientes()
  }

  validarClientes(){
    
      this.clienteService.listar().subscribe(res => {
      this.clientes = res;
      //irei pegar pelo map os usuarios e as senhas
      //pra depois validalos no value dos inputs 
      const loggin = this.clientes.filter(qualquercoisa => qualquercoisa.email == this.usuario.email)
      //const senha = this.clientes.filter(qualquercoisa => qualquercoisa.senha == this.usuario.senha)
      //abaixo procurei no array retornado as senhas que batem com email inserido
      const retornoUsuario = loggin.find(qualquerCoisa => qualquerCoisa.senha === this.usuario.senha)
      console.log(retornoUsuario)

      if(this.usuario.senha != '' && this.usuario.senha != '' && retornoUsuario != '' && retornoUsuario != undefined) {
        this.clienteService.usuarioLogado = retornoUsuario
        console.log('usuario retornado:')
        console.log('tentativa de pegar:')
        console.log(this.clienteService.usuarioLogado.cep)
        console.log(this.clienteService.usuarioLogado.localidade)
        console.log('tentativa:')
        this.router.navigate(['/sistema']);
        console.log(this.clientes);
      }else{
        this.clienteService.showMessage('Usuário e/ou senhas incorretos')
      }

      
    });
  
    //console.log(this.clientes)
    //acima está dando undefinned pois o método seiLa está resolvendo de forma assíncrona
    //dai o console.log(this.clientes) retorna undefinned pois ainda não deu tempo de resolver a funcao assincrona
  }

}



