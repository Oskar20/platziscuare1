import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LugaresService {

  API_ENDPOINT = "https://platzisquare-78450.firebaseio.com";

  Lugares: any =[
     {id: 1, plan: 'gratuito', cercania: 1 , distancia: 1, Active: true ,nombre:'Florería la Gardenia', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
     {id: 2, plan: 'gratuito', cercania: 1 , distancia: 1.8, Active: true ,nombre:'Donas la Pasadita', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
     {id: 3, plan: 'gratuito', cercania: 2 , distancia: 5, Active: true ,nombre:'Veterinaria Huellitas Felices', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
     {id: 4, plan: 'gratuito', cercania: 3 , distancia: 10, Active: false ,nombre:'Suchi Suchiroll', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
     {id: 5, plan: 'pagado', cercania: 3 , distancia: 35, Active: true ,nombre:'Hotel Garcial', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
     {id: 6, plan: 'gratuito', cercania: 3 , distancia: 120, Active: true ,nombre:'Zapatería el Clavo', description: 'Descripción de este negocio. Más adelante tendremos mas información. '},
  ];

  constructor(private afDB: AngularFireDatabase, private http: Http) { }

  public getLugares(){
  //return this.afDB.list('lugares/').valueChanges();
  return this.http.get(this.API_ENDPOINT+'/.json')
    .map((resultado) => {
      const data = resultado.json().lugares
      return data
    })
      
  }

  public buscarLugar(id){
    return this.Lugares.filter((lugar) => {return lugar.id == id})[0] || null;  
  }

  public guardarLugar(lugar){
    console.log(lugar);
    //this.afDB.database.ref('lugares/' + lugar.id).set(lugar); // ESTO ES UN EJEMPLO DE SOCKETS CON FIREBASE
    const headers  = new Headers({"Content-Type":"application/json"});
    return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers:headers}).subscribe();

  
  }

  public editarLugar(lugar){
    console.log(lugar);
    this.afDB.database.ref('lugares/' + lugar.id).set(lugar);

  }


  public getLugar(id){

    return this.afDB.object('lugares/' + id).valueChanges() ;
  }

  public obtenerGeoData(direccion){
    //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia

    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }

}
