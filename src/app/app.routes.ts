import { Routes } from '@angular/router';
import { PerfilComponent } from './cuenta/perfil/perfil.component';
import { LoginComponent } from './cuenta/login/login.component';
import { RegistroComponent } from './cuenta/registro/registro.component';
import { RecuperarcontraComponent } from './cuenta/recuperarcontra/recuperarcontra.component';
import { NavbarComponent } from './docente/navbar/navbar.component';
import { RegresorecuperacionComponent } from './cuenta/regresorecuperacion/regresorecuperacion.component';
import { DashboarddocenteComponent } from './docente/dashboarddocente/dashboarddocente.component';
import { DashboardestudianteComponent } from './estudiante/dashboardestudiante/dashboardestudiante.component';
import { EncuestaactitudesComponent } from './estudiante/encuestaactitudes/encuestaactitudes.component';
import { PerfilestudianteComponent } from './estudiante/perfilestudiante/perfilestudiante.component';


export const routes: Routes = [
    {path: '', pathMatch: 'full', component: LoginComponent },
    {path: 'login', component: LoginComponent },
    {path: 'perfil', component: PerfilComponent},
    {path: 'registro', component: RegistroComponent },
    {path: 'navbar', component: NavbarComponent },
    {path: 'paginarecuperacion', component: RegresorecuperacionComponent },
    {path: 'recuperacion', component: RecuperarcontraComponent },
    {path: 'encuesta', component: EncuestaactitudesComponent },
    {path: 'dashboardP', component: DashboarddocenteComponent },
    {path: 'perfilE', component: PerfilestudianteComponent },
    {path: 'dashboardE', component: DashboardestudianteComponent }

];
