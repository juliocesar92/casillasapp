import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalVerde page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-verde',
  templateUrl: 'modal-verde.html',
})
export class ModalVerde {

id_casilla:any;


cifra_pre_verde:any;
cifra_jefe_verde:any;
cifra_sena_verde:any;
cifra_di_f_verde:any;
cifra_di_l_verde:any;
cifra_alc_verde:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_pre_verde =  this.navParams.get('cifra_pre_verde');
   this.cifra_jefe_verde =  this.navParams.get('cifra_jefe_verde');
   this.cifra_sena_verde =  this.navParams.get('cifra_sena_verde');
   this.cifra_di_f_verde =  this.navParams.get('cifra_di_f_verde');
   this.cifra_di_l_verde =  this.navParams.get('cifra_di_l_verde');
   this.cifra_alc_verde =  this.navParams.get('cifra_alc_verde');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalVerde');
  }


  guardar_cifras_verde(){


  let variables = {
    cifra_pre_verde:this.cifra_pre_verde,
    cifra_jefe_verde:this.cifra_jefe_verde,
    cifra_sena_verde:this.cifra_sena_verde,
    cifra_di_f_verde:this.cifra_di_f_verde,
    cifra_di_l_verde:this.cifra_di_l_verde,
    cifra_alc_verde:this.cifra_alc_verde,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_verde % 1);
  var c_jg = (this.cifra_jefe_verde % 1);
  var c_s = (this.cifra_sena_verde % 1);
  var c_df = (this.cifra_di_f_verde % 1);
  var c_dl = (this.cifra_di_l_verde % 1);
  var c_a = (this.cifra_alc_verde % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_verde(variables)
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
