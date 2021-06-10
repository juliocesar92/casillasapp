import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPPAN page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-PPAN',
  templateUrl: 'modal-PPAN.html',
})
export class ModalPPAN {

id_casilla:any;

cifra_pre_prd:any;
cifra_jefe_prd:any;
cifra_sena_prd:any;
cifra_di_f_prd:any;
cifra_di_l_prd:any;
cifra_alc_prd:any;

cifra_local20_pan:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_local20_pan =  this.navParams.get('cifra_local20_pan');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPPAN');
  }


  guardar_cifras_pan(){


  let variables = {

    id_registro:this.id_casilla,
    cifra_local20_pan:this.cifra_local20_pan

    };



  var c_p = (this.cifra_local20_pan % 1);

      if(c_p === 0 ) {

          this.db.save_cifra_ppan(variables)
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
