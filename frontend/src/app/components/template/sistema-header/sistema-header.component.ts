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

  }

}
