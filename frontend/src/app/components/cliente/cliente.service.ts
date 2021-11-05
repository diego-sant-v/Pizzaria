import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
// o decorator @injectable me diz que essa classe pode ser injetada em outros lugares
//posso injetar ele em componentes de criacao de cliente por exemplo
//ATENÇÃO:
//irei fazer uma requisição do tipo post no httpService
//como irei fazer pelo serviço, consigo injetar ele e tornalo "visivel" para outros componentes

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  idUsuario: any
  //QUALQUER COISA QUE EU COLOCAR AQUI DENTRO SERÁ VISUALIZADO EM OUTROS COMPONENTES
 private readonly API = "http://localhost:3001/usuario"
 public APIATUALIZA = "http://localhost:3001/usuario/"
 //motivo pelo qual não estava conseguindo inserir novas pizzas em usuários já cadastrados
 //não estava conseguindo inserir a pizza de acordo com o usuário logado na verdade
 //acontece que eu estava usando o get pra atualizar em cima de um json já criado
 //ele retornava como duplicate uma vez que já tinha criado um usuário (dentro da usuarioLogado)
 //tive que usar o put pra atualizar o registro e atribuir uma nova api, estou passando um id fixo nesse novo "Link"
 //ESTOU GERANDO UM ARRAY DINAMICO NA cliente.model DENTRO DOS PEDIDOS, PRA CRIAR UM ARRAY DE OBJETOS E ASSIM
 //EU CONSEGUIR GERAR N ARRAYS DE ACORDO COM O PEDIDO DE PIZZA GERADO
 // APIATUALIZA usada junto com o put(ou patch) pra atualizar registros, mas preciso passar um id no "link"
 
 //declarei a variavel usuarioLogado aqui na serviço
 //na section.component.ts eu atribui a ela o valor do usuario logado atual
 //e em comprar eu acesso essa variavel com o seu valor mudado
 tempoMediodeEspera: number
 usuarioLogado: Cliente;
 informacoesPedido: any;
 valorDaPizza: any;
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  showMessageWelcome(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  //o cliente será responsável por criar um novo cliente no backend
  create(cliente: Cliente): Observable<Cliente> {
    //mandando requisicao http pro server
    return this.http.post<Cliente>(this.API, cliente)
  }

  estimarTempoDePreparo(cliente: Cliente){
    //setTimeout(() => {
    //console.log('tempo medio atualizado, novo é:')
     //this.tempoMediodeEspera = 0
     //this.usuarioLogado.pedido?.map(x => x.tempoDeEspera).push(20)
     //a cada 4,5 segundo eu adiciono o elemento de numero 5 no final do array
     //na verdade era pra a cada passagem no timer ele subtrair um tempo da propriedade
     //mas ainda nao estou conseguindo
     //return this.http.put<Cliente>(this.APIATUALIZA, cliente)
    //}, 4500)
    
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    //eu zerei a APIATUALIZA, pois ele estava concatenando a cada chamada do método
    //um idUsuario, isso fazia com que o caminho para o id usuario ficasse errado
    //uma vez que um id = 10, a cada chamada ficaria +- com o caminho 1010, assim por diante...
    this.APIATUALIZA = ''
    this.APIATUALIZA = "http://localhost:3001/usuario/"
    console.log('teste de teste no atualizar')
    console.log(this.idUsuario)
    //abaixo eu peguei o link da api e somei com o this.idUsuario
    //esse this.idUsuario está sendo atribuido como o id do usuário no componente de dialog
    //no final ficou mais ou menos assim: "http://localhost:3001/usuario/ID DO USUARIO"
    //dessa forma acima eu consigo passar o id do usuario dentro da string de link
    this.APIATUALIZA += this.idUsuario
    console.log('resultado da api completa:')
    console.log(this.APIATUALIZA)
    //mandando requisicao http pro server
    return this.http.put<Cliente>(this.APIATUALIZA, cliente)
  }

//lista todo o objeto json.db em arrays de objetos
  listar(){
    return this.http.get<Cliente[]>(this.API);
  }

  listarParaTabela(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API)
  }

  pegarUsuarioLogado(cliente: Cliente): Observable<Cliente[]> {
    //eu zerei a APIATUALIZA, pois ele estava concatenando a cada chamada do método
    //um idUsuario, isso fazia com que o caminho para o id usuario ficasse errado
    //uma vez que um id = 10, a cada chamada ficaria +- com o caminho 1010, assim por diante...
    this.APIATUALIZA = ''
    this.APIATUALIZA = "http://localhost:3001/usuario/"
    console.log('teste de teste no atualizar')
    console.log(this.idUsuario)
    //abaixo eu peguei o link da api e somei com o this.idUsuario
    //esse this.idUsuario está sendo atribuido como o id do usuário no componente de dialog
    //no final ficou mais ou menos assim: "http://localhost:3001/usuario/ID DO USUARIO"
    //dessa forma acima eu consigo passar o id do usuario dentro da string de link
    this.APIATUALIZA += this.idUsuario
    console.log('resultado da api completa:')
    console.log(this.APIATUALIZA)
    //mandando requisicao http pro server
    return this.http.get<Cliente[]>(this.APIATUALIZA)
  }

}
