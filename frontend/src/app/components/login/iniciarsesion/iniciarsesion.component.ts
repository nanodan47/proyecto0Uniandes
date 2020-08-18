import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { login } from '../../../models/login';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      usuario: ['',[Validators.required]],
      contrasenia: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  guardarToken() {
    const token: login ={
      username: this.form.get('usuario').value,
      password: this.form.get('contrasenia').value,
    }
    this.loginService.guardarToken(token).subscribe(data =>{
      this.toastr.success('Token Creado','Se agrego el token')
      this.form.reset()
    })
    }

}
