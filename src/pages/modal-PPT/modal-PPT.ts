import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPPT page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-PPT',
  templateUrl: 'modal-PPT.html',
})
export class ModalPPT {

id_casilla:any;



cifra_fed06_pt:any

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_fed06_pt =  this.navParams.get('cifra_fed06_pt');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPPT');
  }


  guardar_cifras_pt(){


  let variables = {
    
    id_registro:this.id_casilla,
    cifra_fed06_pt:this.cifra_fed06_pt

    };



  var c_p = (this.cifra_fed06_pt % 1);

      if(c_p === 0) {

          this.db.save_cifra_ppt(variables)
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
