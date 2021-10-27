import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clienteService: any;

  constructor() { }
  cliente(cliente: any) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
