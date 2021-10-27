import { ClienteService } from './../../../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DialogExampleComponent } from 'src/app/components/dialog-example/dialog-example.component';
import { Cliente } from 'src/app/components/cliente/cliente.model';
import { SectionComponent } from '../../section/section.component';


@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  saborSalgada: boolean = false;
  saborDoce: boolean = false;
  sabormeioAmeio: boolean = false;
  clientes: Cliente[];
  cidade: any;
  bairro: any;
  logradouro: any;
  complemento: any;
  cep: any;
  pizza = {
    sabor: '',
    ingredientes: '',
    borda: '',
    foto: '',
    observacoes: '',
    tipo: {
      salgada: false,
      doce: false,
      meioameio: false
    },
    valor: 0.0
  }


  constructor(private clienteService: ClienteService, public dialog: MatDialog, public section: SectionComponent) {
    //this.mostraElemento(evento)
    
  }
  informacoesUsuario(){
    this.clienteService.listar().subscribe(res => {
      this.clientes = res;
      //irei pegar pelo map os usuarios e as senhas
      //pra depois validalos no value dos inputs 
      this.cidade = this.clientes.filter(qualquercoisa => qualquercoisa.localidade)
      this.bairro = this.clientes.map(qualquercoisa => qualquercoisa.bairro)
      this.logradouro = this.clientes.map(qualquercoisa => qualquercoisa.logradouro)
      this.complemento = this.clientes.map(qualquercoisa => qualquercoisa.complemento)
      this.cep = this.clientes.map(qualquercoisa => qualquercoisa.cep)
      
    })
  }

  openDialog(){
    console.log('tentativa de pegar:')
    console.log(this.clienteService.usuarioLogado.localidade)
    console.log(this.clienteService.usuarioLogado.cep)
    let dialogRef = this.dialog.open(DialogExampleComponent,
    {data: 
      {name: 'Teste vindo de comprar',
      sabor: this.pizza.sabor,
      borda: this.pizza.borda,
      ingredientes: this.pizza.ingredientes,
      observacoes: this.pizza.observacoes,
      image: this.pizza.foto,
      //abaixo eu estou pegando os campos do objeto de usuario logado
      cidade: this.clienteService.usuarioLogado.localidade,
      bairro: this.clienteService.usuarioLogado.bairro,
      logradouro: this.clienteService.usuarioLogado.logradouro,
      complemento: this.clienteService.usuarioLogado.complemento,
      valor: this.pizza.valor,
      cep: this.cep}
    })
    this.clienteService.informacoesPedido = [this.pizza.sabor, this.pizza.borda, 
      this.pizza.foto, this.pizza.observacoes, this.pizza.ingredientes, this.pizza.tipo
    ]
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
    this.clienteService.valorDaPizza = this.pizza.valor
  }


  ngOnInit(): void {
    this.clienteService.showMessage('Escolha a sua pizza')
    this.informacoesUsuario()
  }

  selecionaTipoSalgada(event: { checked: any; }){

    console.log(event.checked)
    if(event.checked == true){
      this.saborSalgada = true
      console.log('chegou aqui')
    }else{
      this.saborSalgada = false
    }

  }



  mostraSabor() {
    console.log(`o sabor da pizza é ${this.pizza.sabor}`)
    switch (this.pizza.sabor) {
      case 'Portuguesa':
        this.pizza.ingredientes = `
        <mat-card-content>
              <h2>Ingredientes:</h2>
                <mat-list role="list">
                  <ul>
                      <li>Mussarela</li>
                      <li>Presunto</li>
                      <li>Tomate</li>
                      <li>Ovo</li>
                      <li>Cebola</li>
                      <li>Molho de tomate</li>
                  </ul>
                </mat-list>
           <mat-card-content/>
           `
        this.pizza.foto = `<div class="row col-md-12">
       <img src="../../../../../assets/imagens/portuguesa.jpg">
       <div>`
       this.pizza.valor = 25
        break;

      case 'Calabresa':
        this.pizza.ingredientes = `
            <mat-card-content>
              <h2>Ingredientes:</h2>
                <mat-list role="list">
                  <ul>
                      <li>Tomate</li>
                      <li>Queijo parmesão ralado</li>
                      <li>Orégano</li>
                      <li>Azeite</li>
                      <li>Linguiça calabresa (defumada)</li>
                      <li>Azeite</li>
                  </ul>
                </mat-list>
           <mat-card-content/>
           `
        this.pizza.foto = `<div class="row col-md-12">
       <img src="../../../../../assets/imagens/calabresa.jpg">
       <div>`
       this.pizza.valor = 22
        break;

      case 'Marguerita':
        this.pizza.ingredientes =`
        <mat-card-content>
          <h2>Ingredientes:</h2>
            <mat-list role="list">
              <ul>
                  <li>Molho de tomate</li>
                  <li>Mussarela</li>
                  <li>Manjericão</li>
                  <li>Azeite</li>
                  <li>Orégano</li>
                  <li>Queijo ralado</li>
              </ul>
            </mat-list>
       <mat-card-content/>
       `
        this.pizza.foto = `<div class="row col-md-12">
       <img src="../../../../../assets/imagens/marguerita.jpg">
       <div>`
       this.pizza.valor = 28
        break;

      case 'Frango com catupiry':
        this.pizza.ingredientes = `
        <mat-card-content>
          <h2>Ingredientes:</h2>
            <mat-list role="list">
              <ul>
                  <li>Azeite</li>
                  <li>Frango</li>
                  <li>Orégano</li>
                  <li>Queijo catupiry</li>
                  <li>Mlho</li>
                  <li>Ervilha</li>
              </ul>
            </mat-list>
       <mat-card-content/>
       `
        this.pizza.foto = `<div class="row col-md-12">
       <img src="../../../../../assets/imagens/frango-catupiry.jpg">
       <div>`
       this.pizza.valor = 28
        break;

      case 'Mussarela':
        this.pizza.ingredientes = `
        <mat-card-content>
          <h2>Ingredientes:</h2>
            <mat-list role="list">
              <ul>
                  <li>Mussarela</li>
                  <li>Molho de tomate</li>
                  <li>Orégano</li>
                  <li>Azeite</li>
              </ul>
            </mat-list>
       <mat-card-content/>
       `
        this.pizza.foto = `<div class="row col-md-12">
       <img src="../../../../../assets/imagens/mucarela.jpg">
       <div>`
       this.pizza.valor = 25
        break;

      case 'Napolitana':
        this.pizza.ingredientes = `
        <mat-card-content>
          <h2>Ingredientes:</h2>
            <mat-list role="list">
              <ul>
                  <li>Azeite</li>
                  <li>Molho de tomate</li>
                  <li>Mussatela</li>
                  <li>Orégano</li>
                  <li>Azeitonas</li>
                  <li>Tomate</li>
              </ul>
            </mat-list>
       <mat-card-content/>
       `
        this.pizza.foto = `<div class="row col-md-12">
       <img src="../../../../../assets/imagens/napolitano.jpg">
       <div>`
       this.pizza.valor = 26
        break;

      case 'Morango com chocolate':
        this.pizza.ingredientes = `
        <mat-card-content>
          <h2>Ingredientes:</h2>
            <mat-list role="list">
              <ul>
                  <li>Brigadeiro</li>
                  <li>Creme de chocolate</li>
                  <li>Morango</li>
                  <li>Chocolate</li>
                  <li>Leite condensado</li>
              </ul>
            </mat-list>
       <mat-card-content/>
       `
        this.pizza.foto = `<div class="row col-md-12">
       <img src="../../../../../assets/imagens/morango-chocolate.jpg">
       <div>`
       this.pizza.valor = 35
        break;

      case 'Coco com chocolate':
        this.pizza.ingredientes = `
        <mat-card-content>
          <h2>Ingredientes:</h2>
            <mat-list role="list">
              <ul>
                  <li>Chocolate</li>
                  <li>Coco</li>
                  <li>Coco ralado</li>
                  <li>Granulado</li>
                  <li>Leite condensado</li>
              </ul>
            </mat-list>
       <mat-card-content/>
       `
        this.pizza.foto = `<div class="row col-md-12">
       <img src="../../../../../assets/imagens/coco-chocolate.jpg">
       <div>`
       this.pizza.valor = 42
        break;

      case 'Avelã com chocolate':
        this.pizza.ingredientes = `
        <mat-card-content>
          <h2>Ingredientes:</h2>
            <mat-list role="list">
              <ul>
                  <li>Chocolate</li>
                  <li>Creme de avelã</li>
                  <li>Leite condensado</li>
                  <li>Chocolate branco</li>
              </ul>
            </mat-list>
       <mat-card-content/>
       `
        this.pizza.foto = `<div class="row col-md-12">
         <img src="../../../../../assets/imagens/avela-chocolate.jpg">
         <div>`
         this.pizza.valor = 45
        break;

      case 'Banofe':
        this.pizza.ingredientes = `
        <mat-card-content>
          <h2>Ingredientes:</h2>
            <mat-list role="list">
              <ul>
                  <li>Mussarela</li>
                  <li>Banana</li>
                  <li>Leite condensado</li>
              </ul>
            </mat-list>
       <mat-card-content/>
       `
        this.pizza.foto = `<div class="row col-md-12">
           <img src="../../../../../assets/imagens/banofe.jpg">
           <div>`
           this.pizza.valor = 42
        break;

      case 'Romeu e Julieta':
        this.pizza.ingredientes = `
        <mat-card-content>
          <h1>Ingredientes:</h1>
            <mat-list role="list">
              <ul>
                  <li>Chocolate</li>
                  <li>Goiabada</li>
                  <li>Leite condensado</li>
                  <li>Mussarela</li>
              </ul>
            </mat-list>
       <mat-card-content/>
       `
        this.pizza.foto = `<div class="row col-md-12">
           <img src="../../../../../assets/imagens/romeu-julieta.jpg">
           <div>`
           this.pizza.valor = 43
        break;

        case 'Mms':
        this.pizza.ingredientes = `
        <mat-card-content>
          <h1>Ingredientes:</h1>
            <mat-list role="list">
              <ul>
                  <li>Chocolate</li>
                  <li>Mm's</li>
                  <li>Leite condensado</li>
                  <li>Creme de leite</li>
              </ul>
            </mat-list>
       <mat-card-content/>
       `
        this.pizza.foto = `<div class="row col-md-12">
           <img src="../../../../../assets/imagens/mms.jpg">
           <div>`
           this.pizza.valor = 40
        break;
    }

    console.log('valor da pizza é')
    console.log(this.pizza.valor)
    console.log(this.pizza.borda)
    //parseFloat(this.pizza.valor)
    switch (this.pizza.borda) {
      
      case 'gratis':
        console.log('Borda gratuita');
        break;
        
        case 'cheddar':
        console.log('Borda cheddar');
        this.pizza.valor += 5.80
        console.log(this.pizza.valor)
        break;

        case 'cream-chease':
        console.log('Borda borda cream-chease');
        this.pizza.valor += 6.50
        console.log(this.pizza.valor)
        break;

        case 'gergelim':
        this.pizza.valor += 8.50
        console.log('Borda gergelim');
        break;

        case 'mista':
        this.pizza.valor += 9.85
        console.log('Borda mista');
        break;

        case 'requeijao':
        this.pizza.valor += 11
        console.log('Borda requeijao');
        break;

        //
        case 'doce_de_leite':
        this.pizza.valor += 10
        console.log('Borda doce de leite');
        break;

        case 'chocolate':
        this.pizza.valor += 8
        console.log('Borda chocolate');
        break;

        case 'prestigio':
        this.pizza.valor += 8
        console.log('Borda prestigio');
        break;

        case 'avela':
        this.pizza.valor += 15
        console.log('Borda avela');
        break;

        case 'nuttela':
        this.pizza.valor += 18
        console.log('Borda nuttela');
        break;
}

  }

  selecionaTipoDoce(event: { checked: any; }){
    console.log(event.checked)
    if(event.checked == true){
      this.saborDoce = true
      console.log('chegou aqui')
    }else{
      this.saborDoce = false
    }

  }



  selecionaTipoMeio(event: { checked: any; }){

    console.log(event.checked)
    if(event.checked == true){
      this.sabormeioAmeio = true
      console.log('chegou aqui')
    }else{
      this.sabormeioAmeio = false
    }

  }
  

}

