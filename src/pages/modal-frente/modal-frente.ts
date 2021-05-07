import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalFrente page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-frente',
  templateUrl: 'modal-frente.html',
})
export class ModalFrente {

id_casilla:any;

cifra_pre:any;
cifra_jefe:any;
cifra_sena:any;
cifra_di_f:any;
cifra_di_l:any;
cifra_alc:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {

  this.statusBar.backgroundColorByHexString('#99C7FF');


  this.id_casilla =  this.navParams.get('id_registro');

    this.cifra_pre =  this.navParams.get('cifra_pre');
    this.cifra_jefe =  this.navParams.get('cifra_jefe');
    this.cifra_sena =  this.navParams.get('cifra_sena');
    this.cifra_di_f =  this.navParams.get('cifra_di_f');
    this.cifra_di_l =  this.navParams.get('cifra_di_l');
    this.cifra_alc =  this.navParams.get('cifra_alc');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFrente');
  }



  guardar_cifras_frente(){


  let variables = {
    cifra_pre:this.cifra_pre,
    cifra_jefe:this.cifra_jefe,
    cifra_sena:this.cifra_sena,
    cifra_d_f:this.cifra_di_f,
    cifra_d_l:this.cifra_di_l,
    cifra_a:this.cifra_alc,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre % 1);
  var c_jg = (this.cifra_jefe % 1);
  var c_s = (this.cifra_sena % 1);
  var c_df = (this.cifra_di_f % 1);
  var c_dl = (this.cifra_di_l % 1);
  var c_a = (this.cifra_alc % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_frente(variables)
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
