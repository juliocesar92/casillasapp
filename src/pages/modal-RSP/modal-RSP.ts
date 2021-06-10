import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalRSP page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-RSP',
  templateUrl: 'modal-RSP.html',
})
export class ModalRSP {

id_casilla:any;

cifra_alcalde_rsp:any;
cifra_fed17_rsp:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

                           this.cifra_alcalde_rsp=this.navParams.get('cifra_alc_prsp');
                           this.cifra_fed17_rsp=this.navParams.get('cifra_fed17_prsp');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalRSP');
  }


  guardar_cifras_rsp(){


  let variables = {
    
    id_registro:this.id_casilla,
    cifra_alcalde_rsp:this.cifra_alcalde_rsp,
    cifra_fed17_rsp:this.cifra_fed17_rsp,

    };



  var c_p = (this.cifra_alcalde_rsp % 1);
  var c_jg = (this.cifra_fed17_rsp % 1);

      if(c_p === 0 && c_jg === 0 ) {

          this.db.save_cifra_rsp(variables)
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
