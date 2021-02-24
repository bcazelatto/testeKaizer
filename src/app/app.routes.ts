import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {CadastrarClienteComponent} from './cadastrar-cliente/cadastrar-cliente.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastrar-cliente', component: CadastrarClienteComponent}
]