import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combos-pizza-refri',
  templateUrl: './combos-pizza-refri.component.html',
  styleUrls: ['./combos-pizza-refri.component.css']
})
export class CombosPizzaRefriComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.showMessage('Área em manutenção{combos-refri}')
  }

}
