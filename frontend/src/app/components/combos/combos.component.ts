import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.showMessage('Área em manutenção {combos mais pedidos}')
  }

}
