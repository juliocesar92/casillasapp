import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';


import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the ModalReportarFuncionario page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-reportar-funcionario',
  templateUrl: 'modal-reportar-funcionario.html',
})
export class ModalReportarFuncionario {

data:any;

id_casilla:any;
nombre_reporte:any;
ape_pat_reporte:any;
ape_mat_reporte:any;
partido:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,private db: DbProvider) {


  this.id_casilla =  this.navParams.get('id_registro');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalReportarFuncionario');
  }



 dismiss() {


let variables = 
{
'id_casilla': this.id_casilla,
'nombre_repre':this.nombre_reporte,
'ape_pat_repre':this.ape_pat_reporte,
'ape_mat_repre':this.ape_mat_reporte,
'partido':this.partido,

};


this.db.save_reportar(variables)
 .map(res => res.json())
                .subscribe(res => {

              alert(res.data);
               
                 }, error => {
                   alert(error);
                });


this.viewCtrl.dismiss();


  }


}
