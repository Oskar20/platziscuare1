import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  // Lugares: any =[
  //   {id: 1, plan: 'gratuito', cercania: 1 , distancia: 1, Active: true ,nombre:'Florería la Gardenia', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
  //   {id: 2, plan: 'gratuito', cercania: 1 , distancia: 1.8, Active: true ,nombre:'Donas la Pasadita', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
  //   {id: 3, plan: 'gratuito', cercania: 2 , distancia: 5, Active: true ,nombre:'Veterinaria Huellitas Felices', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
  //   {id: 4, plan: 'gratuito', cercania: 3 , distancia: 10, Active: false ,nombre:'Suchi Suchiroll', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
  //   {id: 5, plan: 'pagado', cercania: 3 , distancia: 35, Active: true ,nombre:'Hotel Garcial', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
  //   {id: 6, plan: 'gratuito', cercania: 3 , distancia: 120, Active: true ,nombre:'Zapatería el Clavo', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
  // ];
  id = null;
  lugar: any = {};
  constructor(private route: ActivatedRoute, private lugaresService: LugaresService) { 
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action2']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.lugaresService.buscarLugar(this.id);
  }

  ngOnInit() {
  }



}