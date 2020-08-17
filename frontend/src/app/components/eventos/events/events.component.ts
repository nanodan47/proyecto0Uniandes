import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { EventoService } from '../../../services/evento.service';
import { events } from '../../../models/evento';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
form: FormGroup;
  constructor(private formBuilder: FormBuilder, private eventoService: EventoService) {
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
  }

  guardarEvento() {
    const evento: events ={
      event_name: this.form.get('nombre').value,
      event_category: this.form.get('categoria').value,
      event_place: this.form.get('lugar').value,
      event_address: this.form.get('direccion').value,
      event_initial_date: this.form.get('inicial').value,
      event_final_date: this.form.get('final').value,
      event_type: this.form.get('tipo').value,
      thumbnail:this.form.get('imagen').value,
    }
    this.eventoService.guardarEvento(evento).subscribe(data =>{
      console.log('Guardado Exitosamente');
      this.form.reset()
    })
    }

}

