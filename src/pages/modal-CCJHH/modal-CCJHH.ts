import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalCCJHH page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-CCJHH',
  templateUrl: 'modal-CCJHH.html',
})
export class ModalCCJHH {

id_casilla:any;

cifra_pre_prd:any;
cifra_jefe_prd:any;
cifra_sena_prd:any;
cifra_di_f_prd:any;
cifra_di_l_prd:any;
cifra_alc_prd:any;

cifra_alcalde_ccjhh:any;
cifra_local18_ccjhh:any;
cifra_local20_ccjhh:any;
cifra_local23_ccjhh:any;
cifra_fed16_ccjhh:any;
cifra_fed17_ccjhh:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

    this.cifra_alcalde_ccjhh= this.navParams.get('cifra_alc_ccjhh');
    this.cifra_local18_ccjhh=this.navParams.get('cifra_local18_ccjhh');
    this.cifra_local20_ccjhh=this.navParams.get('cifra_local20_ccjhh');
    this.cifra_local23_ccjhh=this.navParams.get('cifra_local23_ccjhh');
    this.cifra_fed16_ccjhh=this.navParams.get('cifra_fed16_ccjhh');
    this.cifra_fed17_ccjhh=this.navParams.get('cifra_fed17_ccjhh');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCCJHH');
  }


  guardar_cifras_ccjhh(){


  let variables = {

    id_registro:this.id_casilla,
    cifra_alcalde_ccjhh:this.cifra_alcalde_ccjhh,
    cifra_local18_ccjhh:this.cifra_local18_ccjhh,
    cifra_local20_ccjhh:this.cifra_local20_ccjhh,
    cifra_local23_ccjhh:this.cifra_local23_ccjhh,
    cifra_fed16_ccjhh:this.cifra_fed16_ccjhh,
    cifra_fed17_ccjhh:this.cifra_fed17_ccjhh,

    };



  var c_p = (this.cifra_alcalde_ccjhh % 1);
  var c_jg = (this.cifra_local18_ccjhh % 1);
  var c_s = (this.cifra_local20_ccjhh % 1);
  var c_df = (this.cifra_local23_ccjhh % 1);
  var c_dl = (this.cifra_fed16_ccjhh % 1);
  var c_a = (this.cifra_fed17_ccjhh % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_ccjhh(variables)
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
