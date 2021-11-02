import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-vegana',
  templateUrl: './pizza-vegana.component.html',
  styleUrls: ['./pizza-vegana.component.css']
})
export class PizzaVeganaComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.showMessage('Atenção: ingredientes sem origem animal {MANUTENÇÃO}')
  }

}
