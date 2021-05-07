import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalMc page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-mc',
  templateUrl: 'modal-mc.html',
})
export class ModalMc {



id_casilla:any;

cifra_pre_mc:any;
cifra_jefe_mc:any;
cifra_sena_mc:any;
cifra_di_f_mc:any;
cifra_di_l_mc:any;
cifra_alc_mc:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_pre_mc =  this.navParams.get('cifra_pre_mc');
   this.cifra_jefe_mc =  this.navParams.get('cifra_jefe_mc');
   this.cifra_sena_mc =  this.navParams.get('cifra_sena_mc');
   this.cifra_di_f_mc =  this.navParams.get('cifra_di_f_mc');
   this.cifra_di_l_mc =  this.navParams.get('cifra_di_l_mc');
   this.cifra_alc_mc =  this.navParams.get('cifra_alc_mc');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMc');
  }


  guardar_cifras_mc(){


  let variables = {
    cifra_pre_mc:this.cifra_pre_mc,
    cifra_jefe_mc:this.cifra_jefe_mc,
    cifra_sena_mc:this.cifra_sena_mc,
    cifra_di_f_mc:this.cifra_di_f_mc,
    cifra_di_l_mc:this.cifra_di_l_mc,
    cifra_alc_mc:this.cifra_alc_mc,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_mc % 1);
  var c_jg = (this.cifra_jefe_mc % 1);
  var c_s = (this.cifra_sena_mc % 1);
  var c_df = (this.cifra_di_f_mc % 1);
  var c_dl = (this.cifra_di_l_mc % 1);
  var c_a = (this.cifra_alc_mc % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_mc(variables)
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
