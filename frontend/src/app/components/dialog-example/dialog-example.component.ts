import { Router } from '@angular/router';
import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../cliente/cliente.model';


@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
  fecharDialog: any
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public ClienteService: ClienteService, public Router: Router) { }

  ngOnInit(): void {
  }

  adicionarPedido(){
    //já está sendo criado os pedidos
    //porem falta atribuilos de fato ao objeto armazenado na variavel usuarioLogado
    //ele está criando pedidos avulso
    let clienteTeste = this.ClienteService.usuarioLogado
    //usei o push para inserir novos objetos dentro do array principal de clienteTeste.pedido
    clienteTeste.pedido?.push({
      idDoPedido: this.ClienteService.usuarioLogado.id,
      saborDaPizza: this.ClienteService.informacoesPedido[0],
      borda: this.ClienteService.informacoesPedido[1],
      valor: this.ClienteService.valorDaPizza
    })
    //clienteTeste.pedido = [{
        //idDoPedido: this.ClienteService.usuarioLogado.id,
        //saborDaPizza: this.ClienteService.informacoesPedido[0],
        //borda: this.ClienteService.informacoesPedido[1],
        //valor: this.ClienteService.valorDaPizza
    //}]
    console.log('tentavi:::')
    console.log(clienteTeste.pedido)
    this.ClienteService.idUsuario = this.ClienteService.usuarioLogado.id
    console.log('RESULTADO DO TESTE API:')
    console.log(this.ClienteService.idUsuario)

    this.ClienteService.atualizar(clienteTeste).subscribe(() => {
      this.ClienteService.showMessage('Pizza adicionada com sucesso')
      //let cep = this.cliente.cep
    })

    //this.ClienteService.usuarioLogado.pe
    //this.ClienteService.informacoesPedido retorna um array com tags html de foto
    //sabor, borda, observacoes, etc.

    console.log(this.ClienteService.informacoesPedido)
    console.log(this.ClienteService.informacoesPedido[0])
    console.log(this.ClienteService.informacoesPedido[1])
    console.log(this.ClienteService.informacoesPedido[2])
    console.log(this.ClienteService.informacoesPedido[3])
    //coloquei o fecharDialog e o dialog result ta vindo undeffined
    this.fecharDialog = true
    //depois que ele finaliza o pedido ele vai pra tela de pedidos
    //ta travando um pouco e algumas vezes nao aprece, depois tentar fazer com observable
    setTimeout(() => {
      console.log('teste')
      this.Router.navigate(['/pedidos']);
    }, 500)
    
  }

}
