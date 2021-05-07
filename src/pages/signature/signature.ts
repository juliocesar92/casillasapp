import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

import { SignaturePad } from 'angular2-signaturepad';


import { HomePage } from '../home/home';

/**
 * Generated class for the Signature page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class Signature {
@ViewChild(SignaturePad) public signaturePad : SignaturePad;


  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200
  };
  public signatureImage : string;
  data:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signature');
  }


   /* drawCancel() {
    this.navCtrl.push(HomePage);
  }*/


   /*drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    this.navCtrl.push(HomePage, {signatureImage: this.signatureImage});
  }*/
  


  drawCancel(){
  this.data={
				'foto_firma': null,
				};


  this.viewCtrl.dismiss(this.data);
  }


  drawComplete() {

  this.data = 
				{
				'foto_firma': this.signaturePad.toDataURL(),
				};

   this.viewCtrl.dismiss(this.data);

  }




  drawClear() {
    this.signaturePad.clear();
  }


  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }

ngAfterViewInit() {
      this.signaturePad.clear();
      this.canvasResize();
}






}
