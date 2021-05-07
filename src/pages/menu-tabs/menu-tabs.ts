import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



import { TabsPage } from '../tabs/tabs';



/**
 * Generated class for the MenuTabs page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu-tabs',
  templateUrl: 'menu-tabs.html',
})
export class MenuTabs {
 rootPage:any = TabsPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

 

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTabs');
  }

}
