import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { users } from '../../../models/usuario';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      usuario: ['',[Validators.required]],
      email: ['',[Validators.required]],
      contrasenia: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  guardarUsuario() {
    const usuario: users ={
      first_name: this.form.get('nombre').value,
      last_name: this.form.get('apellido').value,
      username: this.form.get('usuario').value,
      email: this.form.get('email').value,
      password: this.form.get('contrasenia').value,
    }
    this.usuarioService.guardarUsuario(usuario).subscribe(data =>{
      console.log('Guardado Exitosamente');
      this.form.reset()
    })
    }

}
