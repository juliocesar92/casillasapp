import { Component } from '@angular/core';
import { NavController, NavParams,MenuController,LoadingController} from 'ionic-angular';


import { Platform } from 'ionic-angular';


//Para cargar el proveder
import { DbProvider } from '../../providers/db/db';


//Para cargar el storage
import { Storage } from '@ionic/storage';











import { MenuTabs } from '../menu-tabs/menu-tabs';




/**
 * Generated class for the Login page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
loading:any;
user: string = '';
password: string = '';
permisos:any;


remember: any;
remember_estado:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public  platform: Platform,private db: DbProvider,public loadingCtrl: LoadingController,public menuCtrl: MenuController,private storage: Storage) {


  platform.ready().then(() => { 



    this.storage.get('remember_user').then((val) => {
                this.remember=val;
              });
     this.storage.get('remember_status').then((val) => {
                this.remember_estado=val;
              });



  });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  //ocultar menu en login
  ionViewWillEnter() {

       this.menuCtrl.swipeEnable( false )
   }
//ocultar menu en login
   ionViewDidLeave() {

       this.menuCtrl.swipeEnable( true )
   }


   entrar(){


   this.loading = this.loadingCtrl.create({
                  content: 'Cargando...'
                });



    this.loading.present();



  if(this.remember_estado==true){
  this.storage.set('remember_status', 'true');
  this.storage.set('remember_user', this.user);
  }else{
  this.storage.set('remember_status', 'false');
  this.storage.remove('remember_user');
  }


    let variables = {
      user: this.user,
      password: this.password
    }

    this.db.loginIn(variables)
    .map(res => res.json())
                     .subscribe(res => {


                     if(res.data==0){
                     
                     this.loading.dismiss();

                     alert('Usuario y/o Contraseña Incorrecto');
                     }else{





                     this.permisos=res.permisos;

                     window.localStorage['permisos_user_windows']=this.permisos;
                     window.localStorage['id_user_sesion']=res.data.id;

                     this.navCtrl.setRoot(MenuTabs);


                      this.loading.dismiss();

                    

                     }


                      }, error => {
                         this.loading.dismiss();
                        alert(error);
                       
                     });








    

  }

}
