import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {Routes, RouterModule} from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component'
import { LugaresService } from './services/lugares.service';

import{AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';
import { HttpModule } from '@angular/http';
import {  linkifystrPipe } from './pipes/linkifystr.pipe';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AutorizacionService } from './services/autorizacion.service';
import { MyGuard } from './services/my-guard.service';

const appRoutes: Routes  = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear/:id', component: CrearComponent},
  //{path: 'crear/:id', component: CrearComponent, canActivate: [MyGuard]}, usado para proteccion de rutas y con eso no solo al ocultar un boton para que acceda a una ruta si no que asi se sepa esta no puede acceder
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent}
];

export const firebaseConfig = {
apiKey: "AIzaSyDkBb7lmCn4OIf7GoqZupKYa6zrl4jnSKg",
authDomain: "platzisquare-78450.firebaseapp.com",
databaseURL: "https://platzisquare-78450.firebaseio.com",
storageBucket: "platzisquare-78450.appspot.com",
messagingSenderId: "301960396738",
appId: "1:301960396738:web:2a21773af11bd5f6bce05b",
measurementId: "G-M6J0371EKP"
};


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    linkifystrPipe,
    LoginComponent,
    RegistroComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,

    AgmCoreModule.forRoot({
    apiKey: "AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0"
     // apiKey: "AIzaSyAuMnx7ldAiv9Sf6HPGOYFN81QcygpQgcI"
    }),
    
   BrowserAnimationsModule,
   RouterModule.forRoot(appRoutes),
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireDatabaseModule,
   AngularFireAuthModule,
   HttpModule,
   ReactiveFormsModule,
   

  ],
  providers: [LugaresService, AutorizacionService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

