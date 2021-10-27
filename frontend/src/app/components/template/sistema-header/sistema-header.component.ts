import { Router } from '@angular/router';
import { ClienteService } from './../../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema-header',
  templateUrl: './sistema-header.component.html',
  styleUrls: ['./sistema-header.component.css']
})
export class SistemaHeaderComponent implements OnInit {

  constructor(public clienteService: ClienteService, public router: Router) { }

  ngOnInit(): void {
  }

  deslogarUsuario(){
      this.clienteService.showMessage('Desconectado')
      this.router.navigate(['/login'])

  }

}
