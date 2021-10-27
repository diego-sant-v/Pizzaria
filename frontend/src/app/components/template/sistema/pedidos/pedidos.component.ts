import { ClienteService } from './../../../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Cliente } from 'src/app/components/cliente/cliente.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  constructor(public ClienteService: ClienteService) { }
  idUsuario: any
  sabor = this.ClienteService.usuarioLogado.pedido?.map(x => x.saborDaPizza)
  borda = this.ClienteService.usuarioLogado.pedido?.map(x => x.borda)
  valor = this.ClienteService.usuarioLogado.pedido?.map(x => x.valor)

  //sabor = this.ClienteService.usuarioLogado.pedido?.map(x => x.saborDaPizza)
  //borda = this.ClienteService.usuarioLogado.pedido?.map(x => x.borda)
  //preco = this.ClienteService.usuarioLogado.pedido?.map(x => x.valor)
  clientes: any
  displayedColumns = ['Sabor', 'Borda', 'Preco']
  //falta arrumar a disposição dos elementos na tela
  //ESTÁ MOSTRANDO COM VIRGULA POIS PROVAVELMENTE ESTÁ PUXANDO O ELEMENTO VAZIO NA HORA DE CRIAR O USUARIO

  ngOnInit(): void {
    console.log(this.sabor)
    console.log(this.sabor)
    console.log(this.sabor)
    // eu preciso converter a usuarioLogado dentro da funcao abaixo
    //ela espera um observable, array,...
    //seria bom converter em array e depois tentar acessar pelo html
      //console.log(this.ClienteService.usuarioLogado)
      //this.ClienteService.listar().subscribe(clientes => {
        //this.clientes = clientes
      //})
      this.ClienteService.idUsuario = this.ClienteService.usuarioLogado.id
      console.log('RESULTADO DO TESTE API:')
      console.log(this.ClienteService.idUsuario)
      this.ClienteService.pegarUsuarioLogado(this.ClienteService.idUsuario).subscribe( clientesx => {
        this.clientes = clientesx
        console.log('sss')
        console.log(this.clientes)
        console.log(this.ClienteService.idUsuario)
        console.log(this.clientes)
        //let cep = this.cliente.cep
      })
  }

}
