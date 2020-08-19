import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { login } from '../../../models/login';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { isVariableDeclaration, tokenToString } from 'typescript';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, 
              private toastr: ToastrService,private router:Router, private http: HttpClient) {
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
      console.log(data);
      this.toastr.success('Token Creado','Se agrego el token')
      this.form.reset()
    })
    }
  errorFetch: boolean = false;
  goToPage(pageName:String):void{
    this.http.post('http://127.0.0.1:8000/api/api-auth/', {username: this.form.get('usuario').value , password: this.form.get('contrasenia').value})
        .subscribe(result => {
            // if everything goes well do what you want here
            
            var tok = Object.values(result)
            var token = tok.toString()
            console.log('variables '+token);
            sessionStorage.setItem('token',token)
            
            this.router.navigate([`${pageName}`])
          },
          (err: HttpErrorResponse) => {
            //if the back end is down
            //error getting data
            //set a flag to show an error
            this.errorFetch = true;
            this.toastr.error('Nombre de usuario o contrasenia errados','ERROR')
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
