import { Component } from '@angular/core';
import { NavController, NavParams , ViewController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalJhh page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-jhh',
  templateUrl: 'modal-jhh.html',
})
export class ModalJhh {


id_casilla:any;


cifra_pre_jhh:any;
cifra_jefe_jhh:any;
cifra_sena_jhh:any;
cifra_di_f_jhh:any;
cifra_di_l_jhh:any;
cifra_alc_jhh:any;



  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');


   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_pre_jhh =  this.navParams.get('cifra_pre_jhh');
   this.cifra_jefe_jhh =  this.navParams.get('cifra_jefe_jhh');
   this.cifra_sena_jhh =  this.navParams.get('cifra_sena_jhh');
   this.cifra_di_f_jhh =  this.navParams.get('cifra_di_f_jhh');
   this.cifra_di_l_jhh =  this.navParams.get('cifra_di_l_jhh');
   this.cifra_alc_jhh =  this.navParams.get('cifra_alc_jhh');

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalJhh');
  }


  guardar_cifras_jhh(){


  let variables = {
    cifra_pre_jhh:this.cifra_pre_jhh,
    cifra_jefe_jhh:this.cifra_jefe_jhh,
    cifra_sena_jhh:this.cifra_sena_jhh,
    cifra_di_f_jhh:this.cifra_di_f_jhh,
    cifra_di_l_jhh:this.cifra_di_l_jhh,
    cifra_alc_jhh:this.cifra_alc_jhh,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_jhh % 1);
  var c_jg = (this.cifra_jefe_jhh % 1);
  var c_s = (this.cifra_sena_jhh % 1);
  var c_df = (this.cifra_di_f_jhh % 1);
  var c_dl = (this.cifra_di_l_jhh % 1);
  var c_a = (this.cifra_alc_jhh % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_jhh(variables)
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
