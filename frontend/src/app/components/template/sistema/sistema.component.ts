import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente/cliente.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {

      this.clienteService.showMessage('Seja bem-vindo a nossa plataforma')

  }

}
