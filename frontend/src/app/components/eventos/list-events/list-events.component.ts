import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ManipularEventoService } from '../../../services/manipular-evento.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  constructor(public EventoService:EventoService, private ManipularEventoService:ManipularEventoService,
            public toastr:ToastrService, private router:Router, private http: HttpClient) { }
  
  id:String; 

  ngOnInit(): void {
    let header = new HttpHeaders({'Authorization':'Token '+sessionStorage.getItem('token')});
    this.EventoService.obtenerEventos(header);
  }

  eliminarEvento(id: String){
    let header = new HttpHeaders({'Authorization':'Token '+sessionStorage.getItem('token')});
    
    if(confirm('Esta seguro que desea eliminar el registro?')){
      this.ManipularEventoService.eliminarEvento(id, header)
      this.toastr.warning('Registro Eliminado','El evento ha sido eliminado')
      this.EventoService.obtenerEventos(header);
    }
  }

  ver(evento){
    this.EventoService.actualizar(evento);
  }

  editar(evento, pageName:String, idEvento: String){
    this.EventoService.actualizar(evento);
    this.router.navigate([`${pageName}`])
    this.id = idEvento
  }
}
