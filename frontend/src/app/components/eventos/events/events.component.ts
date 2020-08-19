import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { EventoService } from '../../../services/evento.service';
import { events } from '../../../models/evento';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
form: FormGroup;
  constructor(private formBuilder: FormBuilder, private eventoService: EventoService,
      private router:Router, private http: HttpClient,private toastr: ToastrService) {
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
   selectedFile: File

  onFileChanged(event){
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile);
    
  }

  ngOnInit(): void {
  }
  //header = new HttpHeaders({'Authorization': 'Token '+sessionStorage.getItem('token')})
  guardarEvento() {
    const evento: events ={
      event_name: this.form.get('nombre').value,
      event_category: this.form.get('categoria').value,
      event_place: this.form.get('lugar').value,
      event_address: this.form.get('direccion').value,
      event_initial_date: this.form.get('inicial').value,
      event_final_date: this.form.get('final').value,
      event_type: this.form.get('tipo').value,
      thumbnail: this.selectedFile,
    }
    let header = new HttpHeaders({'Authorization':'Token '+sessionStorage.getItem('token')});
    console.log(header);
    
    this.eventoService.guardarEvento(evento,header).subscribe(data =>{
      console.log('Guardado Exitosamente');
      this.form.reset()
      this.eventoService.obtenerEventos(header)
    },(err: HttpErrorResponse) => {
      //if the back end is down
      //error getting data
      //set a flag to show an error
      console.log('Bearer '+sessionStorage.getItem('token'));
      
      console.log('llego hasta error');
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
    }

    
    errorFetch: boolean = false;
      
  
  goToPage(pageName:String):void{
    this.router.navigate([`${pageName}`])
    
  }

}

