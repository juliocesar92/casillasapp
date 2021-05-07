import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalNAlianza page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-n-alianza',
  templateUrl: 'modal-n-alianza.html',
})
export class ModalNAlianza {

id_casilla:any;

cifra_pre_nalianza:any;
cifra_jefe_nalianza:any;
cifra_sena_nalianza:any;
cifra_di_f_nalianza:any;
cifra_di_l_nalianza:any;
cifra_alc_nalianza:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
   this.statusBar.backgroundColorByHexString('#99C7FF');

     this.id_casilla =  this.navParams.get('id_registro');
     this.cifra_pre_nalianza =  this.navParams.get('cifra_pre_alianza');
     this.cifra_jefe_nalianza =  this.navParams.get('cifra_jefe_alianza');
     this.cifra_sena_nalianza =  this.navParams.get('cifra_sena_alianza');
     this.cifra_di_f_nalianza =  this.navParams.get(' cifra_di_f_alianza');
     this.cifra_di_l_nalianza =  this.navParams.get('cifra_di_l_alianza');
     this.cifra_alc_nalianza =  this.navParams.get('cifra_alc_alianza');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNAlianza');
  }


  guardar_cifras_nalianza(){


  let variables = {
    cifra_pre_nalianza:this.cifra_pre_nalianza,
    cifra_jefe_nalianza:this.cifra_jefe_nalianza,
    cifra_sena_nalianza:this.cifra_sena_nalianza,
    cifra_di_f_nalianza:this.cifra_di_f_nalianza,
    cifra_di_l_nalianza:this.cifra_di_l_nalianza,
    cifra_alc_nalianza:this.cifra_alc_nalianza,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_nalianza % 1);
  var c_jg = (this.cifra_jefe_nalianza % 1);
  var c_s = (this.cifra_sena_nalianza % 1);
  var c_df = (this.cifra_di_f_nalianza % 1);
  var c_dl = (this.cifra_di_l_nalianza % 1);
  var c_a = (this.cifra_alc_nalianza % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_nalianza(variables)
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
