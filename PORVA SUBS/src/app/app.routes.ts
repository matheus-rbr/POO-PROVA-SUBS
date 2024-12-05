import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InvestimentoComponent } from './investimento/investimento.component';


export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'tela-inicial', component: TelaInicialComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'investimento', component: InvestimentoComponent},
];
