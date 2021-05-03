import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea[] = [];
  nombreTareas = ''
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea():void{
    //Crear obj tarea
    const tarea:Tarea ={
      nombre: this.nombreTareas,
      estado: false,
    }
    //Add onj tarea al array
    this.listaTareas.push(tarea);
    //reset input de tarea
    this.nombreTareas='';
  }

  deleteTarea(i:number):void{
    //splice recibe dos parametros
    //1par elemento a elimuinar y cuantos 
    //2par cuantos elementos desde el elemento seleccionado a borrar
    this.listaTareas.splice(i, 1);
  }

  updateTarea(tarea:Tarea, i:number):void{
    this.listaTareas[i].estado = !tarea.estado;
  }

}
