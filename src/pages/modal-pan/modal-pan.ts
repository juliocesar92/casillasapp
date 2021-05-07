import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPan page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-pan',
  templateUrl: 'modal-pan.html',
})
export class ModalPan {
id_casilla:any;

cifra_pre_pan:any;
cifra_jefe_pan:any;
cifra_sena_pan:any;
cifra_di_f_pan:any;
cifra_di_l_pan:any;
cifra_alc_pan:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
   this.statusBar.backgroundColorByHexString('#99C7FF');

     this.id_casilla =  this.navParams.get('id_registro');
     this.cifra_pre_pan =  this.navParams.get('cifra_pre_pan');
     this.cifra_jefe_pan =  this.navParams.get('cifra_jefe_pan');
     this.cifra_sena_pan =  this.navParams.get('cifra_sena_pan');
     this.cifra_di_f_pan =  this.navParams.get('cifra_di_f_pan');
     this.cifra_di_l_pan =  this.navParams.get('cifra_di_l_pan');
     this.cifra_alc_pan =  this.navParams.get('cifra_alc_pan');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPan');
  }


  guardar_cifras_pan(){


  let variables = {
    cifra_pre_pan:this.cifra_pre_pan,
    cifra_jefe_pan:this.cifra_jefe_pan,
    cifra_sena_pan:this.cifra_sena_pan,
    cifra_di_f_pan:this.cifra_di_f_pan,
    cifra_di_l_pan:this.cifra_di_l_pan,
    cifra_alc_pan:this.cifra_alc_pan,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_pan % 1);
  var c_jg = (this.cifra_jefe_pan % 1);
  var c_s = (this.cifra_sena_pan % 1);
  var c_df = (this.cifra_di_f_pan % 1);
  var c_dl = (this.cifra_di_l_pan % 1);
  var c_a = (this.cifra_alc_pan % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_pan(variables)
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
