
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventsComponent } from './components/eventos/events/events.component';
import { ListEventsComponent } from './components/eventos/list-events/list-events.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsersComponent } from './components/usuarios/users/users.component';

import { APP_BASE_HREF } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { IniciarsesionComponent } from './components/login/iniciarsesion/iniciarsesion.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { LogoutComponent } from './components/logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    EventsComponent,
    ListEventsComponent,
    FooterComponent,
    UsuariosComponent,
    UsersComponent,
    LoginComponent,
    IniciarsesionComponent,
    ActualizarComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
