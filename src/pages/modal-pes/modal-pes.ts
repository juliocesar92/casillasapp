import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPes page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-pes',
  templateUrl: 'modal-pes.html',
})
export class ModalPes {

id_casilla:any;

cifra_pre_pes:any;
cifra_jefe_pes:any;
cifra_sena_pes:any;
cifra_di_f_pes:any;
cifra_di_l_pes:any;
cifra_alc_pes:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_pre_pes =  this.navParams.get('cifra_pre_pes');
   this.cifra_jefe_pes =  this.navParams.get('cifra_jefe_pes');
   this.cifra_sena_pes =  this.navParams.get('cifra_sena_pes');
   this.cifra_di_f_pes =  this.navParams.get('cifra_di_f_pes');
   this.cifra_di_l_pes =  this.navParams.get('cifra_di_l_pes');
   this.cifra_alc_pes =  this.navParams.get('cifra_alc_pes');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPes');
  }



  guardar_cifras_pes(){


  let variables = {
    cifra_pre_pes:this.cifra_pre_pes,
    cifra_jefe_pes:this.cifra_jefe_pes,
    cifra_sena_pes:this.cifra_sena_pes,
    cifra_di_f_pes:this.cifra_di_f_pes,
    cifra_di_l_pes:this.cifra_di_l_pes,
    cifra_alc_pes:this.cifra_alc_pes,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_pes % 1);
  var c_jg = (this.cifra_jefe_pes % 1);
  var c_s = (this.cifra_sena_pes % 1);
  var c_df = (this.cifra_di_f_pes % 1);
  var c_dl = (this.cifra_di_l_pes % 1);
  var c_a = (this.cifra_alc_pes % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_pes(variables)
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
