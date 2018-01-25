import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PlantonistasService } from '../services/plantonistas.service';
import { ContatosService } from '../services/contatos.service';
import { TelefonesService } from '../services/telefones.service';
import { TelefonesContatosService } from './../services/telefones-contatos.service';

import { HomePage } from '../pages/home/home';
import { PlantonistasPage } from '../pages/plantonista_pages/plantonistas/plantonistas';
import { AddPlantonistaPage } from '../pages/plantonista_pages/add-plantonista/add-plantonista';
import { ContatosPage } from '../pages/contato_pages/contatos/contatos';
import { AddContatoPage } from '../pages/contato_pages/add-contato/add-contato';
import { TabsPage } from '../pages/tabs/tabs';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlantonistasPage,
    AddPlantonistaPage,
    ContatosPage,
    AddContatoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Inicializar AngularFire com credenciais
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    //Importação do modulo da base de dados Firebase para o Angular
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlantonistasPage,
    AddPlantonistaPage,
    ContatosPage,
    AddContatoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlantonistasService,
    ContatosService,
    TelefonesService,
    TelefonesContatosService
  ]
})
export class AppModule {}
