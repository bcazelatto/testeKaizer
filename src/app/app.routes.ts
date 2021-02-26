import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {CadastrarClienteComponent} from './cadastrar-cliente/cadastrar-cliente.component'
import {CadastrarFerramentaComponent} from './cadastrar-ferramenta/cadastrar-ferramenta.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastrar-cliente', component: CadastrarClienteComponent},
    {path: 'cadastrar-ferramenta', component: CadastrarFerramentaComponent}
]