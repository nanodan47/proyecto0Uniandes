import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService],
})
export class AppComponent {
  title = 'FrontEnd';
}
