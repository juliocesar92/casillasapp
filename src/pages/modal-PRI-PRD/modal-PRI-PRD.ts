import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPRIPRD page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-PRI-PRD',
  templateUrl: 'modal-PRI-PRD.html',
})
export class ModalPRIPRD {

id_casilla:any;



cifra_local20_priprd:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_local20_priprd =  this.navParams.get('cifra_local20_priprd');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPRIPRD');
  }


  guardar_cifras_priprd(){


  let variables = {

    id_registro:this.id_casilla,
    cifra_local20_priprd:this.cifra_local20_priprd

    };



  var c_p = (this.cifra_local20_priprd % 1);

      if(c_p === 0 ) {

          this.db.save_cifra_priprd(variables)
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
