import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalCifras page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-cifras',
  templateUrl: 'modal-cifras.html',
})
export class ModalCifras {

id_casilla:any;

/////////////////////////////////////
//v1
cifra_puesto1:any;
cifra_puesto2:any;
cifra_puesto3:any;
cifra_puesto4:any;
cifra_puesto5:any;
cifra_puesto6:any;
cifra_puesto7:any;
partido:any;
/////////////////////////////////////////

cifra_partido1:any;
cifra_partido2:any;
cifra_partido3:any;
cifra_partido4:any;
cifra_partido5:any;
cifra_partido6:any;
cifra_partido7:any;
cifra_partido8:any;
cifra_partido9:any;
cifra_partido10:any;
cifra_partido11:any;
cifra_partido12:any;
cifra_partido13:any;

cifra_partido14:any;
cifra_partido15:any;
cifra_partido16:any;
cifra_partido17:any;
cifra_partido18:any;
cifra_partido19:any;
cifra_partido20:any;
cifra_partido21:any;

puesto:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private statusBar: StatusBar,private db: DbProvider,public viewCtrl: ViewController) {
  this.statusBar.backgroundColorByHexString('#99C7FF');

   this.id_casilla =  this.navParams.get('id_registro');
   this.puesto =  this.navParams.get('puesto');   

    this.cifra_partido1= this.navParams.get('cifra_partido1');
    this.cifra_partido2=this.navParams.get('cifra_partido2');
    this.cifra_partido3=this.navParams.get('cifra_partido3');
    this.cifra_partido4=this.navParams.get('cifra_partido4');
    this.cifra_partido5=this.navParams.get('cifra_partido5');
    this.cifra_partido6=this.navParams.get('cifra_partido6');
    this.cifra_partido7=this.navParams.get('cifra_partido7');
    this.cifra_partido8=this.navParams.get('cifra_partido8');
    this.cifra_partido9=this.navParams.get('cifra_partido9');
    this.cifra_partido10=this.navParams.get('cifra_partido10');
    this.cifra_partido11=this.navParams.get('cifra_partido11');
    this.cifra_partido12=this.navParams.get('cifra_partido12');
    this.cifra_partido13=this.navParams.get('cifra_partido13');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCifras');
  }


  guardar_cifras_partido(){




  let variables = {

    id_casilla:this.id_casilla,
    cifra_puesto1:this.cifra_puesto1,
    cifra_puesto2:this.cifra_puesto2,
    cifra_puesto3:this.cifra_puesto3,
    cifra_puesto4:this.cifra_puesto4,
    cifra_puesto5:this.cifra_puesto5,
    cifra_puesto6:this.cifra_puesto6,
    cifra_puesto7:this.cifra_puesto7,

    partido:this.partido

    };



  var c_p = (this.cifra_puesto1 % 1);
  var c_jg = (this.cifra_puesto2 % 1);
  var c_s = (this.cifra_puesto3 % 1);
  var c_df = (this.cifra_puesto4 % 1);
  var c_dl = (this.cifra_puesto5 % 1);
  var c_a = (this.cifra_puesto6 % 1);
  var c_al = (this.cifra_puesto7 % 1);

      if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0 && c_al === 0) {

          this.db.save_cifra_puestos(variables)
           .map(res => res.json())
                          .subscribe(res => {

                        alert(res.data);
                         
                           }, error => {
                             alert(error);
                          });


      }else{

         alert("Debes Capturar todas las cifras");

      }

      this.viewCtrl.dismiss();

  }



  guardar_cifras_partido_v2(){




  let variables = {

    id_casilla:this.id_casilla,
    cifra_partido1:this.cifra_partido1,
    cifra_partido2:this.cifra_partido2,
    cifra_partido3:this.cifra_partido3,
    cifra_partido4:this.cifra_partido4,
    cifra_partido5:this.cifra_partido5,
    cifra_partido6:this.cifra_partido6,
    cifra_partido7:this.cifra_partido7,
    cifra_partido8:this.cifra_partido8,
    cifra_partido9:this.cifra_partido9,
    cifra_partido10:this.cifra_partido10,
    cifra_partido11:this.cifra_partido11,
    cifra_partido12:this.cifra_partido12,
    cifra_partido13:this.cifra_partido13,

    cifra_partido14:this.cifra_partido14,
    cifra_partido15:this.cifra_partido15,
    cifra_partido16:this.cifra_partido16,
    cifra_partido17:this.cifra_partido17,
    cifra_partido18:this.cifra_partido18,
    cifra_partido19:this.cifra_partido19,
    cifra_partido20:this.cifra_partido20,
    cifra_partido21:this.cifra_partido21,
    puesto:this.puesto

    };


    var c_p = (this.cifra_partido1 % 1);
    var c_jg = (this.cifra_partido2 % 1);
    var c_s = (this.cifra_partido3 % 1);
    var c_df = (this.cifra_partido4 % 1);
    var c_dl = (this.cifra_partido5 % 1);
    var c_a = (this.cifra_partido6 % 1);
    var c_al = (this.cifra_partido7 % 1);

    var c_p8 = (this.cifra_partido8 % 1);
    var c_p9 = (this.cifra_partido9 % 1);
    var c_p10 = (this.cifra_partido10 % 1);
    var c_p11 = (this.cifra_partido11 % 1);
    var c_p12 = (this.cifra_partido12 % 1);
    var c_p13 = (this.cifra_partido13 % 1);

        if(c_p === 0 && c_jg === 0 &&c_s === 0 && c_df === 0 && c_dl === 0 && c_a === 0 && c_al === 0  && c_p8 === 0 && c_p9 === 0 && c_p10 === 0 && c_p11 === 0 && c_p12 === 0 && c_p13 === 0) {



          this.db.save_cifra_puestos_v2(variables)
           .map(res => res.json())
                          .subscribe(res => {

                        alert(res.data);
                         
                           }, error => {
                             alert(error);
                          });
                          

      }else{

         alert("Debes Capturar todas las cifras");

      }

      this.viewCtrl.dismiss();

  }

}
