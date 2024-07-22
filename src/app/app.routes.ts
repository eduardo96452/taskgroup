import { Routes } from '@angular/router';
import { PerfilComponent } from './cuenta/perfil/perfil.component';
import { LoginComponent } from './cuenta/login/login.component';
import { RegistroComponent } from './cuenta/registro/registro.component';
import { RecuperarcontraComponent } from './cuenta/recuperarcontra/recuperarcontra.component';
import { NavbarComponent } from './docente/navbar/navbar.component';
import { RegresorecuperacionComponent } from './cuenta/regresorecuperacion/regresorecuperacion.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: LoginComponent },
    {path: 'login', component: LoginComponent },
    {path: 'perfil', component: PerfilComponent},
    {path: 'registro', component: RegistroComponent },
    {path: 'navbar', component: NavbarComponent },
    {path: 'paginarecuperacion', component: RegresorecuperacionComponent },
    {path: 'recuperacion', component: RecuperarcontraComponent }

];
