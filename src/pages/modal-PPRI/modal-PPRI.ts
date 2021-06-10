import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPPRI page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-PPRI',
  templateUrl: 'modal-PPRI.html',
})
export class ModalPPRI {

id_casilla:any;



cifra_local23_pri:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_local23_pri =  this.navParams.get('cifra_local23_pri');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPPRI');
  }


  guardar_cifras_pri(){


  let variables = {
    id_registro:this.id_casilla,
    cifra_local23_pri:this.cifra_local23_pri

    };



  var c_p = (this.cifra_local23_pri % 1);

      if(c_p === 0 ) {

          this.db.save_cifra_ppri(variables)
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
