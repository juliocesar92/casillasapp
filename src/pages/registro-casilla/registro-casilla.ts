import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,ActionSheetController } from 'ionic-angular';
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

//2021
import { ModalCifras } from '../modal-cifras/modal-cifras';
import { ModalALIANZAMEXICO } from '../modal-ALIANZA-MEXICO/modal-ALIANZA-MEXICO';
import { ModalCCJHH } from '../modal-CCJHH/modal-CCJHH';
import { ModalFUERZAMEXICO } from '../modal-FUERZA-MEXICO/modal-FUERZA-MEXICO';
import { ModalPMC } from '../modal-PMC/modal-PMC';
import { ModalPMORENA } from '../modal-PMORENA/modal-PMORENA';
import { ModalPPAN } from '../modal-PPAN/modal-PPAN';
import { ModalPPRD } from '../modal-PPRD/modal-PPRD';
import { ModalPPRI } from '../modal-PPRI/modal-PPRI';
import { ModalPPT } from '../modal-PPT/modal-PPT';
import { ModalPRIPRD } from '../modal-PRI-PRD/modal-PRI-PRD';
import { ModalPVE } from '../modal-PVE/modal-PVE';
import { ModalRSP } from '../modal-RSP/modal-RSP';




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

foto_alcalde_2021:any= '';
foto_local18_2021:any= '';
foto_local20_2021:any= '';
foto_local23_2021:any= '';
foto_fed06_2021:any= '';
foto_fed16_2021:any= '';
foto_fed17_2021:any= '';



foto_sabana1:any='';
foto_sabana2:any='';
foto_sabana3:any='';
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


colorCCJHH:any;
colorALMEXICO:any;
colorPMC:any;
colorPFM:any;
colorRSP:any;
colorPPRI:any;
colorPPRD:any;
colorPVE:any;
colorPPAN:any;
colorPMORENA:any;
colorPPT:any;
colorPRIPRD:any;


cifra_alc_ccjhh:any;
cifra_local18_ccjhh:any;
cifra_local20_ccjhh:any;
cifra_local23_ccjhh:any;
cifra_fed16_ccjhh:any;
cifra_fed17_ccjhh:any;

cifra_alc_almexico:any;
cifra_local18_almexico:any;
cifra_fed16_almexico:any;
cifra_fed17_almexico:any;

cifra_alc_pmc:any;

cifra_alc_pfm:any;
cifra_fed16_pfm:any;

cifra_alc_prsp:any;
cifra_fed17_prsp:any;

cifra_local20_priprd:any;

cifra_local20_pve:any;

cifra_local20_pan:any;

cifra_local23_prd:any;

cifra_local23_pri:any;

cifra_fed06_morena:any;

cifra_fed06_pt:any;



switch_apertura_casilla: boolean = false;
switch_funcionario_casilla: boolean = false;
public anArray:any=[];
switch_representantes_casilla: boolean = false;
estan_representantes:any;
switch_paquetes_casilla: boolean = false;
estan_paquetes:any;


public representantes:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private db: DbProvider,private camera: Camera,public loadingCtrl: LoadingController,private statusBar: StatusBar,private geolocation: Geolocation,public modalCtrl: ModalController,public actionSheetCtrl: ActionSheetController) {


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
                
             
                this.colorCCJHH=res.data.save_cifras_ccjhh;
                this.colorALMEXICO=res.data.save_cifras_almexico;
                this.colorPMC=res.data.save_cifras_pmc;
                this.colorPFM=res.data.save_cifras_pfm;
                this.colorRSP=res.data.save_cifras_rsp;
                this.colorPPRI=res.data.save_cifras_ppri;
                this.colorPPRD=res.data.save_cifras_pprd;
                this.colorPVE=res.data.save_cifras_pve;
                this.colorPPAN=res.data.save_cifras_ppan;
                this.colorPMORENA=res.data.save_cifras_pmorena;
                this.colorPPT=res.data.save_cifras_ppt;
                this.colorPRIPRD=res.data.save_cifras_priprd;

                //total partidos color
                if(this.colorJHH==1){
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
                this.foto_alcalde_2021=res.data.acta_alcalde_2021;
                this.foto_local18_2021=res.data.acta_local18;
                this.foto_local20_2021=res.data.acta_local20;
                this.foto_local23_2021=res.data.acta_local23;
                this.foto_fed06_2021=res.data.acta_fed06;
                this.foto_fed16_2021=res.data.acta_fed16;
                this.foto_fed17_2021=res.data.acta_fed17;

                this.foto_sabana1=res.data.sabana_result1;
                this.foto_sabana2=res.data.sabana_result2;
                this.foto_sabana3=res.data.sabana_result3;
                this.acta_jornada_notarial=res.data.acta_jornada_notarial;

                this.hora_cierre= res.data.hora_cierre_casilla;

              
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

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Subir foto',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Abrir camara',
          icon:  'camera',
          handler: () => {
          

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
        },
        {
          text: 'Abrir galeria',
          icon:  'image',
          handler: () => {
            //console.log('Archive clicked');
            

           let cameraOptions : CameraOptions = {
               quality: 50,
               encodingType: this.camera.EncodingType.JPEG,
               targetWidth: 800,
               targetHeight: 600,
               destinationType: this.camera.DestinationType.DATA_URL,
               sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
               correctOrientation: true,
               saveToPhotoAlbum:false
           }


           this.camera.getPicture(cameraOptions).then((imageData) => {
             // imageData is a base64 encoded string
               this.foto_incidente = "data:image/jpeg;base64," + imageData;
           }, (err) => {
               console.log(err);
           });


          }
        },
        {
          text:  'Cancelar',
          role: 'cancel',
          icon: 'close' ,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();


     }


     sacarFoto_incidente2(){

     let actionSheet = this.actionSheetCtrl.create({
       title: 'Subir foto',
       cssClass: 'action-sheets-basic-page',
       buttons: [
         {
           text: 'Abrir camara',
           icon:  'camera',
           handler: () => {
            //
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
         },
         {
           text: 'Abrir galeria',
           icon:  'image',
           handler: () => {
             //console.log('Archive clicked');
             let cameraOptions : CameraOptions = {
                 quality: 50,
                 encodingType: this.camera.EncodingType.JPEG,
                 targetWidth: 800,
                 targetHeight: 600,
                 destinationType: this.camera.DestinationType.DATA_URL,
                 sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                 correctOrientation: true,
                 saveToPhotoAlbum:false
             }


             this.camera.getPicture(cameraOptions).then((imageData) => {
               // imageData is a base64 encoded string
                 this.foto_incidente2 = "data:image/jpeg;base64," + imageData;
             }, (err) => {
                 console.log(err);
             });
             

             
           }
         },
         {
           text:  'Cancelar',
           role: 'cancel',
           icon: 'close' ,
           handler: () => {
             console.log('Cancel clicked');
           }
         }
       ]
     });
     actionSheet.present()


      }


      sacarFoto_incidente3(){


      let actionSheet = this.actionSheetCtrl.create({
        title: 'Subir foto',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Abrir camara',
            icon:  'camera',
            handler: () => {
             //
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
          },
          {
            text: 'Abrir galeria',
            icon:  'image',
            handler: () => {
              //console.log('Archive clicked');
              

              let cameraOptions : CameraOptions = {
                  quality: 50,
                  encodingType: this.camera.EncodingType.JPEG,
                  targetWidth: 800,
                  targetHeight: 600,
                  destinationType: this.camera.DestinationType.DATA_URL,
                  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                  correctOrientation: true,
                  saveToPhotoAlbum:false
              }


              this.camera.getPicture(cameraOptions).then((imageData) => {
                // imageData is a base64 encoded string
                  this.foto_incidente3 = "data:image/jpeg;base64," + imageData;
              }, (err) => {
                  console.log(err);
              });


            }
          },
          {
            text:  'Cancelar',
            role: 'cancel',
            icon: 'close' ,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();




       }
       

         sacarFoto_alcalde_2021(){


         let actionSheet = this.actionSheetCtrl.create({
           title: 'Subir foto',
           cssClass: 'action-sheets-basic-page',
           buttons: [
             {
               text: 'Abrir camara',
               icon:  'camera',
               handler: () => {
                //
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
                   this.foto_alcalde_2021 = "data:image/jpeg;base64," + imageData;
               }, (err) => {
                   console.log(err);
               });

               }
             },
             {
               text: 'Abrir galeria',
               icon:  'image',
               handler: () => {
                 //console.log('Archive clicked');
                 

                 let cameraOptions : CameraOptions = {
                     quality: 50,
                     encodingType: this.camera.EncodingType.JPEG,
                     targetWidth: 800,
                     targetHeight: 600,
                     destinationType: this.camera.DestinationType.DATA_URL,
                     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                     correctOrientation: true,
                     saveToPhotoAlbum:false
                 }


                 this.camera.getPicture(cameraOptions).then((imageData) => {
                   // imageData is a base64 encoded string
                     this.foto_alcalde_2021 = "data:image/jpeg;base64," + imageData;
                 }, (err) => {
                     console.log(err);
                 });


               }
             },
             {
               text:  'Cancelar',
               role: 'cancel',
               icon: 'close' ,
               handler: () => {
                 console.log('Cancel clicked');
               }
             }
           ]
         });
         actionSheet.present();



       }
         sacarFoto_local18(){

         let actionSheet = this.actionSheetCtrl.create({
           title: 'Subir foto',
           cssClass: 'action-sheets-basic-page',
           buttons: [
             {
               text: 'Abrir camara',
               icon:  'camera',
               handler: () => {
                //
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
                    this.foto_local18_2021 = "data:image/jpeg;base64," + imageData;
                }, (err) => {
                    console.log(err);
                });
               }
             },
             {
               text: 'Abrir galeria',
               icon:  'image',
               handler: () => {
                 //console.log('Archive clicked');
                 

                 let cameraOptions : CameraOptions = {
                     quality: 50,
                     encodingType: this.camera.EncodingType.JPEG,
                     targetWidth: 800,
                     targetHeight: 600,
                     destinationType: this.camera.DestinationType.DATA_URL,
                     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                     correctOrientation: true,
                     saveToPhotoAlbum:false
                 }


                 this.camera.getPicture(cameraOptions).then((imageData) => {
                   // imageData is a base64 encoded string
                     this.foto_local18_2021 = "data:image/jpeg;base64," + imageData;
                 }, (err) => {
                     console.log(err);
                 });

               }
             },
             {
               text:  'Cancelar',
               role: 'cancel',
               icon: 'close' ,
               handler: () => {
                 console.log('Cancel clicked');
               }
             }
           ]
         });
         actionSheet.present();


  
       }
          sacarFoto_local20(){


          let actionSheet = this.actionSheetCtrl.create({
            title: 'Subir foto',
            cssClass: 'action-sheets-basic-page',
            buttons: [
              {
                text: 'Abrir camara',
                icon:  'camera',
                handler: () => {
                 //
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
                     this.foto_local20_2021 = "data:image/jpeg;base64," + imageData;
                 }, (err) => {
                     console.log(err);
                 });
                }
              },
              {
                text: 'Abrir galeria',
                icon:  'image',
                handler: () => {
                  //console.log('Archive clicked');
                  

                  let cameraOptions : CameraOptions = {
                      quality: 50,
                      encodingType: this.camera.EncodingType.JPEG,
                      targetWidth: 800,
                      targetHeight: 600,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                      correctOrientation: true,
                      saveToPhotoAlbum:false
                  }


                  this.camera.getPicture(cameraOptions).then((imageData) => {
                    // imageData is a base64 encoded string
                      this.foto_local20_2021 = "data:image/jpeg;base64," + imageData;
                  }, (err) => {
                      console.log(err);
                  });

                }
              },
              {
                text:  'Cancelar',
                role: 'cancel',
                icon: 'close' ,
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });
          actionSheet.present();


       }
         sacarFoto_local23(){

         let actionSheet = this.actionSheetCtrl.create({
           title: 'Subir foto',
           cssClass: 'action-sheets-basic-page',
           buttons: [
             {
               text: 'Abrir camara',
               icon:  'camera',
               handler: () => {
                //
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
                    this.foto_local23_2021 = "data:image/jpeg;base64," + imageData;
                }, (err) => {
                    console.log(err);
                });
               }
             },
             {
               text: 'Abrir galeria',
               icon:  'image',
               handler: () => {
                 //console.log('Archive clicked');
                 

                 let cameraOptions : CameraOptions = {
                     quality: 50,
                     encodingType: this.camera.EncodingType.JPEG,
                     targetWidth: 800,
                     targetHeight: 600,
                     destinationType: this.camera.DestinationType.DATA_URL,
                     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                     correctOrientation: true,
                     saveToPhotoAlbum:false
                 }


                 this.camera.getPicture(cameraOptions).then((imageData) => {
                   // imageData is a base64 encoded string
                     this.foto_local23_2021 = "data:image/jpeg;base64," + imageData;
                 }, (err) => {
                     console.log(err);
                 });


               }
             },
             {
               text:  'Cancelar',
               role: 'cancel',
               icon: 'close' ,
               handler: () => {
                 console.log('Cancel clicked');
               }
             }
           ]
         });
         actionSheet.present();


       }
         sacarFoto_fed06(){

         let actionSheet = this.actionSheetCtrl.create({
           title: 'Subir foto',
           cssClass: 'action-sheets-basic-page',
           buttons: [
             {
               text: 'Abrir camara',
               icon:  'camera',
               handler: () => {
                //
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
                   this.foto_fed06_2021 = "data:image/jpeg;base64," + imageData;
               }, (err) => {
                   console.log(err);
               });
               }
             },
             {
               text: 'Abrir galeria',
               icon:  'image',
               handler: () => {
                 //console.log('Archive clicked');
                 

                 let cameraOptions : CameraOptions = {
                     quality: 50,
                     encodingType: this.camera.EncodingType.JPEG,
                     targetWidth: 800,
                     targetHeight: 600,
                     destinationType: this.camera.DestinationType.DATA_URL,
                     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                     correctOrientation: true,
                     saveToPhotoAlbum:false
                 }


                 this.camera.getPicture(cameraOptions).then((imageData) => {
                   // imageData is a base64 encoded string
                     this.foto_fed06_2021 = "data:image/jpeg;base64," + imageData;
                 }, (err) => {
                     console.log(err);
                 });
               }
             },
             {
               text:  'Cancelar',
               role: 'cancel',
               icon: 'close' ,
               handler: () => {
                 console.log('Cancel clicked');
               }
             }
           ]
         });
         actionSheet.present();


       }
          sacarFoto_fed16(){


          let actionSheet = this.actionSheetCtrl.create({
            title: 'Subir foto',
            cssClass: 'action-sheets-basic-page',
            buttons: [
              {
                text: 'Abrir camara',
                icon:  'camera',
                handler: () => {
                 //
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
                     this.foto_fed16_2021 = "data:image/jpeg;base64," + imageData;
                 }, (err) => {
                     console.log(err);
                 });
                }
              },
              {
                text: 'Abrir galeria',
                icon:  'image',
                handler: () => {
                  //console.log('Archive clicked');
                  

                  let cameraOptions : CameraOptions = {
                      quality: 50,
                      encodingType: this.camera.EncodingType.JPEG,
                      targetWidth: 800,
                      targetHeight: 600,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                      correctOrientation: true,
                      saveToPhotoAlbum:false
                  }


                  this.camera.getPicture(cameraOptions).then((imageData) => {
                    // imageData is a base64 encoded string
                      this.foto_fed16_2021 = "data:image/jpeg;base64," + imageData;
                  }, (err) => {
                      console.log(err);
                  });

                }
              },
              {
                text:  'Cancelar',
                role: 'cancel',
                icon: 'close' ,
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });
          actionSheet.present();


       }
         sacarFoto_fed17(){

         let actionSheet = this.actionSheetCtrl.create({
           title: 'Subir foto',
           cssClass: 'action-sheets-basic-page',
           buttons: [
             {
               text: 'Abrir camara',
               icon:  'camera',
               handler: () => {
                //
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
                    this.foto_fed17_2021 = "data:image/jpeg;base64," + imageData;
                }, (err) => {
                    console.log(err);
                });
               }
             },
             {
               text: 'Abrir galeria',
               icon:  'image',
               handler: () => {
                 //console.log('Archive clicked');
                 

                 let cameraOptions : CameraOptions = {
                     quality: 50,
                     encodingType: this.camera.EncodingType.JPEG,
                     targetWidth: 800,
                     targetHeight: 600,
                     destinationType: this.camera.DestinationType.DATA_URL,
                     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                     correctOrientation: true,
                     saveToPhotoAlbum:false
                 }


                 this.camera.getPicture(cameraOptions).then((imageData) => {
                   // imageData is a base64 encoded string
                     this.foto_fed17_2021 = "data:image/jpeg;base64," + imageData;
                 }, (err) => {
                     console.log(err);
                 });

               }
             },
             {
               text:  'Cancelar',
               role: 'cancel',
               icon: 'close' ,
               handler: () => {
                 console.log('Cancel clicked');
               }
             }
           ]
         });
         actionSheet.present();


       }
/*
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

*/
           sacarFoto_sabana1(){

           let actionSheet = this.actionSheetCtrl.create({
             title: 'Subir foto',
             cssClass: 'action-sheets-basic-page',
             buttons: [
               {
                 text: 'Abrir camara',
                 icon:  'camera',
                 handler: () => {
                  //
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
               },
               {
                 text: 'Abrir galeria',
                 icon:  'image',
                 handler: () => {
                   //console.log('Archive clicked');
                   

                   let cameraOptions : CameraOptions = {
                       quality: 50,
                       encodingType: this.camera.EncodingType.JPEG,
                       targetWidth: 800,
                       targetHeight: 600,
                       destinationType: this.camera.DestinationType.DATA_URL,
                       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                       correctOrientation: true,
                       saveToPhotoAlbum:false
                   }


                   this.camera.getPicture(cameraOptions).then((imageData) => {
                     // imageData is a base64 encoded string
                       this.foto_sabana1 = "data:image/jpeg;base64," + imageData;
                   }, (err) => {
                       console.log(err);
                   });

                 }
               },
               {
                 text:  'Cancelar',
                 role: 'cancel',
                 icon: 'close' ,
                 handler: () => {
                   console.log('Cancel clicked');
                 }
               }
             ]
           });
           actionSheet.present();


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


                 sacarFoto_sabana3(){

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
                          this.foto_sabana3 = "data:image/jpeg;base64," + imageData;
                      }, (err) => {
                          console.log(err);
                      });
                    }





                 sacarFoto_jornada(){

                 let actionSheet = this.actionSheetCtrl.create({
                   title: 'Subir foto',
                   cssClass: 'action-sheets-basic-page',
                   buttons: [
                     {
                       text: 'Abrir camara',
                       icon:  'camera',
                       handler: () => {
                        //
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
                     },
                     {
                       text: 'Abrir galeria',
                       icon:  'image',
                       handler: () => {
                         //console.log('Archive clicked');
                         

                         let cameraOptions : CameraOptions = {
                             quality: 50,
                             encodingType: this.camera.EncodingType.JPEG,
                             targetWidth: 800,
                             targetHeight: 600,
                             destinationType: this.camera.DestinationType.DATA_URL,
                             sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                             correctOrientation: true,
                             saveToPhotoAlbum:false
                         }


                         this.camera.getPicture(cameraOptions).then((imageData) => {
                           // imageData is a base64 encoded string
                             this.acta_jornada_notarial = "data:image/jpeg;base64," + imageData;
                         }, (err) => {
                             console.log(err);
                         });

                       }
                     },
                     {
                       text:  'Cancelar',
                       role: 'cancel',
                       icon: 'close' ,
                       handler: () => {
                         console.log('Cancel clicked');
                       }
                     }
                   ]
                 });
                 actionSheet.present();


 
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

  foto_alcalde_2021:this.foto_alcalde_2021,
  foto_local18_2021:this.foto_local18_2021,
  foto_local20_2021:this.foto_local20_2021,
  foto_local23_2021:this.foto_local23_2021,
  foto_fed06_2021:this.foto_fed06_2021,
  foto_fed16_2021:this.foto_fed16_2021,
  foto_fed17_2021:this.foto_fed17_2021,
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

    /*******************************************************************************************/


    modal_cifras(partido){

    let variables = {
      id_registro: this.id_registro,
      partido: partido
    }



   this.db.get_cifras_partido(variables)
    .map(res => res.json())
                   .subscribe(res => {

                    this.loading.dismiss();

                   
                    //alert(res.data[0]['cifra_puesto1_partido'+partido]);

                    

                    let data_param = { 
                                      
                                      id_registro:this.id_registro,
                                      cifra_puesto1:res.data[0]['cifra_puesto1_partido'+partido],
                                      cifra_puesto2:res.data[1]['cifra_puesto2_partido'+partido],
                                      cifra_puesto3:res.data[2]['cifra_puesto3_partido'+partido],
                                      cifra_puesto4:res.data[3]['cifra_puesto4_partido'+partido],
                                      cifra_puesto5:res.data[4]['cifra_puesto5_partido'+partido],
                                      cifra_puesto6:res.data[5]['cifra_puesto6_partido'+partido],
                                      cifra_puesto7:res.data[6]['cifra_puesto7_partido'+partido],
                                      partido:partido,

                                       };


                    let contactModal = this.modalCtrl.create(ModalCifras,data_param);
                    contactModal.present();
                        

                  
                    }, error => {

                    this.loading.dismiss(); 

                      alert(error);
                   });

    }



     modal_ccjhh() {
      let data_param = { 
                        
                        id_registro:this.id_registro,
                        cifra_alc_ccjhh:this.cifra_alc_ccjhh,
                        cifra_local18_ccjhh:this.cifra_local18_ccjhh,
                        cifra_local20_ccjhh:this.cifra_local20_ccjhh,
                        cifra_local23_ccjhh:this.cifra_local23_ccjhh,
                        cifra_fed16_ccjhh:this.cifra_fed16_ccjhh,
                        cifra_fed17_ccjhh:this.cifra_fed17_ccjhh,

                         };


      let contactModal = this.modalCtrl.create(ModalCCJHH,data_param);
      contactModal.present();

      }

     modal_alianza_mexico() {
      let data_param = { 
                            id_registro:this.id_registro,
                            cifra_alc_almexico:this.cifra_alc_almexico,
                            cifra_local18_almexico:this.cifra_local18_almexico,
                            cifra_fed16_almexico:this.cifra_fed16_almexico,
                            cifra_fed17_almexico:this.cifra_fed17_almexico

                         };


      let contactModal = this.modalCtrl.create(ModalALIANZAMEXICO,data_param);
      contactModal.present();

      }

         modal_pmc() {
      let data_param = { 
                         id_registro:this.id_registro,
                          cifra_alc_pmc:this.cifra_alc_pmc

                         };


      let contactModal = this.modalCtrl.create(ModalPMC,data_param);
      contactModal.present();

      }

           modal_fuerza_mexico() {
      let data_param = { 
                         id_registro:this.id_registro,
                         cifra_alc_pfm:this.cifra_alc_pfm,
                         cifra_fed16_pfm:this.cifra_fed16_pfm,

                         };


      let contactModal = this.modalCtrl.create(ModalFUERZAMEXICO,data_param);
      contactModal.present();

      }

           modal_rsp() {
      let data_param = { 
                         id_registro:this.id_registro,
                           cifra_alc_prsp:this.cifra_alc_prsp,
                           cifra_fed17_prsp:this.cifra_fed17_prsp

                         };


      let contactModal = this.modalCtrl.create(ModalRSP,data_param);
      contactModal.present();

      }

           modal_ppri() {
      let data_param = { 
                         id_registro:this.id_registro,
                         cifra_local23_pri:this.cifra_local23_pri

                         };


      let contactModal = this.modalCtrl.create(ModalPPRI,data_param);
      contactModal.present();

      }

           modal_pprd() {
      let data_param = { 
                         id_registro:this.id_registro,
                         cifra_local23_prd:this.cifra_local23_prd

                         };


      let contactModal = this.modalCtrl.create(ModalPPRD,data_param);
      contactModal.present();

      }

           modal_pve() {
      let data_param = { 
                         id_registro:this.id_registro,
                         cifra_local20_pve:this.cifra_local20_pve

                         };


      let contactModal = this.modalCtrl.create(ModalPVE,data_param);
      contactModal.present();

      }

           modal_ppan() {
      let data_param = { 
                         id_registro:this.id_registro,
                          cifra_local20_pan:this.cifra_local20_pan

                         };


      let contactModal = this.modalCtrl.create(ModalPPAN,data_param);
      contactModal.present();

      }

           modal_pmorena() {
      let data_param = { 
                         id_registro:this.id_registro,
                         cifra_fed06_morena:this.cifra_fed06_morena

                         };


      let contactModal = this.modalCtrl.create(ModalPMORENA,data_param);
      contactModal.present();

      }

           modal_ppt() {
      let data_param = { 
                         id_registro:this.id_registro,
                         cifra_fed06_pt:this.cifra_fed06_pt

                         };


      let contactModal = this.modalCtrl.create(ModalPPT,data_param);
      contactModal.present();

      }

           modal_pri_prd() {
      let data_param = { 
                         id_registro:this.id_registro,
                         cifra_local20_priprd:this.cifra_local20_priprd

                         };


      let contactModal = this.modalCtrl.create(ModalPRIPRD,data_param);
      contactModal.present();

      }


    /*********************************************************************************************/



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

      let actionSheet = this.actionSheetCtrl.create({
        title: 'Subir foto',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Abrir camara',
            icon:  'camera',
            handler: () => {
             //
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
          },
          {
            text: 'Abrir galeria',
            icon:  'image',
            handler: () => {
              //console.log('Archive clicked');
              

              let cameraOptions : CameraOptions = {
                  quality: 50,
                  encodingType: this.camera.EncodingType.JPEG,
                  targetWidth: 800,
                  targetHeight: 600,
                  destinationType: this.camera.DestinationType.DATA_URL,
                  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                  correctOrientation: true,
                  saveToPhotoAlbum:false
              }


              this.camera.getPicture(cameraOptions).then((imageData) => {
                // imageData is a base64 encoded string
                  this.foto_escrito1 = "data:image/jpeg;base64," + imageData;
              }, (err) => {
                  console.log(err);
              });
            }
          },
          {
            text:  'Cancelar',
            role: 'cancel',
            icon: 'close' ,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();


       }


       sacarFoto_escrito2(){



       let actionSheet = this.actionSheetCtrl.create({
         title: 'Subir foto',
         cssClass: 'action-sheets-basic-page',
         buttons: [
           {
             text: 'Abrir camara',
             icon:  'camera',
             handler: () => {
              //
              
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
           },
           {
             text: 'Abrir galeria',
             icon:  'image',
             handler: () => {
               //console.log('Archive clicked');
               

               
               let cameraOptions : CameraOptions = {
                   quality: 50,
                   encodingType: this.camera.EncodingType.JPEG,
                   targetWidth: 800,
                   targetHeight: 600,
                   destinationType: this.camera.DestinationType.DATA_URL,
                   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                   correctOrientation: true,
                   saveToPhotoAlbum:false
               }


               this.camera.getPicture(cameraOptions).then((imageData) => {
                 // imageData is a base64 encoded string
                   this.foto_escrito2 = "data:image/jpeg;base64," + imageData;
               }, (err) => {
                   console.log(err);
               });

             }
           },
           {
             text:  'Cancelar',
             role: 'cancel',
             icon: 'close' ,
             handler: () => {
               console.log('Cancel clicked');
             }
           }
         ]
       });
       actionSheet.present();

        }


        sacarFoto_escrito3(){

        let actionSheet = this.actionSheetCtrl.create({
          title: 'Subir foto',
          cssClass: 'action-sheets-basic-page',
          buttons: [
            {
              text: 'Abrir camara',
              icon:  'camera',
              handler: () => {
               //
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
            },
            {
              text: 'Abrir galeria',
              icon:  'image',
              handler: () => {
                //console.log('Archive clicked');
                

                let cameraOptions : CameraOptions = {
                    quality: 50,
                    encodingType: this.camera.EncodingType.JPEG,
                    targetWidth: 800,
                    targetHeight: 600,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                    correctOrientation: true,
                    saveToPhotoAlbum:false
                }


                this.camera.getPicture(cameraOptions).then((imageData) => {
                  // imageData is a base64 encoded string
                    this.foto_escrito3 = "data:image/jpeg;base64," + imageData;
                }, (err) => {
                    console.log(err);
                });


              }
            },
            {
              text:  'Cancelar',
              role: 'cancel',
              icon: 'close' ,
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionSheet.present();


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

           let actionSheet = this.actionSheetCtrl.create({
             title: 'Subir foto',
             cssClass: 'action-sheets-basic-page',
             buttons: [
               {
                 text: 'Abrir camara',
                 icon:  'camera',
                 handler: () => {
                  //
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
               },
               {
                 text: 'Abrir galeria',
                 icon:  'image',
                 handler: () => {
                   //console.log('Archive clicked');
                   

                   let cameraOptions : CameraOptions = {
                       quality: 50,
                       encodingType: this.camera.EncodingType.JPEG,
                       targetWidth: 800,
                       targetHeight: 600,
                       destinationType: this.camera.DestinationType.DATA_URL,
                       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                       correctOrientation: true,
                       saveToPhotoAlbum:false
                   }


                   this.camera.getPicture(cameraOptions).then((imageData) => {
                     // imageData is a base64 encoded string
                       this.foto_sabana2 = "data:image/jpeg;base64," + imageData;
                   }, (err) => {
                       console.log(err);
                   });

                 }
               },
               {
                 text:  'Cancelar',
                 role: 'cancel',
                 icon: 'close' ,
                 handler: () => {
                   console.log('Cancel clicked');
                 }
               }
             ]
           });
           actionSheet.present();




           }


           sabana3(){

           let actionSheet = this.actionSheetCtrl.create({
             title: 'Subir foto',
             cssClass: 'action-sheets-basic-page',
             buttons: [
               {
                 text: 'Abrir camara',
                 icon:  'camera',
                 handler: () => {
                  //
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
                      this.foto_sabana3 = "data:image/jpeg;base64," + imageData;
                  }, (err) => {
                      console.log(err);
                  });

                 }
               },
               {
                 text: 'Abrir galeria',
                 icon:  'image',
                 handler: () => {
                   //console.log('Archive clicked');
                   

                   let cameraOptions : CameraOptions = {
                       quality: 50,
                       encodingType: this.camera.EncodingType.JPEG,
                       targetWidth: 800,
                       targetHeight: 600,
                       destinationType: this.camera.DestinationType.DATA_URL,
                       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                       correctOrientation: true,
                       saveToPhotoAlbum:false
                   }


                   this.camera.getPicture(cameraOptions).then((imageData) => {
                     // imageData is a base64 encoded string
                       this.foto_sabana3 = "data:image/jpeg;base64," + imageData;
                   }, (err) => {
                       console.log(err);
                   });

                 }
               },
               {
                 text:  'Cancelar',
                 role: 'cancel',
                 icon: 'close' ,
                 handler: () => {
                   console.log('Cancel clicked');
                 }
               }
             ]
           });
           actionSheet.present();




           }





    modal_cifras_partidos(puesto){

    let variables = {
      id_registro: this.id_registro,
      puesto: puesto
    }



   this.db.get_cifras_partidov2(variables)
    .map(res => res.json())
                   .subscribe(res => {

                    this.loading.dismiss();

                    

                    let data_param = { 
                                      
                                      id_registro:this.id_registro,
                                      cifra_partido1:res.data[0]['cifra_puesto'+puesto+'_partido1'],
                                      cifra_partido2:res.data[1]['cifra_puesto'+puesto+'_partido2'],
                                      cifra_partido3:res.data[2]['cifra_puesto'+puesto+'_partido3'],
                                      cifra_partido4:res.data[3]['cifra_puesto'+puesto+'_partido4'],
                                      cifra_partido5:res.data[4]['cifra_puesto'+puesto+'_partido5'],
                                      cifra_partido6:res.data[5]['cifra_puesto'+puesto+'_partido6'],
                                      cifra_partido7:res.data[6]['cifra_puesto'+puesto+'_partido7'],
                                      cifra_partido8:res.data[7]['cifra_puesto'+puesto+'_partido8'],
                                      cifra_partido9:res.data[8]['cifra_puesto'+puesto+'_partido9'],
                                      cifra_partido10:res.data[9]['cifra_puesto'+puesto+'_partido10'],
                                      cifra_partido11:res.data[10]['cifra_puesto'+puesto+'_partido11'],
                                      cifra_partido12:res.data[11]['cifra_puesto'+puesto+'_partido12'],
                                      cifra_partido13:res.data[12]['cifra_puesto'+puesto+'_partido13'],

                                      cifra_partido14:res.data[12]['cifra_puesto'+puesto+'_partido14'],
                                      cifra_partido15:res.data[12]['cifra_puesto'+puesto+'_partido15'],
                                      cifra_partido16:res.data[12]['cifra_puesto'+puesto+'_partido16'],
                                      cifra_partido17:res.data[12]['cifra_puesto'+puesto+'_partido17'],
                                      cifra_partido18:res.data[12]['cifra_puesto'+puesto+'_partido18'],
                                      cifra_partido19:res.data[12]['cifra_puesto'+puesto+'_partido19'],
                                      cifra_partido20:res.data[12]['cifra_puesto'+puesto+'_partido20'],
                                      cifra_partido21:res.data[12]['cifra_puesto'+puesto+'_partido21'],
                                      puesto:puesto,

                                       };


                    let contactModal = this.modalCtrl.create(ModalCifras,data_param);
                    contactModal.present();
                        

                  
                    }, error => {

                    this.loading.dismiss(); 

                      alert(error);
                   });

    }












}
