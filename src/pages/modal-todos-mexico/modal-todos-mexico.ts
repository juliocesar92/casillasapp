import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';


/**
 * Generated class for the ModalTodosMexico page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-todos-mexico',
  templateUrl: 'modal-todos-mexico.html',
})
export class ModalTodosMexico {

id_casilla:any;


cifra_pre_t_mexico:any;
cifra_jefe_t_mexico:any;
cifra_sena_t_mexico:any;
cifra_di_f_t_mexico:any;
cifra_di_l_t_mexico:any;
cifra_alc_t_mexico:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

  this.id_casilla =  this.navParams.get('id_registro');

  this.cifra_pre_t_mexico =  this.navParams.get('cifra_pre_t_mexico');
  this.cifra_jefe_t_mexico =  this.navParams.get('cifra_jefe_t_mexico');
  this.cifra_sena_t_mexico =  this.navParams.get('cifra_sena_t_mexico');
  this.cifra_di_f_t_mexico =  this.navParams.get('cifra_di_f_t_mexico');
  this.cifra_di_l_t_mexico =  this.navParams.get('cifra_di_l_t_mexico');
  this.cifra_alc_t_mexico =  this.navParams.get('cifra_alc_t_mexico');




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalTodosMexico');
  }


  guardar_cifras_t_mexico(){


  let variables = {
    cifra_pre_t_mexico:this.cifra_pre_t_mexico,
    cifra_jefe_t_mexico:this.cifra_jefe_t_mexico,
    cifra_sena_t_mexico:this.cifra_sena_t_mexico,
    cifra_di_f_t_mexico:this.cifra_di_f_t_mexico,
    cifra_di_l_t_mexico:this.cifra_di_l_t_mexico,
    cifra_alc_t_mexico:this.cifra_alc_t_mexico,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_t_mexico % 1);
  var c_jg = (this.cifra_jefe_t_mexico % 1);
  var c_s = (this.cifra_sena_t_mexico % 1);
  var c_df = (this.cifra_di_f_t_mexico % 1);
  var c_dl = (this.cifra_di_l_t_mexico % 1);
  var c_a = (this.cifra_alc_t_mexico % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_t_mexico(variables)
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
