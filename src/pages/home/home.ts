import { Component,ViewChild, ElementRef} from '@angular/core';
import { NavController, AlertController,LoadingController} from 'ionic-angular';

import { Platform,ModalController,NavParams } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';


import { Geolocation } from '@ionic-native/geolocation';

//Para utilizar http
import { Observable } from 'rxjs/Observable';


import { Login } from '../login/login';



import { Signature } from '../signature/signature';


import { DbProvider } from '../../providers/db/db';


import { Camera, CameraOptions } from '@ionic-native/camera';




import { RegistroCasilla } from '../registro-casilla/registro-casilla';


declare var google;



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


color='#f53d3d';


id_user:any;
seccion:any;
padron:any;



insertos:any;
insertos_producto:any;
insertos_producto2:any;
insertos_producto3:any;
insertos_producto4:any;



foto_incidente: any = '';
foto_presidente: any = '';
foto_jefe: any = '';
foto_senadores: any = '';
foto_diputados_f: any = '';
foto_diputados_l: any = '';
foto_alcaldias: any = '';





status: any = 1;
signatureImage : string;
map: any;
coords : any = { lat: 19.432608, lng: -99.133208 }
ver_mapa:boolean=true;
ver_buscador:boolean=true;
@ViewChild('searchbar', { read: ElementRef }) searchbar: ElementRef;
addressElement: HTMLInputElement = null;
miMarker :any ='';


    nombre_regional:string = '';
    ape_pat_regional:string = '';
    ape_mat_regional:string = '';

    nombre_zonal:string = '';
    ape_pat_zonal:string = '';
    ape_mat_zonal:string = '';

    nombre_referente:string = '';
    ape_pat_referente:string = '';
    ape_mat_referente:string = '';


    nombre_entrevistador:string = '';
    ape_pat_entrevistador:string = '';
    ape_mat_entrevistador:string = '';

    nombre_brigada:string = '';
    ape_pat_brigada:string = '';
    ape_mat_brigada:string = '';


    nombre_entrevistado:string = '';
    ape_pat_entrevistado:string = '';
    ape_mat_entrevistado:string = '';


    calle:string = '';
    no_int:string = '';
    no_ext:string = '';
    colonia:string = '';
    cp:string = '';

    clave_elector:string = ''; 
    edad:string = '';
    sexo:string = '';

    tel:string = '';
    cel:string = '';
    email:string = '';
    face:string = '';
    twitter:string = '';


    personas_vivienda:string = '';
    mensaje:string = '';
    otro_partido:any = '';

    gestion:any = '';
    otro:string = '';
    observaciones:string = '';

    firma:any='';

    loading:any;
 






  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public  platform: Platform, public modalCtrl:ModalController,private db: DbProvider, private geolocation: Geolocation,private camera: Camera,public loadingCtrl: LoadingController,private statusBar: StatusBar) {




  platform.ready().then(() => { 


   this.statusBar.backgroundColorByHexString('#99C7FF');


     this.loading = this.loadingCtrl.create({
                  content: 'Cargando...'
                });



    this.loading.present();



  this.id_user=window.localStorage['id_user_sesion'];




   this.getCasillas(this.id_user);




  this.getCatalogoProducto(this.id_user);



  if(this.status==500){

  this.ver_mapa=false;
  this.ver_buscador=false;
    
  }




  });



  }



  getCasillas(id){

  this.db.casillas(id)
   .map(res => res.json())
                  .subscribe(res => {
                this.insertos=res.data;




               // alert(res.data.length);


               /* for (var i = 0; i < res.data.length; i++) { 
                    //alert(res.data[i].id);


                    this.detalle_casilla(res.data[i].id);
                }*/



                //alert(JSON.stringify(this.insertos));


                this.loading.dismiss();
                 
                   }, error => {
                   this.loading.dismiss();
                     alert(error);
                  });



   }



 


    ionViewDidLoad(){


    this.initMap();

   }


ionicViewDidEnter(){
    // initiate map here
    
}







    initMap(){




         let mapContainer = document.getElementById('map');

          this.map = new google.maps.Map(mapContainer, {
            center: this.coords,
            zoom: 18,
          });
          this.marker_map(this.coords);
          this.initAutocomplete();




      }


        marker_map(latlong){

        if (this.miMarker !== '') {
         this.miMarker.setMap(null);
      }



        // Colocamos el marcador
            this.miMarker = new google.maps.Marker({
                      
                      map: this.map,
                      position: latlong,
                      draggable: true,
                  });

           let content = "<h4>some info!!!</h4>";
           this.addInfoWindow(this.miMarker, content) 




        }


        addInfoWindow(marker, content){
         
          let infoWindow = new google.maps.InfoWindow({
            content: content
          }); 

          google.maps.event.addListener(marker, 'dragend', (event) => {

          this.coords.lat = event.latLng.lat();
          this.coords.lng = event.latLng.lng();
        
          });
        }


        initAutocomplete(): void {
          // reference : https://github.com/driftyco/ionic/issues/7223
          this.addressElement = this.searchbar.nativeElement.querySelector('.searchbar-input');
          this.createAutocomplete(this.addressElement).subscribe((location) => {
            

            this.coords.lat = location.lat();
            this.coords.lng = location.lng();

            let options = {
              center: location,
              zoom: 18
            };
            this.map.setOptions(options);
            this.marker_map(location);

          });
        }

        createAutocomplete(addressEl: HTMLInputElement): Observable<any> {
          const autocomplete = new google.maps.places.Autocomplete(addressEl);
          autocomplete.bindTo('bounds', this.map);
          return new Observable((sub: any) => {
            google.maps.event.addListener(autocomplete, 'place_changed', () => {
              const place = autocomplete.getPlace();
              if (!place.geometry) {
                sub.error({
                  message: 'Autocomplete returned place with no geometry'
                });
              } else {
                console.log('Search Lat', place.geometry.location.lat());
                console.log('Search Lng', place.geometry.location.lng());
                sub.next(place.geometry.location);
                //sub.complete();
              }
            });
          });
        }











   logout() {
    let alert = this.alertCtrl.create({
      title: 'Salir',
      message: '¿Esta seguro de salir?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            
            this.navCtrl.setRoot(Login);
          }
        }
      ]
    });
    alert.present();
  }



openSignatureModel(){

let contactModal = this.modalCtrl.create(Signature);
contactModal.present();


contactModal.onDidDismiss((data)=>{


this.signatureImage=data.foto_firma;

this.firma=data.foto_firma;

}

);




}


evento_cambio_pagina(pagina){


if(pagina==500){

this.ver_mapa=false;
this.ver_buscador=false;
  this.status=1;
  
}else{
 this.ver_mapa=true;
 this.ver_buscador=true;
  this.status=pagina;
}

}





guardar(){

alert("Registro guardado");

 let array = {
    nombre_regional: this.nombre_regional,
    ape_pat_regional: this.ape_pat_regional,
    ape_mat_regional: this.ape_mat_regional,

    nombre_zonal: this.nombre_zonal,
    ape_pat_zonal: this.ape_pat_zonal,
    ape_mat_zonal: this.ape_mat_zonal,

    nombre_referente: this.nombre_referente,
    ape_pat_referente: this.ape_pat_referente,
    ape_mat_referente: this.ape_mat_referente,


    nombre_entrevistador: this.nombre_entrevistador,
    ape_pat_entrevistador: this.ape_pat_entrevistador,
    ape_mat_entrevistador: this.ape_mat_entrevistador,

    nombre_brigada: this.nombre_brigada,
    ape_pat_brigada: this.ape_pat_brigada,
    ape_mat_brigada: this.ape_mat_brigada,


    nombre_entrevistado: this.nombre_entrevistado,
    ape_pat_entrevistado: this.ape_pat_entrevistado,
    ape_mat_entrevistado: this.ape_mat_entrevistado,


    calle: this.calle,
    no_int: this.no_int,
    no_ext: this.no_ext,
    colonia: this.colonia,
    cp: this.cp,

    clave_elector: this.clave_elector, 
    edad: this.edad,
    sexo: this.sexo,

    tel: this.tel,
    cel: this.cel,
    email: this.email,
    face: this.face,
    twitter: this.twitter,


    personas_vivienda: this.personas_vivienda,
    mensaje: this.mensaje,
    otro_partido: this.otro_partido,

    gestion: this.gestion,
    otro: this.otro,
    observaciones: this.observaciones,

    lat: this.coords.lat,
    lng: this.coords.lng,

    firma: this.firma,
  }


  this.db.addSitio(array).then((res)=>{
        alert('se ha introducido correctamente en la bd'); 
      },(err)=>{ 
       alert('error al meter en la bd'+err)
       })

  


}


obtenerPosicion():any{
    this.geolocation.getCurrentPosition({timeout:9000,enableHighAccuracy: false}).then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;

    
      this.initMap();

    })
    .catch(
      (err : PositionError )=>{

         alert("Error al obtener la ubicación, revise su configuración");

         


      }
    );
  }



  getCatalogoProducto(id){

  this.db.seccion_usuario(id)
   .map(res => res.json())
                  .subscribe(res => {
                this.insertos_producto=res.data;
                 
                   }, error => {
                     alert(error);
                  });



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



      onSelectChange(selectedValue: any) {


          //alert(selectedValue);



          let variables = {
            id_user: this.id_user,
            padron: selectedValue
          }

          this.db.padron_usuario(variables)
           .map(res => res.json())
                          .subscribe(res => {
                        this.insertos_producto2=res.data;
                         
                           }, error => {
                             alert(error);
                          });


          }



          onSelectChange2(selectedValue: any) {


              //alert(selectedValue);



              let variables = {
                id_user: this.id_user,
                padron: selectedValue,
                seccion: this.seccion
              }

              this.db.listado_n_usuario(variables)
               .map(res => res.json())
                              .subscribe(res => {
                            this.insertos_producto3=res.data;
                             
                               }, error => {
                                 alert(error);
                              });


              }


              onSelectChange3(selectedValue: any) {


                  //alert(selectedValue);



                  let variables = {
                    id_user: this.id_user,
                    listado_n: selectedValue,
                    seccion: this.seccion,
                    padron: this.padron
                  }

                  this.db.casillas_usuario(variables)
                   .map(res => res.json())
                                  .subscribe(res => {
                                this.insertos_producto4=res.data;
                                 
                                   }, error => {
                                     alert(error);
                                  });


                  }




         itemSelected(id,seccion){

        let data = { id: id,seccion:seccion};

         this.navCtrl.push(RegistroCasilla,data);

        

         }





}
