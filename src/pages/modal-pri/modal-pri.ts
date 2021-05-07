import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { DbProvider } from '../../providers/db/db';


/**
 * Generated class for the ModalPri page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-pri',
  templateUrl: 'modal-pri.html',
})
export class ModalPri {

id_casilla:any;

cifra_pre_pri:any;
cifra_jefe_pri:any;
cifra_sena_pri:any;
cifra_di_f_pri:any;
cifra_di_l_pri:any;
cifra_alc_pri:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_pre_pri =  this.navParams.get('cifra_pre_pri');
   this.cifra_jefe_pri =  this.navParams.get('cifra_jefe_pri');
   this.cifra_sena_pri =  this.navParams.get('cifra_sena_pri');
   this.cifra_di_f_pri =  this.navParams.get('cifra_di_f_pri');
   this.cifra_di_l_pri =  this.navParams.get('cifra_di_l_pri');
   this.cifra_alc_pri =  this.navParams.get('cifra_alc_pri');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPri');
  }


  guardar_cifras_pri(){


  let variables = {
    cifra_pre_pri:this.cifra_pre_pri,
    cifra_j_pri:this.cifra_jefe_pri,
    cifra_sena_pri:this.cifra_sena_pri,
    cifra_df_pri:this.cifra_di_f_pri,
    cifra_dl_pri:this.cifra_di_l_pri,
    cifra_alc_pri:this.cifra_alc_pri,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_pri % 1);
  var c_jg = (this.cifra_jefe_pri % 1);
  var c_s = (this.cifra_sena_pri % 1);
  var c_df = (this.cifra_di_f_pri % 1);
  var c_dl = (this.cifra_di_l_pri % 1);
  var c_a = (this.cifra_alc_pri % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_pri(variables)
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
