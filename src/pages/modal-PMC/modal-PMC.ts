import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPMC page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-PMC',
  templateUrl: 'modal-PMC.html',
})
export class ModalPMC {

id_casilla:any;



cifra_alcalde_mc:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_alcalde_mc =  this.navParams.get('cifra_alc_pmc');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPMC');
  }


  guardar_cifras_mc(){


  let variables = {
 
    id_registro:this.id_casilla,
    cifra_alcalde_mc:this.cifra_alcalde_mc

    };



  var c_p = (this.cifra_alcalde_mc % 1);

      if(c_p === 0) {

          this.db.save_cifra_pmc(variables)
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
