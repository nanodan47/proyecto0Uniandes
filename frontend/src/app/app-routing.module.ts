import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsersComponent } from './components/usuarios/users/users.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventsComponent } from './components/eventos/events/events.component';

//const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: UsuariosComponent },
  { path: 'events', component: EventosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
