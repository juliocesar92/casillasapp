import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalPMORENA page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-PMORENA',
  templateUrl: 'modal-PMORENA.html',
})
export class ModalPMORENA {

id_casilla:any;



cifra_fed06_morena:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');

   this.cifra_fed06_morena =  this.navParams.get('cifra_fed06_morena');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPMORENA');
  }


  guardar_cifras_morena(){


  let variables = {
    
    id_registro:this.id_casilla,
    cifra_fed06_morena:this.cifra_fed06_morena

    };



  var c_p = (this.cifra_fed06_morena % 1);

      if(c_p === 0) {

          this.db.save_cifra_pmorena(variables)
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
