import { ClienteService } from './../../cliente/cliente.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema-menu',
  templateUrl: './sistema-menu.component.html',
  styleUrls: ['./sistema-menu.component.css']
})
export class SistemaMenuComponent implements OnInit {

  constructor(public router: Router, public ClienteService: ClienteService) { }

  ngOnInit(): void {
  }
  
  verificaPedidos(){
    console.log(this.ClienteService.usuarioLogado.pedido)
    let pedidoPizza = this.ClienteService.usuarioLogado.pedido?.map(qualquerCoisa => qualquerCoisa.saborDaPizza)
    console.log('pedidoPizza aqui como:')
    console.log(pedidoPizza)
    console.log(pedidoPizza?.length)

    if(pedidoPizza?.length != 1){
      console.log('PASSOU NO IF')
      this.router.navigate(['/pedidos']);
    }else{
      console.log('PASSOU NO ELSE')
      this.ClienteService.showMessage('Usuário sem pedidos cadastrados')
    }
    
  }

}
