import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPt page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-pt',
  templateUrl: 'modal-pt.html',
})
export class ModalPt {

id_casilla:any;


cifra_pre_pt:any;
cifra_jefe_pt:any;
cifra_sena_pt:any;
cifra_di_f_pt:any;
cifra_di_l_pt:any;
cifra_alc_pt:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

  this.id_casilla =  this.navParams.get('id_registro');

  this.cifra_pre_pt =  this.navParams.get('cifra_pre_pt');
  this.cifra_jefe_pt =  this.navParams.get('cifra_jefe_pt');
  this.cifra_sena_pt =  this.navParams.get('cifra_sena_pt');
  this.cifra_di_f_pt =  this.navParams.get('cifra_di_f_pt');
  this.cifra_di_l_pt =  this.navParams.get('cifra_di_l_pt');
  this.cifra_alc_pt =  this.navParams.get('cifra_alc_pt');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPt');
  }


  guardar_cifras_pt(){


  let variables = {
    cifra_pre_pt:this.cifra_pre_pt,
    cifra_jefe_pt:this.cifra_jefe_pt,
    cifra_sena_pt:this.cifra_sena_pt,
    cifra_di_f_pt:this.cifra_di_f_pt,
    cifra_di_l_pt:this.cifra_di_l_pt,
    cifra_alc_pt:this.cifra_alc_pt,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_pt % 1);
  var c_jg = (this.cifra_jefe_pt % 1);
  var c_s = (this.cifra_sena_pt % 1);
  var c_df = (this.cifra_di_f_pt % 1);
  var c_dl = (this.cifra_di_l_pt % 1);
  var c_a = (this.cifra_alc_pt % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_pt(variables)
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
