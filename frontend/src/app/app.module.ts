import { InterceptorService } from './loader/interceptor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SectionComponent } from './components/template/section/section.component';
import { LoginComponent } from './components/template/login/login.component';
import { HomeComponent } from './components/template/home/home.component';
import { CadastrarComponent } from './components/template/cadastrar/cadastrar.component';
import { AboutComponent } from './components/template/about/about.component';
import { LojaComponent } from './components/template/loja/loja.component';
import { PedidoComponent } from './components/template/pedido/pedido.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SectionCadastroComponent } from './components/template/section-cadastro/section-cadastro.component';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SistemaHeaderComponent } from './components/template/sistema-header/sistema-header.component';
import { SistemaMenuComponent } from './components/template/sistema-menu/sistema-menu.component';
import { SistemaComponent } from './components/template/sistema/sistema.component'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PedidosComponent } from './components/template/sistema/pedidos/pedidos.component';
import { ComprarComponent } from './components/template/sistema/comprar/comprar.component';
import { EnderecoComponent } from './components/template/sistema/endereco/endereco.component';
import { PontuacaoComponent } from './components/template/sistema/pontuacao/pontuacao.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MostraSaboresDirective } from './diretivas/mostra-sabores.directive';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { ProductRead2Component } from './components/template/product-read2/product-read2.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BebidasAlcolicasComponent } from './components/bebidas-alcolicas/bebidas-alcolicas.component';
import { BebidasNaoAlcolicasComponent } from './components/bebidas-nao-alcolicas/bebidas-nao-alcolicas.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { PizasSalgadasComponent } from './components/pizas-salgadas/pizas-salgadas.component';
import { PizasDocesComponent } from './components/pizas-doces/pizas-doces.component';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    LoginComponent,
    HomeComponent,
    CadastrarComponent,
    AboutComponent,
    LojaComponent,
    PedidoComponent,
    SectionCadastroComponent,
    SistemaHeaderComponent,
    SistemaMenuComponent,
    SistemaComponent,
    PedidosComponent,
    ComprarComponent,
    EnderecoComponent,
    PontuacaoComponent,
    MostraSaboresDirective,
    DialogExampleComponent,
    ProductRead2Component,
    BebidasAlcolicasComponent,
    BebidasNaoAlcolicasComponent,
    DrinksComponent,
    PizasSalgadasComponent,
    PizasDocesComponent,
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: SectionComponent, useClass: SectionComponent, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
