import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPVE page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-PVE',
  templateUrl: 'modal-PVE.html',
})
export class ModalPVE {

id_casilla:any;

cifra_local20_pve:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_local20_pve =  this.navParams.get('cifra_local20_pve');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPVE');
  }


  guardar_cifras_pve(){


  let variables = {
    
    id_registro:this.id_casilla,
    cifra_local20_pve:this.cifra_local20_pve

    };



  var c_p = (this.cifra_local20_pve % 1);

      if(c_p === 0 ) {

          this.db.save_cifra_pve(variables)
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
