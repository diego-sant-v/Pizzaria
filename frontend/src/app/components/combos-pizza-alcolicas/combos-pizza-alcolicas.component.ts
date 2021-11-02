import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combos-pizza-alcolicas',
  templateUrl: './combos-pizza-alcolicas.component.html',
  styleUrls: ['./combos-pizza-alcolicas.component.css']
})
export class CombosPizzaAlcolicasComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.showMessage('Área em manutenção {Combos com alcólicas}')
  }

}
