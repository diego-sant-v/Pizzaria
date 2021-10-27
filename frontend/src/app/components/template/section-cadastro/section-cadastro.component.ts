import { ClienteService } from './../../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente/cliente.model';
import { Router } from '@angular/router'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-section-cadastro',
  templateUrl: './section-cadastro.component.html',
  styleUrls: ['./section-cadastro.component.css']
})
export class SectionCadastroComponent implements OnInit {
  [x: string]: any;
  cliente: Cliente = {
    email: '',
    senha: '',
    cep: '',
    pedido: [{
      saborDaPizza: '',
      borda: '',
      valor: 28
    }]

  }
  //no construutor eu posso injetar o meotodo do cliente.service.ts
  //o metodo foi criado la mas eu posso usa-lo aqui
  //preciso colocalo no construtor e ele ira importar automaticamente
  constructor(private clienteService: ClienteService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    //no ngOnInit ele ira aparecer quando o componente for carregado
    //o ngOnInit serve justamente para carregar códigos no carregamento do compoennte

  }
  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Operação executada com sucesso')
      this.router.navigate(['/login'])
      //let cep = this.cliente.cep
    })
  }

  pesquisaCep(evento: Event) {

    var cep = ((<HTMLInputElement>evento.target).value)
    //resgatei o valor do campo cep
    //console.log(cep)
    cep = cep.replace(/\D/g, '');

    //resgatei o valor do campo cep
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe((dados: any) => this.populaForm(dados, form));

      }


    } else {
      this.ClienteService.showMessage('cep inválido')
    }

    console.log(cep)

  }
  populaForm(dados: { cep: any; logradouro: any; bairro: any; localidade: any; uf: any; }, form: any) {

    var logradouro = dados.logradouro

    var a = [({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf

    })]
    this.cliente.logradouro = dados.logradouro;
    this.cliente.bairro = dados.bairro;
    this.cliente.localidade = dados.localidade;
    this.cliente.uf = dados.uf;
    var uf = this.cliente.uf
    console.log(a)
  }

}
export class FormFieldPrefixSuffixExample {
  hide = true;
}

function form(dados: any, form: any) {
  throw new Error('Function not implemented.');
}
/*let cadastro = {
  email,
  senha,
  sexo,
  cep,
  logradouro,
  complemento,
  bairro,
  localidade,
  uf,
  dd

} */
