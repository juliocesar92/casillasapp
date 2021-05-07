import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPrd page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-prd',
  templateUrl: 'modal-prd.html',
})
export class ModalPrd {

id_casilla:any;

cifra_pre_prd:any;
cifra_jefe_prd:any;
cifra_sena_prd:any;
cifra_di_f_prd:any;
cifra_di_l_prd:any;
cifra_alc_prd:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_pre_prd =  this.navParams.get('cifra_pre_prd');
   this.cifra_jefe_prd =  this.navParams.get('cifra_jefe_prd');
   this.cifra_sena_prd =  this.navParams.get('cifra_sena_prd');
   this.cifra_di_f_prd =  this.navParams.get('cifra_di_f_prd');
   this.cifra_di_l_prd =  this.navParams.get('cifra_di_l_prd');
   this.cifra_alc_prd =  this.navParams.get('cifra_alc_prd');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPrd');
  }


  guardar_cifras_prd(){


  let variables = {
    cifra_pre_prd:this.cifra_pre_prd,
    cifra_jefe_prd:this.cifra_jefe_prd,
    cifra_sena_prd:this.cifra_sena_prd,
    cifra_di_f_prd:this.cifra_di_f_prd,
    cifra_di_l_prd:this.cifra_di_l_prd,
    cifra_alc_prd:this.cifra_alc_prd,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_prd % 1);
  var c_jg = (this.cifra_jefe_prd % 1);
  var c_s = (this.cifra_sena_prd % 1);
  var c_df = (this.cifra_di_f_prd % 1);
  var c_dl = (this.cifra_di_l_prd % 1);
  var c_a = (this.cifra_alc_prd % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_prd(variables)
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
