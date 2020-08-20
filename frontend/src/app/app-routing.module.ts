import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsersComponent } from './components/usuarios/users/users.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventsComponent } from './components/eventos/events/events.component';
import { LoginComponent } from './components/login/login.component';
import { IniciarsesionComponent } from './components/login/iniciarsesion/iniciarsesion.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
//const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: UsuariosComponent },
  { path: 'events', component: EventosComponent },
  { path: 'upd-event', component: ActualizarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
