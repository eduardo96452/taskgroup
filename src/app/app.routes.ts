import { Routes } from '@angular/router';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { RecuperarcontraComponent } from './usuario/recuperarcontra/recuperarcontra.component';

export const routes: Routes = [
    {path: 'perfil', component: PerfilComponent },
    {path: 'login', component: LoginComponent },
    {path: 'registro', component: RegistroComponent },
    {path: 'recuperacion', component: RecuperarcontraComponent }
];
