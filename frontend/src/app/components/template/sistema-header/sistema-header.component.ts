import { Router } from '@angular/router';
import { ClienteService } from './../../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema-header',
  templateUrl: './sistema-header.component.html',
  styleUrls: ['./sistema-header.component.css']
})
export class SistemaHeaderComponent implements OnInit {
  numeroDePedidos: any
  sabor: any
  borda: any
  valor: any
  pedidos: any
  teste: any

  constructor(public clienteService: ClienteService, public router: Router) { }

  ngOnInit(): void {
    this.calcularNumerodePedidos
    this.numeroDePedidos = this.clienteService.usuarioLogado.pedido?.length
  }

  deslogarUsuario(){
      this.clienteService.showMessage('Desconectado')
      this.router.navigate(['/login'])

  }

  calcularNumerodePedidos(){
    console.log('teste do pedido man::')
    console.log(this.clienteService.usuarioLogado.pedido)
    console.log(this.clienteService.usuarioLogado.pedido?.length)

    this.sabor = this.clienteService.usuarioLogado.pedido?.map(x => x.saborDaPizza)
    this.borda = this.clienteService.usuarioLogado.pedido?.map(x => x.borda)
    this.valor = this.clienteService.usuarioLogado.pedido?.map(x => x.valor)
    this.pedidos = this.clienteService.usuarioLogado.pedido
    //eu usei o ngFor para acessar primeiramente a variavel pedido, que está armazenando
    //o this.clienteService.usuarioLogado.pedido, após isso eu acessei, no html, o sabor e a borda
    //usando notação de ponto dentro de {{}}
  }

}
