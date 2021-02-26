import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import {ROUTES} from './app.routes'
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import {GridModule, PagerModule} from '@syncfusion/ej2-angular-grids';
import { CadastrarFerramentaComponent } from './cadastrar-ferramenta/cadastrar-ferramenta.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarClienteComponent,
    HeaderComponent,
    HomeComponent,
    CadastrarFerramentaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    GridModule, PagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
