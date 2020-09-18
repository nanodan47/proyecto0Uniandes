import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { users } from '../../../models/usuario';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, 
    private toastr: ToastrService, private router:Router, private http: HttpClient) {
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
      this.toastr.success('Registro Agregado','El usuario fue agregado')
      this.form.reset()
    })
    }

    first_name:string;
    last_name:string;
    username:string;
    email:string;
    password:string;


  errorFetch: boolean = false;
  goToPage(pageName:String):void{
    this.http.post('http://localhost:8000/api/create-user/', {first_name: this.form.get('nombre').value, last_name: this.form.get('apellido').value,
    username: this.form.get('usuario').value,email: this.form.get('email').value , password: this.form.get('contrasenia').value})
        .subscribe(result => {
            // if everything goes well do what you want here
            this.router.navigate([`${pageName}`])
          },
          (err: HttpErrorResponse) => {
            //if the back end is down
            //error getting data
            //set a flag to show an error
            this.errorFetch = true;
            this.toastr.error('Nombre de usuario ya existe','ERROR')
            //here click on the button click me, to see the result
            //because the weather api is not responding you get to this block
            //of code
          },
          () => {
            //subscribe has finished
          }         
        );
   }

}
