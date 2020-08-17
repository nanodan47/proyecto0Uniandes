import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventsComponent } from './components/eventos/events/events.component';
import { ListEventsComponent } from './components/eventos/list-events/list-events.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsersComponent } from './components/usuarios/users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    EventsComponent,
    ListEventsComponent,
    FooterComponent,
    UsuariosComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
