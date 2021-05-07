import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { ModalController } from 'ionic-angular';
import { ModalReportarFuncionario } from '../modal-reportar-funcionario/modal-reportar-funcionario';
import { ModalListadoNominal } from '../modal-listado-nominal/modal-listado-nominal';
import { DbProvider } from '../../providers/db/db';
import { Camera, CameraOptions } from '@ionic-native/camera';


import { ModalFrente } from '../modal-frente/modal-frente';
import { ModalHumanista } from '../modal-humanista/modal-humanista';
import { ModalJhh } from '../modal-jhh/modal-jhh';
import { ModalMc } from '../modal-mc/modal-mc';
import { ModalMorena } from '../modal-morena/modal-morena';
import { ModalNAlianza } from '../modal-n-alianza/modal-n-alianza';
import { ModalPan } from '../modal-pan/modal-pan';
import { ModalPes } from '../modal-pes/modal-pes';
import { ModalPrd } from '../modal-prd/modal-prd';
import { ModalPri } from '../modal-pri/modal-pri';
import { ModalPt } from '../modal-pt/modal-pt';
import { ModalTodosMexico } from '../modal-todos-mexico/modal-todos-mexico';
import { ModalVerde } from '../modal-verde/modal-verde';

/**
 * Generated class for the RegistroCasilla page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro-casilla',
  templateUrl: 'registro-casilla.html',
})
export class RegistroCasilla {

loading:any;

coords : any = { lat: null, lng: null }

status: any = 1;
id_registro:any;
seccion_casilla:any;

id_votacion_casilla:any;


nombre_repre1:any;
nombre_repre2:any;
apellidos_repre1:any;
apellidos_repre2:any;
telefono_repre1:any;
telefono_repre2:any;


apertura:any;
hora_apertura:any;
flujo10:any;
flujo12:any;
flujo14:any;
flujo16:any;
flujo18:any;

foto_incidente: any = '';
foto_incidente2: any = '';
foto_incidente3: any = '';
comentario1: any;
comentario2: any;
comentario3: any;


foto_presidente: any = '';
foto_jefe: any = '';
foto_senadores: any = '';
foto_diputados_f: any = '';
foto_diputados_l: any = '';
foto_alcaldias: any = '';
foto_sabana1:any='';
foto_sabana2:any='';
acta_jornada_notarial:any='';

hora_cierre:any;



//cifra prd
cifra_pre_prd:any;
cifra_jefe_prd:any;
cifra_sena_prd:any;
cifra_di_f_prd:any;
cifra_di_l_prd:any;
cifra_alc_prd:any;


//cifra pan
cifra_pre_pan:any;
cifra_jefe_pan:any;
cifra_sena_pan:any;
cifra_di_f_pan:any;
cifra_di_l_pan:any;
cifra_alc_pan:any;

//cifra mc
cifra_pre_mc:any;
cifra_jefe_mc:any;
cifra_sena_mc:any;
cifra_di_f_mc:any;
cifra_di_l_mc:any;
cifra_alc_mc:any;

//cifra frente
cifra_pre:any;
cifra_jefe:any;
cifra_sena:any;
cifra_di_f:any;
cifra_di_l:any;
cifra_alc:any;

//cifra morena
cifra_pre_morena:any;
cifra_jefe_morena:any;
cifra_sena_morena:any;
cifra_di_f_morena:any;
cifra_di_l_morena:any;
cifra_alc_morena:any;

//cifra pt
cifra_pre_pt:any;
cifra_jefe_pt:any;
cifra_sena_pt:any;
cifra_di_f_pt:any;
cifra_di_l_pt:any;
cifra_alc_pt:any;


//cifra pes
cifra_pre_pes:any;
cifra_jefe_pes:any;
cifra_sena_pes:any;
cifra_di_f_pes:any;
cifra_di_l_pes:any;
cifra_alc_pes:any;


//cifra jhh
cifra_pre_jhh:any;
cifra_jefe_jhh:any;
cifra_sena_jhh:any;
cifra_di_f_jhh:any;
cifra_di_l_jhh:any;
cifra_alc_jhh:any;


//cifra pri
cifra_pre_pri:any;
cifra_jefe_pri:any;
cifra_sena_pri:any;
cifra_di_f_pri:any;
cifra_di_l_pri:any;
cifra_alc_pri:any;

//cifra verde
cifra_pre_verde:any;
cifra_jefe_verde:any;
cifra_sena_verde:any;
cifra_di_f_verde:any;
cifra_di_l_verde:any;
cifra_alc_verde:any;

//cifra alianza
cifra_pre_alianza:any;
cifra_jefe_alianza:any;
cifra_sena_alianza:any;
cifra_di_f_alianza:any;
cifra_di_l_alianza:any;
cifra_alc_alianza:any;

//cifra humanista
cifra_pre_humanista:any;
cifra_jefe_humanista:any;
cifra_sena_humanista:any;
cifra_di_f_humanista:any;
cifra_di_l_humanista:any;
cifra_alc_humanista:any;


//cifra t_mexico
cifra_pre_t_mexico:any;
cifra_jefe_t_mexico:any;
cifra_sena_t_mexico:any;
cifra_di_f_t_mexico:any;
cifra_di_l_t_mexico:any;
cifra_alc_t_mexico:any;

foto_escrito1:any;
foto_escrito2:any;
foto_escrito3:any;




color1:any;
color2:any;
color3:any;
color4:any;
color5:any;
color6:any;
color7:any;
color8:any;

colorPRD:any;
colorPAN:any;
colorMC:any;
colorFRENTE:any;
colorMORENA:any;
colorPT:any;
colorPES:any;
colorJHH:any;
colorPRI:any;
colorVERDE:any;
colorALIANZA:any;
colorHUMANISTA:any;
colorTMEXICO:any;



switch_apertura_casilla: boolean = false;
switch_funcionario_casilla: boolean = false;
public anArray:any=[];
switch_representantes_casilla: boolean = false;
estan_representantes:any;
switch_paquetes_casilla: boolean = false;
estan_paquetes:any;


public representantes:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private db: DbProvider,private camera: Camera,public loadingCtrl: LoadingController,private statusBar: StatusBar,private geolocation: Geolocation,public modalCtrl: ModalController) {


   this.statusBar.backgroundColorByHexString('#99C7FF');

  this.loading = this.loadingCtrl.create({
                 content: 'Cargando...'
               });

   this.loading.present();

   this.id_registro =  this.navParams.get('id');
   this.seccion_casilla =  this.navParams.get('seccion');

   this.detalle_casilla(this.id_registro);


  }

  Add(){
   this.anArray.push({'nombre':'','ape_pat':'','ape_mat':''});
   }



  detalle_casilla(id_casilla){

  this.db.casillas_detalle(id_casilla)
   .map(res => res.json())
                  .subscribe(res => {

                   this.loading.dismiss();

                //estado modulo
                this.color1=res.data.save_funcionario;
                this.color2=res.data.save_apertura;
                this.color3=res.data.save_flujo;
                this.color4=res.data.save_incidente;
                this.color5=res.data.save_cierre;
                this.color6=res.data.save_actas;
                this.color8=res.data.save_escrito;
                
                this.colorPRD=res.data.save_cifras_prd;
                this.colorPAN=res.data.save_cifras_pan;
                this.colorMC=res.data.save_cifras_mc;
                this.colorFRENTE=res.data.save_cifras_frente;
                this.colorMORENA=res.data.save_cifras_morena;
                this.colorPT=res.data.save_cifras_pt;
                this.colorPES=res.data.save_cifras_pes;
                this.colorJHH=res.data.save_cifras_coalicion_jhh;
                this.colorPRI=res.data.save_cifras_pri;
                this.colorVERDE=res.data.save_cifras_verde;
                this.colorALIANZA=res.data.save_cifras_nueva_alianza;
                this.colorHUMANISTA=res.data.save_cifras_humanista;
                this.colorTMEXICO=res.data.save_cifras_coalicion_todos_mexico;

                //total partidos color
                if(this.colorPRD==1&&this.colorPAN==1&&this.colorMC==1&&this.colorFRENTE==1&&this.colorMORENA==1&&this.colorPT==1&&this.colorPES==1&&this.colorJHH==1&&this.colorPRI==1&&this.colorVERDE==1&&this.colorALIANZA==1&&this.colorHUMANISTA==1&&this.colorTMEXICO==1){
                this.color7=1;
                }


                //representantes
                this.nombre_repre1=res.data.nombre_representante1;
                this.nombre_repre2=res.data.nombre_representante2;
                this.apellidos_repre1=res.data.apellidos_reprecentante1;
                this.apellidos_repre2=res.data.apellidos_reprecentante2;
                this.telefono_repre1=res.data.tel_reprecentante1;
                this.telefono_repre2=res.data.tel_reprecentante2;
                
                //get funcionarios 
                this.getFuncionarios(res.data.id_casilla);

                //condicion aperturo casilla
                this.apertura=res.data.aperturo_casilla;
                if(this.apertura=="Si"){
                this.switch_apertura_casilla=true;
                }else{
                this.switch_apertura_casilla=false;
                }

                //condicion representante
                this.estan_representantes=res.data.estan_representantes;
                if(this.estan_representantes=="SI"){
                this.switch_representantes_casilla=true;
                }else{
                this.switch_representantes_casilla=false;
                }

                //condicion paquetes
                this.estan_paquetes=res.data.estan_paquetes;
                if(this.estan_paquetes=="SI"){
                this.switch_paquetes_casilla=true;
                }else{
                this.switch_paquetes_casilla=false;
                }

                //flujo
                this.hora_apertura= res.data.hora_apertura_casilla;
                this.flujo10= res.data.flujo_10;
                this.flujo12= res.data.flujo_12;
                this.flujo14= res.data.flujo_14;
                this.flujo16= res.data.flujo_16;
                this.flujo18= res.data.flujo_18;
                
                //incidencia
                this.foto_incidente= res.data.foto_incidente;
                this.foto_incidente2= res.data.foto_incidente2;
                this.foto_incidente3= res.data.foto_incidente3;
                this.comentario1= res.data.comentario1_ins;
                this.comentario2= res.data.comentario2_ins;
                this.comentario3= res.data.comentario3_ins;
       
                //fotos actas
                this.foto_presidente= res.data.acta_presidente_foto;
                this.foto_jefe= res.data.acta_jefe_foto;
                this.foto_senadores= res.data.acta_senadores_foto;
                this.foto_diputados_f= res.data.acta_diputado_f_foto;
                this.foto_diputados_l= res.data.acta_diputado_l_foto;
                this.foto_alcaldias= res.data.acta_alcaldia_foto;
                this.foto_sabana1=res.data.sabana_result1;
                this.foto_sabana2=res.data.sabana_result2;
                this.acta_jornada_notarial=res.data.acta_jornada_notarial;

                this.hora_cierre= res.data.hora_cierre_casilla;

                //cifras
                //cifra prd
                this.cifra_pre_prd=res.data.cifra_prd_presidente;
                this.cifra_jefe_prd=res.data.cifra_prd_jefe;
                this.cifra_sena_prd=res.data.cifra_prd_senador;
                this.cifra_di_f_prd=res.data.cifra_prd_diputado_f;
                this.cifra_di_l_prd=res.data.cifra_prd_diputado_l;
                this.cifra_alc_prd=res.data.cifra_prd_alcaldia;


                //cifra pan
                this.cifra_pre_pan=res.data.cifra_prd_presidente;
                this.cifra_jefe_pan=res.data.cifra_pan_jefe;
                this.cifra_sena_pan=res.data.cifra_pan_senador;
                this.cifra_di_f_pan=res.data.cifra_pan_diputado_f;
                this.cifra_di_l_pan=res.data.cifra_pan_diputado_l;
                this.cifra_alc_pan=res.data.cifra_pan_alcaldia;

                //cifra mc
                this.cifra_pre_mc=res.data.cifra_mc_presidente;
                this.cifra_jefe_mc=res.data.cifra_mc_jefe;
                this.cifra_sena_mc=res.data.cifra_mc_senador;
                this.cifra_di_f_mc=res.data.cifra_mc_diputado_f;
                this.cifra_di_l_mc=res.data.cifra_mc_diputado_l;
                this.cifra_alc_mc=res.data.cifra_mc_alcaldia;

                //frente
                this.cifra_pre= res.data.cifra_frente_presidente;
                this.cifra_jefe= res.data.cifra_frente_jefe;
                this.cifra_sena= res.data.cifra_frente_senador;
                this.cifra_di_f= res.data.cifra_frente_diputado_f;
                this.cifra_di_l= res.data.cifra_frente_diputado_l;
                this.cifra_alc= res.data.cifra_frente_alcaldia;


                //morena
                this.cifra_pre_morena= res.data.cifra_morena_presidente;
                this.cifra_jefe_morena= res.data.cifra_morena_jefe;
                this.cifra_sena_morena= res.data.cifra_morena_senador;
                this.cifra_di_f_morena= res.data.cifra_morena_diputado_f;
                this.cifra_di_l_morena= res.data.cifra_morena_diputado_l;
                this.cifra_alc_morena= res.data.cifra_morena_alcaldia;


                //cifra pt
                this.cifra_pre_pt=res.data.cifra_pt_presidente;
                this.cifra_jefe_pt=res.data.cifra_pt_jefe;
                this.cifra_sena_pt=res.data.cifra_pt_senador;
                this.cifra_di_f_pt=res.data.cifra_pt_diputado_f;
                this.cifra_di_l_pt=res.data.cifra_pt_diputado_l;
                this.cifra_alc_pt=res.data.cifra_pt_alcaldia;


                //cifra pes
                this.cifra_pre_pes=res.data.cifra_pes_presidente;
                this.cifra_jefe_pes=res.data.cifra_pes_jefe;
                this.cifra_sena_pes=res.data.cifra_pes_senador;
                this.cifra_di_f_pes=res.data.cifra_pes_diputado_f;
                this.cifra_di_l_pes=res.data.cifra_pes_diputado_l;
                this.cifra_alc_pes=res.data.cifra_pes_alcaldia;


                //cifra jhh
                this.cifra_pre_jhh=res.data.cifra_jhh_presidente;
                this.cifra_jefe_jhh=res.data.cifra_jhh_jefe;
                this.cifra_sena_jhh=res.data.cifra_jhh_senador;
                this.cifra_di_f_jhh=res.data.cifra_jhh_diputado_f;
                this.cifra_di_l_jhh=res.data.cifra_jhh_diputado_l;
                this.cifra_alc_jhh=res.data.cifra_jhh_alcaldia;

                //cifra pri
                this.cifra_pre_pri= res.data.cifra_pri_presidente;
                this.cifra_jefe_pri= res.data.cifra_pri_jefe;
                this.cifra_sena_pri= res.data.cifra_pri_senador;
                this.cifra_di_f_pri= res.data.cifra_pri_diputado_f;
                this.cifra_di_l_pri= res.data.cifra_pri_diputado_l;
                this.cifra_alc_pri= res.data.cifra_pri_alcaldia;

                //cifra verde
                this.cifra_pre_verde= res.data.cifra_verde_presidente;
                this.cifra_jefe_verde= res.data.cifra_verde_jefe;
                this.cifra_sena_verde= res.data.cifra_verde_senador;
                this.cifra_di_f_verde= res.data.cifra_verde_diputado_f;
                this.cifra_di_l_verde= res.data.cifra_verde_diputado_l;
                this.cifra_alc_verde= res.data.cifra_verde_alcaldia;

                //cifra alianza
                this.cifra_pre_alianza= res.data.cifra_nalianza_presidente;
                this.cifra_jefe_alianza= res.data.cifra_nalianza_jefe;
                this.cifra_sena_alianza= res.data.cifra_nalianza_senador;
                this.cifra_di_f_alianza= res.data.cifra_nalianza_diputado_f;
                this.cifra_di_l_alianza= res.data.cifra_nalianza_diputado_l;
                this.cifra_alc_alianza= res.data.cifra_nalianza_alcaldia;

                //cifra humanista
                this.cifra_pre_humanista=res.data.cifra_humanista_presidente;
                this.cifra_jefe_humanista=res.data.cifra_humanista_jefe;
                this.cifra_sena_humanista=res.data.cifra_humanista_senador;
                this.cifra_di_f_humanista=res.data.cifra_humanista_diputado_f;
                this.cifra_di_l_humanista=res.data.cifra_humanista_diputado_l;
                this.cifra_alc_humanista=res.data.cifra_humanista_alcaldia;

                
                //cifra t_mexico
                this.cifra_pre_t_mexico=res.data.cifra_todos_m_presidente;
                this.cifra_jefe_t_mexico=res.data.cifra_todos_m_jefe;
                this.cifra_sena_t_mexico=res.data.cifra_todos_m_senador;
                this.cifra_di_f_t_mexico=res.data.cifra_todos_m_diputado_f;
                this.cifra_di_l_t_mexico=res.data.cifra_todos_m_diputado_l;
                this.cifra_alc_t_mexico=res.data.cifra_todos_m_alcaldia;

                this.foto_escrito1=res.data.escrito1;
                this.foto_escrito2=res.data.escrito2;
                this.foto_escrito3=res.data.escrito3;

                 
                   }, error => {

                   this.loading.dismiss(); 

                     alert(error);
                  });




  }


  getFuncionarios(id){



  this.db.get_funcionarios(id)
   .map(res => res.json())
                  .subscribe(res => {

                 for (var i = 0; i < res.data.length; i++) { 
                     //alert(res.data[i].id);

                     this.anArray.push({'nombre':res.data[i].nombre,'ape_pat':res.data[i].ape_pat,'ape_mat':res.data[i].ape_mat});


                 }


                 //this.anArray.push({'nombre':'','ape_pat':'','ape_mat':''});

                   }, error => {
                     alert(error);
                  });

  }







  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroCasilla');
  }


    sacarFoto_incidente(){

       let cameraOptions : CameraOptions = {
           quality: 50,
           encodingType: this.camera.EncodingType.JPEG,
           targetWidth: 800,
           targetHeight: 600,
           destinationType: this.camera.DestinationType.DATA_URL,
           sourceType: this.camera.PictureSourceType.CAMERA,
           correctOrientation: true
       }


       this.camera.getPicture(cameraOptions).then((imageData) => {
         // imageData is a base64 encoded string
           this.foto_incidente = "data:image/jpeg;base64," + imageData;
       }, (err) => {
           console.log(err);
       });
     }


     sacarFoto_incidente2(){

        let cameraOptions : CameraOptions = {
            quality: 50,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 800,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        }


        this.camera.getPicture(cameraOptions).then((imageData) => {
          // imageData is a base64 encoded string
            this.foto_incidente2 = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
        });
      }


      sacarFoto_incidente3(){

         let cameraOptions : CameraOptions = {
             quality: 50,
             encodingType: this.camera.EncodingType.JPEG,
             targetWidth: 800,
             targetHeight: 600,
             destinationType: this.camera.DestinationType.DATA_URL,
             sourceType: this.camera.PictureSourceType.CAMERA,
             correctOrientation: true
         }


         this.camera.getPicture(cameraOptions).then((imageData) => {
           // imageData is a base64 encoded string
             this.foto_incidente3 = "data:image/jpeg;base64," + imageData;
         }, (err) => {
             console.log(err);
         });
       }


       sacarFoto_presidente(){

       let cameraOptions : CameraOptions = {
           quality: 50,
           encodingType: this.camera.EncodingType.JPEG,
           targetWidth: 800,
           targetHeight: 600,
           destinationType: this.camera.DestinationType.DATA_URL,
           sourceType: this.camera.PictureSourceType.CAMERA,
           correctOrientation: true
       }


       this.camera.getPicture(cameraOptions).then((imageData) => {
         // imageData is a base64 encoded string
           this.foto_presidente = "data:image/jpeg;base64," + imageData;
       }, (err) => {
           console.log(err);
       });
     }


       sacarFoto_jefe(){

       let cameraOptions : CameraOptions = {
           quality: 50,
           encodingType: this.camera.EncodingType.JPEG,
           targetWidth: 800,
           targetHeight: 600,
           destinationType: this.camera.DestinationType.DATA_URL,
           sourceType: this.camera.PictureSourceType.CAMERA,
           correctOrientation: true
       }


       this.camera.getPicture(cameraOptions).then((imageData) => {
         // imageData is a base64 encoded string
           this.foto_jefe = "data:image/jpeg;base64," + imageData;
       }, (err) => {
           console.log(err);
       });
     }


      sacarFoto_senadores(){

       let cameraOptions : CameraOptions = {
           quality: 50,
           encodingType: this.camera.EncodingType.JPEG,
           targetWidth: 800,
           targetHeight: 600,
           destinationType: this.camera.DestinationType.DATA_URL,
           sourceType: this.camera.PictureSourceType.CAMERA,
           correctOrientation: true
       }


       this.camera.getPicture(cameraOptions).then((imageData) => {
         // imageData is a base64 encoded string
           this.foto_senadores = "data:image/jpeg;base64," + imageData;
       }, (err) => {
           console.log(err);
       });
     }


  sacarFoto_diputados_f(){

       let cameraOptions : CameraOptions = {
           quality: 50,
           encodingType: this.camera.EncodingType.JPEG,
           targetWidth: 800,
           targetHeight: 600,
           destinationType: this.camera.DestinationType.DATA_URL,
           sourceType: this.camera.PictureSourceType.CAMERA,
           correctOrientation: true
       }


       this.camera.getPicture(cameraOptions).then((imageData) => {
         // imageData is a base64 encoded string
           this.foto_diputados_f = "data:image/jpeg;base64," + imageData;
       }, (err) => {
           console.log(err);
       });
     }



     sacarFoto_diputados_l(){

          let cameraOptions : CameraOptions = {
              quality: 50,
              encodingType: this.camera.EncodingType.JPEG,
              targetWidth: 800,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.CAMERA,
              correctOrientation: true
          }


          this.camera.getPicture(cameraOptions).then((imageData) => {
            // imageData is a base64 encoded string
              this.foto_diputados_l = "data:image/jpeg;base64," + imageData;
          }, (err) => {
              console.log(err);
          });
        }


        sacarFoto_alcaldias(){

             let cameraOptions : CameraOptions = {
                 quality: 50,
                 encodingType: this.camera.EncodingType.JPEG,
                 targetWidth: 800,
                 targetHeight: 600,
                 destinationType: this.camera.DestinationType.DATA_URL,
                 sourceType: this.camera.PictureSourceType.CAMERA,
                 correctOrientation: true
             }


             this.camera.getPicture(cameraOptions).then((imageData) => {
               // imageData is a base64 encoded string
                 this.foto_alcaldias = "data:image/jpeg;base64," + imageData;
             }, (err) => {
                 console.log(err);
             });
           }


           sacarFoto_sabana1(){

                let cameraOptions : CameraOptions = {
                    quality: 50,
                    encodingType: this.camera.EncodingType.JPEG,
                    targetWidth: 800,
                    targetHeight: 600,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    sourceType: this.camera.PictureSourceType.CAMERA,
                    correctOrientation: true
                }


                this.camera.getPicture(cameraOptions).then((imageData) => {
                  // imageData is a base64 encoded string
                    this.foto_sabana1 = "data:image/jpeg;base64," + imageData;
                }, (err) => {
                    console.log(err);
                });
              }


              sacarFoto_sabana2(){

                   let cameraOptions : CameraOptions = {
                       quality: 50,
                       encodingType: this.camera.EncodingType.JPEG,
                       targetWidth: 800,
                       targetHeight: 600,
                       destinationType: this.camera.DestinationType.DATA_URL,
                       sourceType: this.camera.PictureSourceType.CAMERA,
                       correctOrientation: true
                   }


                   this.camera.getPicture(cameraOptions).then((imageData) => {
                     // imageData is a base64 encoded string
                       this.foto_sabana2 = "data:image/jpeg;base64," + imageData;
                   }, (err) => {
                       console.log(err);
                   });
                 }





                 sacarFoto_jornada(){

                      let cameraOptions : CameraOptions = {
                          quality: 50,
                          encodingType: this.camera.EncodingType.JPEG,
                          targetWidth: 800,
                          targetHeight: 600,
                          destinationType: this.camera.DestinationType.DATA_URL,
                          sourceType: this.camera.PictureSourceType.CAMERA,
                          correctOrientation: true
                      }


                      this.camera.getPicture(cameraOptions).then((imageData) => {
                        // imageData is a base64 encoded string
                          this.acta_jornada_notarial = "data:image/jpeg;base64," + imageData;
                      }, (err) => {
                          console.log(err);
                      });
                    }




                 





guardar_funcionario(){

    let variables = {

      nombre_repre1:this.nombre_repre1,
      nombre_repre2:this.nombre_repre2,
      apellidos_repre1:this.apellidos_repre1,
      apellidos_repre2:this.apellidos_repre2,
      telefono_repre1:this.telefono_repre1,
      telefono_repre2:this.telefono_repre2,

      funcionarios:this.anArray,
      id_votacion_casilla:this.id_votacion_casilla,
      id_registro:this.id_registro

    };
      this.db.save_funcionarios(variables)
       .map(res => res.json())
                      .subscribe(res => {

                    alert(res.data);
                     
                       }, error => {
                         alert(error);
                      });

  //alert(JSON.stringify(this.representantes));
}







guardar_hora_aper(){



    if(this.switch_apertura_casilla==true){
    this.apertura="Si";
    }else{
    this.apertura="NO";
    }

    if(this.switch_representantes_casilla==true){
    this.estan_representantes="SI";
    }else{
    this.estan_representantes="NO";
    }


    if(this.switch_paquetes_casilla==true){
    this.estan_paquetes="SI";
    }else{
    this.estan_paquetes="NO";
    }


let variables = {
  apertura:this.apertura,
  hora_i:this.hora_apertura,
  es_representantes:this.estan_representantes,
  es_paquetes:this.estan_paquetes,
  id_registro:this.id_registro

};
  this.db.save_apertura(variables)
   .map(res => res.json())
                  .subscribe(res => {

                alert(res.data);
                 
                   }, error => {
                     alert(error);
                  });
  }


guardar_flujo(){


let variables = {
flujo10:this.flujo10,
flujo12:this.flujo12,
flujo14:this.flujo14,
flujo16:this.flujo16,
flujo18:this.flujo18,
id_registro: this.id_registro,
};



var f10 = (this.flujo10 % 1);
var f12 = (this.flujo12 % 1);
var f14 = (this.flujo14 % 1);
var f16 = (this.flujo16 % 1);
var f18 = (this.flujo18 % 1);

    if(f10 === 0 && f12 === 0 && f14 === 0 && f16 === 0 && f18 === 0 ) {
        

      
     this.db.save_flujo(variables)
      .map(res => res.json())
                     .subscribe(res => {

                   alert(res.data);
                    
                      }, error => {
                        alert(error);
                     });


    }else{

       alert("No se puede guardar.Los flujos deben ser enteros");

    }








  }






  guardar_incidente(){

let variables = {
  foto_incidente:this.foto_incidente,
  foto_incidente2:this.foto_incidente2,
  foto_incidente3:this.foto_incidente3,
  comentario1:this.comentario1,
  comentario2:this.comentario2,
  comentario3:this.comentario3,
  id_registro:this.id_registro
  };


  this.db.save_incidente(variables)
   .map(res => res.json())
                  .subscribe(res => {

                alert(res.data);
                 
                   }, error => {
                     alert(error);
                  });

  }


  guardar_cierre(){

let variables = {
  h_cierre:this.hora_cierre,
  id_registro:this.id_registro

  };


  this.db.save_cierre(variables)
   .map(res => res.json())
                  .subscribe(res => {

                alert(res.data);
                 
                   }, error => {
                     alert(error);
                  });


  }


  guardar_actas(){


  let variables = {

  foto_pre:this.foto_presidente,
  foto_jefe:this.foto_jefe,
  foto_sena:this.foto_senadores,
  foto_d_f:this.foto_diputados_f,
  foto_d_l:this.foto_diputados_l,
  foto_a:this.foto_alcaldias,
  foto_sabana1:this.foto_sabana1,
  foto_sabana2:this.foto_sabana2,
  acta_jornada_notarial:this.acta_jornada_notarial,
  id_registro:this.id_registro

  };



  this.db.save_actas(variables)
   .map(res => res.json())
                  .subscribe(res => {

                alert(res.data);
                 
                   }, error => {
                     alert(error);
                  });

  }



  guardar_cifras_morena(){


  let variables = {
  
  cifra_pre_morena:this.cifra_pre_morena,
  cifra_jefe_morena:this.cifra_jefe_morena,
  cifra_sena_morena:this.cifra_sena_morena,
  cifra_df_morena:this.cifra_di_f_morena,
  cifra_dl_morena:this.cifra_di_l_morena,
  cifra_alc_morena:this.cifra_alc_morena,
  id_registro:this.id_registro

  };



  var c_p_m = (this.cifra_pre_morena % 1);
  var c_jg_m = (this.cifra_jefe_morena % 1);
  var c_s_m = (this.cifra_sena_morena % 1);
  var c_df_m = (this.cifra_di_f_morena % 1);
  var c_dl_m = (this.cifra_di_l_morena % 1);
  var c_a_m = (this.cifra_alc_morena % 1);

      if(c_p_m === 0 && c_jg_m === 0 &&c_s_m === 0 && c_df_m === 0 && c_dl_m === 0 && c_a_m === 0) {
          

          this.db.save_cifra_morena(variables)
           .map(res => res.json())
                          .subscribe(res => {

                        alert(res.data);
                         
                           }, error => {
                             alert(error);
                          });


      }else{

         alert("No se puede guardar.Las cifras deben ser enteros");

      }






  }


  guardar_cifras_pri(){


let variables = {
  cifra_pre_pri:this.cifra_pre_pri,
  cifra_j_pri:this.cifra_jefe_pri,
  cifra_sena_pri:this.cifra_sena_pri,
  cifra_df_pri:this.cifra_di_f_pri,
  cifra_dl_pri:this.cifra_di_l_pri,
  cifra_alc_pri:this.cifra_alc_pri,
  id_registro:this.id_registro
};


var c_p_p = (this.cifra_pre_pri % 1);
var c_jg_p = (this.cifra_jefe_pri % 1);
var c_s_p = (this.cifra_sena_pri % 1);
var c_df_p = (this.cifra_di_f_pri % 1);
var c_dl_p = (this.cifra_di_l_pri % 1);
var c_a_p = (this.cifra_alc_pri % 1);

    if(c_p_p === 0 && c_jg_p === 0 &&c_s_p === 0 && c_df_p === 0 && c_dl_p === 0 && c_a_p === 0) {
        

      
      this.db.save_cifra_pri(variables)
       .map(res => res.json())
                      .subscribe(res => {

                    alert(res.data);
                     
                       }, error => {
                         alert(error);
                      });


    }else{

       alert("No se puede guardar.Las cifras deben ser enteros");

    }







  }


  obtenerPosicion():any{


  this.loading = this.loadingCtrl.create({
                 content: 'Cargando...'
               });



   this.loading.present();



    this.geolocation.getCurrentPosition({timeout:9000,enableHighAccuracy: false}).then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;


       this.loading.dismiss();

      //alert(this.coords.lat+" "+this.coords.lng);


      let variables = {
      lat:this.coords.lat,
      lng:this.coords.lng,
      id_registro: this.id_registro,
      };


      this.db.save_ubicacion(variables)
       .map(res => res.json())
                      .subscribe(res => {

                    alert(res.data);
                     
                       }, error => {
                         alert(error);
                      });



    })
    .catch(
      (err : PositionError )=>{

       this.loading.dismiss();

         alert("Error al obtener la ubicación, revise su configuración");

         


      }
    );
  }


  removeItem(item){
   
      for(var i = 0; i < this.anArray.length; i++) {
   
        if(this.anArray[i] == item){
          this.anArray.splice(i, 1);
        }
   
      }
   
    }



      removeItem2(item){
    
      for(var i = 0; i < this.representantes.length; i++) {
    
        if(this.representantes[i] == item){
          this.representantes.splice(i, 1);
        }
    
      }
    
    }


  reportar_representante() {

    let data_param = { id_registro:this.id_registro};

    let contactModal = this.modalCtrl.create(ModalReportarFuncionario,data_param);
    contactModal.present();


    

    }


    buscar_listado_nominal() {

    let data_param = { id_registro:this.id_registro, seccion:this.seccion_casilla};

    let contactModal = this.modalCtrl.create(ModalListadoNominal,data_param);
    contactModal.present();


    

    }



     modal_prd() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_prd:this.cifra_pre_prd,
                         cifra_jefe_prd:this.cifra_jefe_prd,
                         cifra_sena_prd:this.cifra_sena_prd,
                         cifra_di_f_prd:this.cifra_di_f_prd,
                         cifra_di_l_prd:this.cifra_di_l_prd,
                         cifra_alc_prd:this.cifra_alc_prd

                         };


      let contactModal = this.modalCtrl.create(ModalPrd,data_param);
      contactModal.present();

      }

      modal_pan() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_pan:this.cifra_pre_pan,
                         cifra_jefe_pan:this.cifra_jefe_pan,
                         cifra_sena_pan:this.cifra_sena_pan,
                         cifra_di_f_pan:this.cifra_di_f_pan,
                         cifra_di_l_pan:this.cifra_di_l_pan,
                         cifra_alc_pan:this.cifra_alc_pan,
                         };
      let contactModal = this.modalCtrl.create(ModalPan,data_param);
      contactModal.present();

      }
      
      modal_mc() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_mc:this.cifra_pre_mc,
                         cifra_jefe_mc:this.cifra_jefe_mc,
                         cifra_sena_mc:this.cifra_sena_mc,
                         cifra_di_f_mc:this.cifra_di_f_mc,
                         cifra_di_l_mc:this.cifra_di_l_mc,
                         cifra_alc_mc:this.cifra_alc_mc
                       };
      let contactModal = this.modalCtrl.create(ModalMc,data_param);
      contactModal.present();
      }

      modal_frente() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre:this.cifra_pre,
                         cifra_jefe:this.cifra_jefe,
                         cifra_sena:this.cifra_sena,
                         cifra_di_f:this.cifra_di_f,
                         cifra_di_l:this.cifra_di_l,
                         cifra_alc:this.cifra_alc
                       };
      let contactModal = this.modalCtrl.create(ModalFrente,data_param);
      contactModal.present();
      }

      modal_morena() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_morena:this.cifra_pre_morena,
                         cifra_jefe_morena:this.cifra_jefe_morena,
                         cifra_sena_morena:this.cifra_sena_morena,
                         cifra_di_f_morena:this.cifra_di_f_morena,
                         cifra_di_l_morena:this.cifra_di_l_morena,
                         cifra_alc_morena:this.cifra_alc_morena
                       };
      let contactModal = this.modalCtrl.create(ModalMorena,data_param);
      contactModal.present();
      }

      modal_pt() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_pt:this.cifra_pre_pt,
                         cifra_jefe_pt:this.cifra_jefe_pt,
                         cifra_sena_pt:this.cifra_sena_pt,
                         cifra_di_f_pt:this.cifra_di_f_pt,
                         cifra_di_l_pt:this.cifra_di_l_pt,
                         cifra_alc_pt:this.cifra_alc_pt
                       };
      let contactModal = this.modalCtrl.create(ModalPt,data_param);
      contactModal.present();
      }

      modal_pes() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_pes:this.cifra_pre_pes,
                         cifra_jefe_pes:this.cifra_jefe_pes,
                         cifra_sena_pes:this.cifra_sena_pes,
                         cifra_di_f_pes:this.cifra_di_f_pes,
                         cifra_di_l_pes:this.cifra_di_l_pes,
                         cifra_alc_pes:this.cifra_alc_pes
                       };
      let contactModal = this.modalCtrl.create(ModalPes,data_param);
      contactModal.present();
      }

      modal_jhh() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_jhh:this.cifra_pre_jhh,
                         cifra_jefe_jhh:this.cifra_jefe_jhh,
                         cifra_sena_jhh:this.cifra_sena_jhh,
                         cifra_di_f_jhh:this.cifra_di_f_jhh,
                         cifra_di_l_jhh:this.cifra_di_l_jhh,
                         cifra_alc_jhh:this.cifra_alc_jhh
                       };
      let contactModal = this.modalCtrl.create(ModalJhh,data_param);
      contactModal.present();
      }

      modal_pri() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_pri:this.cifra_pre_pri,
                         cifra_jefe_pri:this.cifra_jefe_pri,
                         cifra_sena_pri:this.cifra_sena_pri,
                         cifra_di_f_pri:this.cifra_di_f_pri,
                         cifra_di_l_pri:this.cifra_di_l_pri,
                         cifra_alc_pri:this.cifra_alc_pri
                       };
      let contactModal = this.modalCtrl.create(ModalPri,data_param);
      contactModal.present();
      }


      modal_verde() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_verde:this.cifra_pre_verde,
                         cifra_jefe_verde:this.cifra_jefe_verde,
                         cifra_sena_verde:this.cifra_sena_verde,
                         cifra_di_f_verde:this.cifra_di_f_verde,
                         cifra_di_l_verde:this.cifra_di_l_verde,
                         cifra_alc_verde:this.cifra_alc_verde
                       };
      let contactModal = this.modalCtrl.create(ModalVerde,data_param);
      contactModal.present();
      }

      modal_nalianza() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_alianza:this.cifra_pre_alianza,
                         cifra_jefe_alianza:this.cifra_jefe_alianza,
                         cifra_sena_alianza:this.cifra_sena_alianza,
                         cifra_di_f_alianza:this.cifra_di_f_alianza,
                         cifra_di_l_alianza:this.cifra_di_l_alianza,
                         cifra_alc_alianza:this.cifra_alc_alianza
                       };
      let contactModal = this.modalCtrl.create(ModalNAlianza,data_param);
      contactModal.present();
      }


      modal_humanista() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_humanista:this.cifra_pre_humanista,
                         cifra_jefe_humanista:this.cifra_jefe_humanista,
                         cifra_sena_humanista:this.cifra_sena_humanista,
                         cifra_di_f_humanista:this.cifra_di_f_humanista,
                         cifra_di_l_humanista:this.cifra_di_l_humanista,
                         cifra_alc_humanista:this.cifra_alc_humanista,
                        };
      let contactModal = this.modalCtrl.create(ModalHumanista,data_param);
      contactModal.present();
      }

      modal_todos_mexico() {
      let data_param = { id_registro:this.id_registro,
                         cifra_pre_t_mexico:this.cifra_pre_t_mexico,
                         cifra_jefe_t_mexico:this.cifra_jefe_t_mexico,
                         cifra_sena_t_mexico:this.cifra_sena_t_mexico,
                         cifra_di_f_t_mexico:this.cifra_di_f_t_mexico,
                         cifra_di_l_t_mexico:this.cifra_di_l_t_mexico,
                         cifra_alc_t_mexico:this.cifra_alc_t_mexico,
                       };
      let contactModal = this.modalCtrl.create(ModalTodosMexico,data_param);
      contactModal.present();
      }


      sacarFoto_escrito1(){

         let cameraOptions : CameraOptions = {
             quality: 50,
             encodingType: this.camera.EncodingType.JPEG,
             targetWidth: 800,
             targetHeight: 600,
             destinationType: this.camera.DestinationType.DATA_URL,
             sourceType: this.camera.PictureSourceType.CAMERA,
             correctOrientation: true
         }


         this.camera.getPicture(cameraOptions).then((imageData) => {
           // imageData is a base64 encoded string
             this.foto_escrito1 = "data:image/jpeg;base64," + imageData;
         }, (err) => {
             console.log(err);
         });
       }


       sacarFoto_escrito2(){

          let cameraOptions : CameraOptions = {
              quality: 50,
              encodingType: this.camera.EncodingType.JPEG,
              targetWidth: 800,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: this.camera.PictureSourceType.CAMERA,
              correctOrientation: true
          }


          this.camera.getPicture(cameraOptions).then((imageData) => {
            // imageData is a base64 encoded string
              this.foto_escrito2 = "data:image/jpeg;base64," + imageData;
          }, (err) => {
              console.log(err);
          });
        }


        sacarFoto_escrito3(){

           let cameraOptions : CameraOptions = {
               quality: 50,
               encodingType: this.camera.EncodingType.JPEG,
               targetWidth: 800,
               targetHeight: 600,
               destinationType: this.camera.DestinationType.DATA_URL,
               sourceType: this.camera.PictureSourceType.CAMERA,
               correctOrientation: true
           }


           this.camera.getPicture(cameraOptions).then((imageData) => {
             // imageData is a base64 encoded string
               this.foto_escrito3 = "data:image/jpeg;base64," + imageData;
           }, (err) => {
               console.log(err);
           });
         }



        guardar_escritos(){

         let variables = {
           foto_escrito1:this.foto_escrito1,
           foto_escrito2:this.foto_escrito2,
           foto_escrito3:this.foto_escrito3,
           id_registro:this.id_registro
           };


           this.db.save_escrito(variables)
            .map(res => res.json())
                           .subscribe(res => {

                         alert(res.data);
                          
                            }, error => {
                              alert(error);
                           });

           }


           sabana2(){


           let cameraOptions : CameraOptions = {
               quality: 50,
               encodingType: this.camera.EncodingType.JPEG,
               targetWidth: 800,
               targetHeight: 600,
               destinationType: this.camera.DestinationType.DATA_URL,
               sourceType: this.camera.PictureSourceType.CAMERA,
               correctOrientation: true
           }


           this.camera.getPicture(cameraOptions).then((imageData) => {
             // imageData is a base64 encoded string
               this.foto_sabana2 = "data:image/jpeg;base64," + imageData;
           }, (err) => {
               console.log(err);
           });

           }









}
