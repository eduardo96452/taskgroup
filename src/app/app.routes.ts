import { Routes } from '@angular/router';
import { PerfilComponent } from './cuenta/perfil/perfil.component';
import { LoginComponent } from './cuenta/login/login.component';
import { RegistroComponent } from './cuenta/registro/registro.component';
import { RecuperarcontraComponent } from './cuenta/recuperarcontra/recuperarcontra.component';
import { RegresorecuperacionComponent } from './cuenta/regresorecuperacion/regresorecuperacion.component';
import { DashboarddocenteComponent } from './docente/dashboarddocente/dashboarddocente.component';
import { DashboardestudianteComponent } from './estudiante/dashboardestudiante/dashboardestudiante.component';
import { EncuestaactitudesComponent } from './estudiante/encuestaactitudes/encuestaactitudes.component';
import { PerfilestudianteComponent } from './estudiante/perfilestudiante/perfilestudiante.component';
import { ListausuarioComponent } from './docente/listausuario/listausuario.component';
import { PerfilprofesorComponent } from './docente/perfilprofesor/perfilprofesor.component';
import { ListagrupoComponent } from './docente/listagrupo/listagrupo.component';
import { RegistrotareaComponent } from './docente/registrotarea/registrotarea.component';


export const routes: Routes = [
    {path: '', pathMatch: 'full', component: LoginComponent },
    {path: 'login', component: LoginComponent },
    {path: 'perfil', component: PerfilComponent},
    {path: 'registro', component: RegistroComponent },
    {path: 'paginarecuperacion', component: RegresorecuperacionComponent },
    {path: 'recuperacion', component: RecuperarcontraComponent },
    {path: 'encuesta', component: EncuestaactitudesComponent },
    {path: 'dashboardP', component: DashboarddocenteComponent },
    {path: 'perfilE', component: PerfilestudianteComponent },
    {path: 'perfilP', component: PerfilprofesorComponent },
    {path: 'listaE', component: ListausuarioComponent },
    {path: 'registroT', component: RegistrotareaComponent },
    {path: 'listaG', component: ListagrupoComponent },
    {path: 'dashboardE', component: DashboardestudianteComponent }

];
