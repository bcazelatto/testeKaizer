import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarFerramentaComponent } from './cadastrar-ferramenta/cadastrar-ferramenta.component';
import {ROUTES} from './app.routes'

import { OrcamentoComponent } from './orcamento/orcamento.component';
import { TelaConcluirOrcamentoComponent } from './tela-concluir-orcamento/tela-concluir-orcamento.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarClienteComponent,
    CadastrarFerramentaComponent,
    OrcamentoComponent,
    TelaConcluirOrcamentoComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
