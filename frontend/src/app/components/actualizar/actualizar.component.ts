import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { events } from '../../models/evento';
import { EventoService } from '../../services/evento.service';
import { Subscription } from 'rxjs';
import { ActualizarService } from '../../services/actualizar.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  form: FormGroup;
  suscription: Subscription;
  evento:events;
  id : String;
  constructor(private formBuilder: FormBuilder, private router:Router, private http: HttpClient,private toastr: ToastrService, 
    public eventoService: EventoService, private actualizarService:ActualizarService) {
      this.form = this.formBuilder.group({
        nombre: ['',[Validators.required]],
        categoria: ['',[Validators.required]],
        lugar: ['',[Validators.required]],
        direccion: ['',[Validators.required]],
        inicial: ['',[Validators.required]],
        final: ['',[Validators.required]],
        tipo: ['',[Validators.required]],
        imagen: ['']
      })
     }

  ngOnInit(): void {
    this.suscription = this.eventoService.obtenerEvento$().subscribe(data=>{
      console.log(data);

      this.evento = data;
      this.form.patchValue({
        nombre: this.evento.event_name,
        categoria: this.evento.event_category,
        lugar: this.evento.event_place,
        direccion: this.evento.event_address,
        inicial: this.evento.event_initial_date,
        final: this.evento.event_final_date,
        tipo: this.evento.event_type
      });  
    });
  }
  errorFetch: boolean = false;

  actualizarEvento(pageName:String,id: String) {
    const evento: events ={
      event_name: this.form.get('nombre').value,
      event_category: this.form.get('categoria').value,
      event_place: this.form.get('lugar').value,
      event_address: this.form.get('direccion').value,
      event_initial_date: this.form.get('inicial').value,
      event_final_date: this.form.get('final').value,
      event_type: this.form.get('tipo').value
    }
    let header = new HttpHeaders({'Authorization':'Token '+sessionStorage.getItem('token')});

    this.actualizarService.actualizarEvento(evento,header,id).subscribe(data =>{
      console.log('Guardado Exitosamente');
      this.form.reset()
      this.toastr.success('Evento Actualizado','Actualizado')
      this.eventoService.obtenerEventos(header)
    },(err: HttpErrorResponse) => {
      //if the back end is down
      //error getting data
      //set a flag to show an error

      this.errorFetch = true;
      this.toastr.error('Evento error','ERROR')
      //here click on the button click me, to see the result
      //because the weather api is not responding you get to this block
      //of code
    },
    () => {
      //subscribe has finished
    }         
    );
    this.router.navigate([`${pageName}`])
  }
}
