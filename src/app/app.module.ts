import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HttpModule } from '@angular/http';

import { SignaturePadModule } from 'angular2-signaturepad';

import { SQLite } from '@ionic-native/sqlite';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { ModalReportarFuncionario } from '../pages/modal-reportar-funcionario/modal-reportar-funcionario';
import { ModalListadoNominal } from '../pages/modal-listado-nominal/modal-listado-nominal';
import { RegistroCasilla } from '../pages/registro-casilla/registro-casilla';
import { IonicStorageModule } from '@ionic/storage';
import { Login } from '../pages/login/login';
import { MenuTabs } from '../pages/menu-tabs/menu-tabs';
import { Signature } from '../pages/signature/signature';
import { Geolocation } from '@ionic-native/geolocation';
//Para cargar la camara
import { Camera } from '@ionic-native/camera';



import { ModalFrente } from '../pages/modal-frente/modal-frente';
import { ModalHumanista } from '../pages/modal-humanista/modal-humanista';
import { ModalJhh } from '../pages/modal-jhh/modal-jhh';
import { ModalMc } from '../pages/modal-mc/modal-mc';
import { ModalMorena } from '../pages/modal-morena/modal-morena';
import { ModalNAlianza } from '../pages/modal-n-alianza/modal-n-alianza';
import { ModalPan } from '../pages/modal-pan/modal-pan';
import { ModalPes } from '../pages/modal-pes/modal-pes';
import { ModalPrd } from '../pages/modal-prd/modal-prd';
import { ModalPri } from '../pages/modal-pri/modal-pri';
import { ModalPt } from '../pages/modal-pt/modal-pt';
import { ModalTodosMexico } from '../pages/modal-todos-mexico/modal-todos-mexico';
import { ModalVerde } from '../pages/modal-verde/modal-verde';











import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DbProvider } from '../providers/db/db';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    MenuTabs,
    Signature,
    RegistroCasilla,
    ModalReportarFuncionario,
    ModalListadoNominal,

    ModalFrente,
    ModalHumanista,
    ModalJhh,
    ModalMc,
    ModalMorena,
    ModalNAlianza,
    ModalPan,
    ModalPes,
    ModalPrd,
    ModalPri,
    ModalPt,
    ModalTodosMexico,
    ModalVerde
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
     SignaturePadModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    MenuTabs,
    Signature,
    RegistroCasilla,
    ModalReportarFuncionario,
    ModalListadoNominal,

    ModalFrente,
    ModalHumanista,
    ModalJhh,
    ModalMc,
    ModalMorena,
    ModalNAlianza,
    ModalPan,
    ModalPes,
    ModalPrd,
    ModalPri,
    ModalPt,
    ModalTodosMexico,
    ModalVerde
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbProvider,
    SQLite,
    Geolocation,
    Camera
  ]
})
export class AppModule {}
