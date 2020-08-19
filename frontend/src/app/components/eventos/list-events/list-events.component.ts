import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../services/evento.service';
import { HttpHeaders } from '@angular/common/http';
import { ManipularEventoService } from '../../../services/manipular-evento.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  constructor(public EventoService:EventoService, private ManipularEventoService:ManipularEventoService,
            public toastr:ToastrService) { }
  
   

  ngOnInit(): void {
    let header = new HttpHeaders({'Authorization':'Token '+sessionStorage.getItem('token')});
    this.EventoService.obtenerEventos(header);
  }

  eliminarEvento(id: String){
    let header = new HttpHeaders({'Authorization':'Token '+sessionStorage.getItem('token')});
    console.log('Token '+sessionStorage.getItem('token'));
    
    if(confirm('Esta seguro que desea eliminar el registro?')){
      this.ManipularEventoService.eliminarEvento(id, header)
      this.toastr.warning('Registro Eliminado','El evento ha sido eliminado')
      //this.EventoService.obtenerEventos(header);
    }
  }
}
