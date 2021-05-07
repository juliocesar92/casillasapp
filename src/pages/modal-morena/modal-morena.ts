import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalMorena page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-morena',
  templateUrl: 'modal-morena.html',
})
export class ModalMorena {

id_casilla:any;

cifra_pre_morena:any;
cifra_jefe_morena:any;
cifra_sena_morena:any;
cifra_di_f_morena:any;
cifra_di_l_morena:any;
cifra_alc_morena:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

     this.id_casilla =  this.navParams.get('id_registro');
      this.cifra_pre_morena =  this.navParams.get('cifra_pre_morena');
      this.cifra_jefe_morena =  this.navParams.get('cifra_jefe_morena');
      this.cifra_sena_morena =  this.navParams.get('cifra_sena_morena');
      this.cifra_di_f_morena =  this.navParams.get('cifra_di_f_morena');
      this.cifra_di_l_morena =  this.navParams.get('cifra_di_l_morena');
      this.cifra_alc_morena =  this.navParams.get('cifra_alc_morena');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMorena');
  }




  guardar_cifras_morena(){


  let variables = {
    cifra_pre_morena:this.cifra_pre_morena,
    cifra_jefe_morena:this.cifra_jefe_morena,
    cifra_sena_morena:this.cifra_sena_morena,
    cifra_df_morena:this.cifra_di_f_morena,
    cifra_dl_morena:this.cifra_di_l_morena,
    cifra_alc_morena:this.cifra_alc_morena,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_morena % 1);
  var c_jg = (this.cifra_jefe_morena % 1);
  var c_s = (this.cifra_sena_morena % 1);
  var c_df = (this.cifra_di_f_morena % 1);
  var c_dl = (this.cifra_di_l_morena % 1);
  var c_a = (this.cifra_alc_morena % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_morena(variables)
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
