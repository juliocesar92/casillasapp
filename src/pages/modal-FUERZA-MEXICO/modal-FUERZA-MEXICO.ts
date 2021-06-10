import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalFUERZAMEXICO page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-FUERZA-MEXICO',
  templateUrl: 'modal-FUERZA-MEXICO.html',
})
export class ModalFUERZAMEXICO {

id_casilla:any;



cifra_alcalde_fuerza_mexico:any;
cifra_fed16_fuerza_mexico:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

    this.cifra_alcalde_fuerza_mexico=this.navParams.get('cifra_alc_pfm');
    this.cifra_fed16_fuerza_mexico=this.navParams.get('cifra_fed16_pfm');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFUERZAMEXICO');
  }


  guardar_cifras_fuerza_mexico(){


  let variables = {
    
    id_registro:this.id_casilla,
    cifra_alcalde_fuerza_mexico:this.cifra_alcalde_fuerza_mexico,
    cifra_fed16_fuerza_mexico:this.cifra_fed16_fuerza_mexico

    };



  var c_p = (this.cifra_alcalde_fuerza_mexico % 1);
  var c_jg = (this.cifra_fed16_fuerza_mexico % 1);

      if(c_p === 0 && c_jg === 0 ) {

          this.db.save_cifra_pfm(variables)
           .map(res => res.json())
                          .subscribe(res => {

                        alert(res.data);
                         
                           }, error => {
                             alert(error);
                          });


      }else{

         alert("No se puede guardar.Las cifras deben ser enteros");

      }

      this.viewCtrl.dismiss();

  }

}
