import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combos-pizza-drinks',
  templateUrl: './combos-pizza-drinks.component.html',
  styleUrls: ['./combos-pizza-drinks.component.css']
})
export class CombosPizzaDrinksComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.showMessage('Área em manutenção {combos drinks}')
  }

}
