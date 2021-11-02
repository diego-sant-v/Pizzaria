import { Router } from '@angular/router';
import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from '../cliente/cliente.model';


@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
  fecharDialog: any
  fotoAtualDaPizza: any
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public ClienteService: ClienteService, public Router: Router) { }

  ngOnInit(): void {
    let sabores = this.ClienteService.usuarioLogado.pedido?.map(x => x.saborDaPizza)
    /*
    console.log('chegou em sabores')
    console.log(sabores)
        switch (sabores) {
          case ['Calabresa']:
            console.log('Man é portuguesa');
            console.log('chegou em pizza')
            break;

            case ['Banofe']:
              console.log('Man é banofe');
              console.log('chegou em pizza')
              break;
        }
        COMENTEI TMB A FOTO DA PIZZA EM adicionarPedido()
    */
  }

  adicionarPedido(){
    //já está sendo criado os pedidos
    //porem falta atribuilos de fato ao objeto armazenado na variavel usuarioLogado
    //ele está criando pedidos avulso
    let clienteTeste = this.ClienteService.usuarioLogado
    let saborDaPizza = clienteTeste

    console.log('o saborrrrrr')
    console.log(saborDaPizza)
    //abaixo atribui a variavel saborAtualDapizza ao valor da pizza selecionada
    let saborAtualDapizza = this.ClienteService.informacoesPedido[0]
    console.log('teste mamaa')
    console.log(saborAtualDapizza)

    switch (saborAtualDapizza) {
        case 'Portuguesa':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/portuguesa.jpg">
        <div>`
        break;

        case 'Calabresa':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/calabresa.jpg">
        <div>`
        break;

        case 'Marguerita':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/marguerita.jpg">
        <div>`
        break;

        case 'Frango com catupiry':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/frango-catupiry.jpg">
        <div>`
        break;

        case 'Mussarela':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/mucarela.jpg">
        <div>`
        break;

        case 'Napolitana':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/napolitano.jpg">
        <div>`
        break;

        case 'Morango com chocolate':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/morango-chocolate.jpg">
        <div>`
        break;

        case 'Coco com chocolate':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/coco-chocolate.jpg">
        <div>`
        break;

        case 'Avelã com chocolate':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/avela-chocolate.jpg">
        <div>`
        break;

        case 'Banofe':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/banofe.jpg">
        <div>`
        break;

        case 'Romeu e Julieta':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/romeu-julieta.jpg">
        <div>`
        break;
        
        case 'Mms':
        this.fotoAtualDaPizza = `<div class="row col-md-12">
        <img src="../../../../../assets/imagens/mms.jpg">
        <div>`
        break;

    }
    //usei o push para inserir novos objetos dentro do array principal de clienteTeste.pedido
    clienteTeste.pedido?.push({
      idDoPedido: this.ClienteService.usuarioLogado.id,
      saborDaPizza: this.ClienteService.informacoesPedido[0],
      borda: this.ClienteService.informacoesPedido[1],
      valor: this.ClienteService.valorDaPizza,
      foto: this.fotoAtualDaPizza
    })
    //clienteTeste.pedido = [{
        //idDoPedido: this.ClienteService.usuarioLogado.id,
        //saborDaPizza: this.ClienteService.informacoesPedido[0],
        //borda: this.ClienteService.informacoesPedido[1],
        //valor: this.ClienteService.valorDaPizza
    //}]
    console.log('tentavi:::')
    console.log(clienteTeste.pedido)
    this.ClienteService.idUsuario = this.ClienteService.usuarioLogado.id
    console.log('RESULTADO DO TESTE API:')
    console.log(this.ClienteService.idUsuario)

    this.ClienteService.atualizar(clienteTeste).subscribe(() => {
      this.ClienteService.showMessage('Pizza adicionada com sucesso')
      //let cep = this.cliente.cep
    })

    //this.ClienteService.usuarioLogado.pe
    //this.ClienteService.informacoesPedido retorna um array com tags html de foto
    //sabor, borda, observacoes, etc.

    console.log(this.ClienteService.informacoesPedido)
    console.log(this.ClienteService.informacoesPedido[0])
    console.log(this.ClienteService.informacoesPedido[1])
    console.log(this.ClienteService.informacoesPedido[2])
    console.log(this.ClienteService.informacoesPedido[3])
    //coloquei o fecharDialog e o dialog result ta vindo undeffined
    this.fecharDialog = true
    //depois que ele finaliza o pedido ele vai pra tela de pedidos
    //ta travando um pouco e algumas vezes nao aprece, depois tentar fazer com observable
    setTimeout(() => {
      console.log('teste')
      this.Router.navigate(['/pedidos']);
    }, 500)
    
  }

}
