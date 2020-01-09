import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity:0,
        // backgroundColor: 'green',
        // transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity:1,
        // backgroundColor: 'yellow',
        // transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000)),
      
    ])
  ] 
})
export class LugaresComponent implements OnInit {
  title = 'PlatziSquare';
  Listo= false;
  Nombre="";
  alerta ="";
  state='inicial';
 
  lat: number = 4.6560663;
  lng: number= -74.0595918;
  Lugares = null;

  animar(){
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  animacionInicia(e){
    console.log('Iniciado!')
    console.log(e);

  }

  animacionTermina(e){
    console.log('Terminado!')
    console.log(e);

  }
  constructor(public lugaresService: LugaresService) {
    setTimeout(() => {this.Listo = true;}, 3000);
    
    lugaresService.getLugares()
    .subscribe(lugares =>{
      this.Lugares = lugares;
      var me  = this;
      this.Lugares = Object.keys(me.Lugares).map(function (key) { return me.Lugares[key]; });
      this.state='final';
    }, error => {
      console.log(error);
       this.alerta = 'Tenermos algo de dificultades, disculpe las molestias. Error: ' + error.statusText
    });

   }

  ngOnInit() {
    
  }

   HacerAlgo(){
    alert("Has dado Click")

  }

}
