import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalALIANZAMEXICO page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-ALIANZA-MEXICO',
  templateUrl: 'modal-ALIANZA-MEXICO.html',
})
export class ModalALIANZAMEXICO {

id_casilla:any;


cifra_alcalde_alianza_mexico:any;
cifra_local18_alianza_mexico:any;
cifra_fed16_alianza_mexico:any;
cifra_fed17_alianza_mexico:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

                            this.cifra_alcalde_alianza_mexico=this.navParams.get('cifra_alc_almexico');
                            this.cifra_local18_alianza_mexico=this.navParams.get('cifra_local18_almexico');
                            this.cifra_fed16_alianza_mexico=this.navParams.get('cifra_fed16_almexico');
                            this.cifra_fed17_alianza_mexico=this.navParams.get('cifra_fed17_almexico');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalALIANZAMEXICO');
  }


  guardar_cifras_alianza_mexico(){


  let variables = {
    
    id_registro:this.id_casilla,
    cifra_alcalde_alianza_mexico:this.cifra_alcalde_alianza_mexico,
    cifra_local18_alianza_mexico:this.cifra_local18_alianza_mexico,
    cifra_fed16_alianza_mexico:this.cifra_fed16_alianza_mexico,
    cifra_fed17_alianza_mexico:this.cifra_fed17_alianza_mexico,

    };



  var c_p = (this.cifra_alcalde_alianza_mexico % 1);
  var c_jg = (this.cifra_local18_alianza_mexico % 1);
  var c_s = (this.cifra_fed16_alianza_mexico % 1);
  var c_df = (this.cifra_fed17_alianza_mexico % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0) {

          this.db.save_cifra_almexico(variables)
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
