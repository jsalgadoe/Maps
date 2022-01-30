import { Component, OnInit } from '@angular/core';
import { AgmMap, AgmMarker } from '@agm/core';
import {Mark} from "../../classes/mark.class";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from '@angular/material/dialog';
import {MapsEditComponent} from "./maps-edit.component";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  marcadores:Mark[] = [];

  title = 'My first AGM project';
  lat = 10.8789437933103;
  lng = -74.80285461762054;

  constructor(public snackBar:MatSnackBar,
              public dialog: MatDialog ) {

    const newMarcador =  new Mark(10.8789437933103,-74.80285461762054);

    this.marcadores.push(newMarcador);

    this.ObtenerMarcadores();
  }

  ngOnInit(): void {
  }

  addMark( evento:any ){
    const coords:{lat:number,lng:number} = evento.coords
    const newMarcador =  new Mark(coords.lat,coords.lng);
    this.marcadores.push(newMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar',{duration:3000});
  }

  guardarStorage(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }

  ObtenerMarcadores(){
    if(localStorage.getItem('marcadores')){
        this.marcadores =  JSON.parse(<string>localStorage.getItem('marcadores'));
    }
  }

  editMark( marcador:Mark){

    const dialogRef = this.dialog.open(MapsEditComponent, {
      width: '250px',
      data: {name: marcador.title, desc: marcador.desc},
    });

    dialogRef.afterClosed().subscribe(result => {
     if (!result){
       return
     }

     marcador.title = result.title;
     marcador.desc = result.desc;
     this.guardarStorage();
     this.snackBar.open('Marcador Actualizado','cerrar',{duration:3000});
    });
  }

  deleteMark(i:number){
    console.log(i);
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this.snackBar.open('Marcador Borrado', 'Cerrar',{duration:3000});
  }
}
