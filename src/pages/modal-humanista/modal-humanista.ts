import { Component } from '@angular/core';
import { NavController, NavParams,ViewController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalHumanista page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-humanista',
  templateUrl: 'modal-humanista.html',
})
export class ModalHumanista {

id_casilla:any;

cifra_pre_humanista:any;
cifra_jefe_humanista:any;
cifra_sena_humanista:any;
cifra_di_f_humanista:any;
cifra_di_l_humanista:any;
cifra_alc_humanista:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');
   this.cifra_pre_humanista =  this.navParams.get('cifra_pre_humanista');
   this.cifra_jefe_humanista =  this.navParams.get('cifra_jefe_humanista');
   this.cifra_sena_humanista =  this.navParams.get('cifra_sena_humanista');
   this.cifra_di_f_humanista =  this.navParams.get('cifra_di_f_humanista');
   this.cifra_di_l_humanista =  this.navParams.get('cifra_di_l_humanista');
   this.cifra_alc_humanista =  this.navParams.get('cifra_alc_humanista');

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalHumanista');
  }



  guardar_cifras_humanista(){


  let variables = {
    cifra_pre_humanista:this.cifra_pre_humanista,
    cifra_jefe_humanista:this.cifra_jefe_humanista,
    cifra_sena_humanista:this.cifra_sena_humanista,
    cifra_di_f_humanista:this.cifra_di_f_humanista,
    cifra_di_l_humanista:this.cifra_di_l_humanista,
    cifra_alc_humanista:this.cifra_alc_humanista,
    id_registro:this.id_casilla

    };



  var c_p = (this.cifra_pre_humanista % 1);
  var c_jg = (this.cifra_jefe_humanista % 1);
  var c_s = (this.cifra_sena_humanista % 1);
  var c_df = (this.cifra_di_f_humanista % 1);
  var c_dl = (this.cifra_di_l_humanista % 1);
  var c_a = (this.cifra_alc_humanista % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0) {

          this.db.save_cifra_humanista(variables)
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
