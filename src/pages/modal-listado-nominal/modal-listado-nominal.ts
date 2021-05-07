import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalListadoNominal page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-listado-nominal',
  templateUrl: 'modal-listado-nominal.html',
})
export class ModalListadoNominal {

data:any;

id_casilla:any;
seccion:any;
insertos:any;
searchTerm:any;
asistencia:any;

isItemAvailable = false;
items = [];
selectedCountry:any;
id_asistente:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,private db: DbProvider) {


  this.id_casilla =  this.navParams.get('id_registro');
  this.seccion =  this.navParams.get('seccion');
  this.items = ["Ram","gopi", "dravid"];

     this.getListado(0,0);

  }



  getItems(ev: any) {
        let val = ev.target.value;

      
          if (val && val.trim() !== '') {
           this.getListado(val,this.seccion);
           this.isItemAvailable = true;

         
          } else {
          this.isItemAvailable = false;
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalListadoNominal');
  }



 dismiss() {



 let variables = 
 {
 'id_asistente': this.id_asistente,
 'asistencia':this.asistencia,
 };


 this.db.save_asistencia(variables)
  .map(res => res.json())
                 .subscribe(res => {

               alert(res.data);
                
                  }, error => {
                    alert(error);
                 });


this.viewCtrl.dismiss();


  }


  getListado(palabra,seccion){


  let variables = {
    palabra: palabra,
    seccion: seccion
  }

  this.db.consulta_listado_nominal(variables)
   .map(res => res.json())
                  .subscribe(res => {
                this.insertos=res.data;

               // alert(JSON.stringify(this.insertos));


               
                 
                   }, error => {
                  
                     alert(error);
                  });



   }


 selectCountry(nombre,id) {

     this.selectedCountry = nombre; 
     this.id_asistente = id; 
     this.isItemAvailable = false;

 }


}
