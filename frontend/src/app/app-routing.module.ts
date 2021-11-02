import { CombosPizzaDrinksComponent } from './components/combos-pizza-drinks/combos-pizza-drinks.component';
import { CombosPizzaAlcolicasComponent } from './components/combos-pizza-alcolicas/combos-pizza-alcolicas.component';
import { CombosPizzaRefriComponent } from './components/combos-pizza-refri/combos-pizza-refri.component';
import { CombosComponent } from './components/combos/combos.component';
import { PizzaVeganaComponent } from './components/pizza-vegana/pizza-vegana.component';
import { PizasSalgadasComponent } from './components/pizas-salgadas/pizas-salgadas.component';
import { PizasDocesComponent } from './components/pizas-doces/pizas-doces.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { BebidasNaoAlcolicasComponent } from './components/bebidas-nao-alcolicas/bebidas-nao-alcolicas.component';
import { BebidasAlcolicasComponent } from './components/bebidas-alcolicas/bebidas-alcolicas.component';
import { PedidoComponent } from './components/template/pedido/pedido.component';
import { LojaComponent } from './components/template/loja/loja.component';
import { AboutComponent } from './components/template/about/about.component';
import { CadastrarComponent } from './components/template/cadastrar/cadastrar.component';
import { HomeComponent } from './components/template/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/template/login/login.component';
import { SistemaComponent } from './components/template/sistema/sistema.component';
import { PedidosComponent } from './components/template/sistema/pedidos/pedidos.component';
import { EnderecoComponent } from './components/template/sistema/endereco/endereco.component';
import { ComprarComponent } from './components/template/sistema/comprar/comprar.component';
import { PontuacaoComponent } from './components/template/sistema/pontuacao/pontuacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sistema', component: SistemaComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'comprar', component: ComprarComponent },
  { path: 'endereco', component: EnderecoComponent },
  { path: 'pontuacao', component: PontuacaoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'pedir', component: PedidoComponent },
  { path: 'bebidas-alcolicas', component: BebidasAlcolicasComponent },
  { path: 'bebidas-nao-alcolicas', component: BebidasNaoAlcolicasComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'pizzas-doces', component: PizasDocesComponent },
  { path: 'pizzas-salgadas', component: PizasSalgadasComponent },
  { path: 'pizzas-veganas', component: PizzaVeganaComponent },
  { path: 'combos', component: CombosComponent },
  { path: 'combos-refrigerante', component: CombosPizzaRefriComponent },
  { path: 'combos-bebidas-alcolicas', component: CombosPizzaAlcolicasComponent },
  { path: 'combos-bebidas-drinks', component: CombosPizzaDrinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
