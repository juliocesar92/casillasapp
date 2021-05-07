
import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';

/*------------------INICIO LIBRERIAS------------------------*/
//Para utilizar herramientas de http
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
/*------------------FIN LIBRERIAS------------------------*/



import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

db : SQLiteObject = null;
url_mula: string ="http://casillas.cdmx.esy.es";
//url_mula: string ="http://189.240.60.168";



  constructor(public http:Http,public sqlite: SQLite) {
    console.log('Hello DbProvider Provider');
  }



  public openDb(){
      return this.sqlite.create({
          name: 'data.db',
          location: 'default' // el campo location es obligatorio
      })
      .then((db: SQLiteObject) => {
       this.db =db;
     })
  }


  public createTableSitios(){
    return this.db.executeSql("create table if not exists sitios( id INTEGER PRIMARY KEY AUTOINCREMENT, nombre_regional TEXT,ape_pat_regional TEXT,ape_mat_regional TEXT,nombre_zonal TEXT,ape_pat_zonal TEXT,ape_mat_zonal TEXT,nombre_referente TEXT,ape_pat_referente TEXT,ape_mat_referente TEXT,nombre_entrevistador TEXT,ape_pat_entrevistador TEXT,ape_mat_entrevistador TEXT,nombre_brigada TEXT,ape_pat_brigada TEXT,ape_mat_brigada TEXT,nombre_entrevistado TEXT,ape_pat_entrevistado TEXT,ape_mat_entrevistado TEXT,calle TEXT,no_int TEXT,no_ext TEXT,colonia TEXT,cp TEXT,clave_elector TEXT,edad TEXT,sexo TEXT,tel TEXT,cel TEXT,face TEXT,twitter TEXT,personas_vivienda TEXT,mensaje TEXT,otro_partido TEXT,gestion TEXT,otro TEXT,observaciones TEXT ,lat FLOAT, lng FLOAT, firma TEXT )")
  }


  public addSitio(sitio){
    let sql = "INSERT INTO sitios (nombre_regional ,ape_pat_regional ,ape_mat_regional ,nombre_zonal ,ape_pat_zonal ,ape_mat_zonal ,nombre_referente ,ape_pat_referente ,ape_mat_referente ,nombre_entrevistador ,ape_pat_entrevistador ,ape_mat_entrevistador ,nombre_brigada ,ape_pat_brigada ,ape_mat_brigada ,nombre_entrevistado ,ape_pat_entrevistado ,ape_mat_entrevistado ,calle ,no_int ,no_ext ,colonia ,cp ,clave_elector ,edad ,sexo ,tel ,cel ,face ,twitter ,personas_vivienda ,mensaje ,otro_partido ,gestion ,otro ,observaciones  ,lat , lng , firma ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    return this.db.executeSql(sql,[sitio.nombre_regional,sitio.ape_pat_regional,sitio.ape_mat_regional,sitio.nombre_zonal,sitio.ape_pat_zonal,sitio.ape_mat_zonal,sitio.nombre_referente,sitio.ape_pat_referente,sitio.ape_mat_referente,sitio.nombre_entrevistador,sitio.ape_pat_entrevistador,sitio.ape_mat_entrevistador,sitio.nombre_brigada,sitio.ape_pat_brigada,sitio.ape_mat_brigada,sitio.nombre_entrevistado,sitio.ape_pat_entrevistado,sitio.ape_mat_entrevistado,sitio.calle,sitio.no_int,sitio.no_ext,sitio.colonia,sitio.cp,sitio.clave_elector,sitio.edad,sitio.sexo,sitio.tel,sitio.cel,sitio.face,sitio.twitter,sitio.personas_vivienda,sitio.mensaje,sitio.otro_partido,sitio.gestion,sitio.otro,sitio.observaciones,sitio.lat,sitio.lng,sitio.firma]);
  }


      //FUNCIÓN PARA INGRESAR A LA APP
        public loginIn(variables) {
        let postParams = {username : variables.user,
                          pasword : variables.password
                          }
          return this.http.post(this.url_mula+"/login_ws",postParams)
        }


       public consulta_listado_nominal(variables) {

           return this.http.get(this.url_mula+"/obtener_nombres/"+variables.palabra+"/"+variables.seccion);
         
        }




      public seccion_usuario(id) {
        let postParams = {id_user : id}
         return this.http.post(this.url_mula+"/catalogo_sesion",postParams);
         
        }


        public padron_usuario(variables) {
        let postParams = {padron : variables.padron,id_user: variables.id_user }
         return this.http.post(this.url_mula+"/catalogo_padron",postParams);
         
        }

        public listado_n_usuario(variables) {
        let postParams = {padron : variables.padron,id_user: variables.id_user, seccion: variables.seccion }
         return this.http.post(this.url_mula+"/catalogo_listado_n",postParams);
         
        }


        public casillas_usuario(variables) {
        let postParams = {padron : variables.padron,id_user: variables.id_user, seccion: variables.seccion, listado_n: variables.listado_n}
         return this.http.post(this.url_mula+"/catalogo_casillas",postParams);
         
        }



        public casillas(variables) {
        let postParams = {id_user: variables }
         return this.http.post(this.url_mula+"/casillas_user",postParams);
         
        }

        public casillas_detalle(variables) {
        let postParams = {id_casilla: variables }
         return this.http.post(this.url_mula+"/get_casilla_detalle",postParams);
         
        }

         public get_funcionarios(id) {
         return this.http.get(this.url_mula+"/getfuncionarios/"+id);
         
        }

        

         public get_representante(id) {
         return this.http.get(this.url_mula+"/getrepresentantes/"+id);
         
        }

        


      /********************************************/


      

        public save_funcionarios(array) {
        let postParams = {
                          nombre_repre1:array.nombre_repre1,
                          nombre_repre2:array.nombre_repre2,
                          apellidos_repre1:array.apellidos_repre1,
                          apellidos_repre2:array.apellidos_repre2,
                          telefono_repre1:array.telefono_repre1,
                          telefono_repre2:array.telefono_repre2,

                          funcionarios:array.funcionarios,
                          id_votacion_casilla:array.id_votacion_casilla,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_funcionarios",postParams);
         
        }



        public save_apertura(array) {
        let postParams = {
                          apertura:array.apertura,
                          hora_i:array.hora_i,
                          es_representantes:array.es_representantes,
                          es_paquetes:array.es_paquetes,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_apertura",postParams);
         
        }


        public save_flujo(array) {
        let postParams = {
                          flujo10:array.flujo10,
                          flujo12:array.flujo12,
                          flujo14:array.flujo14,
                          flujo16:array.flujo16,
                          flujo18:array.flujo18,
                          id_registro:array.id_registro,
                          }
         return this.http.post(this.url_mula+"/save_flujo",postParams);
         
        }

        public save_incidente(array) {
        let postParams = {
                          foto_incidente:array.foto_incidente,
                          foto_incidente2:array.foto_incidente2,
                          foto_incidente3:array.foto_incidente3,
                          comentario1:array.comentario1,
                          comentario2:array.comentario2,
                          comentario3:array.comentario3,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_incidente",postParams);
         
        }


        public save_cierre(array) {
        let postParams = {
                          h_cierre:array.h_cierre,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cierre",postParams);
         
        }



        public save_actas(array) {
        let postParams = {
                          foto_pre:array.foto_pre,
                          foto_jefe:array.foto_jefe,
                          foto_sena:array.foto_sena,
                          foto_d_f:array.foto_d_f,
                          foto_d_l:array.foto_d_l,
                          foto_a:array.foto_a,
                          foto_sabana1:array.foto_sabana1,
                          foto_sabana2:array.foto_sabana2,
                          acta_jornada_notarial:array.acta_jornada_notarial,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_actas",postParams);
         
        }


        public save_cifra_prd(array) {
        let postParams = {
                          cifra_pre_prd:array.cifra_pre_prd,
                          cifra_jefe_prd:array.cifra_jefe_prd,
                          cifra_sena_prd:array.cifra_sena_prd,
                          cifra_di_f_prd:array.cifra_di_f_prd,
                          cifra_di_l_prd:array.cifra_di_l_prd,
                          cifra_alc_prd:array.cifra_alc_prd,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_prd",postParams);
         
        }

        public save_cifra_pan(array) {
        let postParams = {
                          cifra_pre_pan:array.cifra_pre_pan,
                          cifra_jefe_pan:array.cifra_jefe_pan,
                          cifra_sena_pan:array.cifra_sena_pan,
                          cifra_di_f_pan:array.cifra_di_f_pan,
                          cifra_di_l_pan:array.cifra_di_l_pan,
                          cifra_alc_pan:array.cifra_alc_pan,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_pan",postParams);
         
        }

        public save_cifra_mc(array) {
        let postParams = {
                          cifra_pre_mc:array.cifra_pre_mc,
                          cifra_jefe_mc:array.cifra_jefe_mc,
                          cifra_sena_mc:array.cifra_sena_mc,
                          cifra_di_f_mc:array.cifra_di_f_mc,
                          cifra_di_l_mc:array.cifra_di_l_mc,
                          cifra_alc_mc:array.cifra_alc_mc,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_mc",postParams);
         
        }




        public save_cifra_frente(array) {
        let postParams = {
                          cifra_pre:array.cifra_pre,
                          cifra_jefe:array.cifra_jefe,
                          cifra_sena:array.cifra_sena,
                          cifra_d_f:array.cifra_d_f,
                          cifra_d_l:array.cifra_d_l,
                          cifra_a:array.cifra_a,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_frente",postParams);
         
        }





        public save_cifra_morena(array) {
        let postParams = {
                          cifra_pre_morena:array.cifra_pre_morena,
                          cifra_jefe_morena:array.cifra_jefe_morena,
                          cifra_sena_morena:array.cifra_sena_morena,
                          cifra_df_morena:array.cifra_df_morena,
                          cifra_dl_morena:array.cifra_dl_morena,
                          cifra_alc_morena:array.cifra_alc_morena,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_morena",postParams);
         
        }


        public save_cifra_pt(array) {
        let postParams = {
                          cifra_pre_pt:array.cifra_pre_pt,
                          cifra_jefe_pt:array.cifra_jefe_pt,
                          cifra_sena_pt:array.cifra_sena_pt,
                          cifra_di_f_pt:array.cifra_di_f_pt,
                          cifra_di_l_pt:array.cifra_di_l_pt,
                          cifra_alc_pt:array.cifra_alc_pt,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_pt",postParams);
         
        }

        public save_cifra_pes(array) {
        let postParams = {
                          cifra_pre_pes:array.cifra_pre_pes,
                          cifra_jefe_pes:array.cifra_jefe_pes,
                          cifra_sena_pes:array.cifra_sena_pes,
                          cifra_di_f_pes:array.cifra_di_f_pes,
                          cifra_di_l_pes:array.cifra_di_l_pes,
                          cifra_alc_pes:array.cifra_alc_pes,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_pes",postParams);
         
        }


        public save_cifra_jhh(array) {
        let postParams = {
                          cifra_pre_jhh:array.cifra_pre_jhh,
                          cifra_jefe_jhh:array.cifra_jefe_jhh,
                          cifra_sena_jhh:array.cifra_sena_jhh,
                          cifra_di_f_jhh:array.cifra_di_f_jhh,
                          cifra_di_l_jhh:array.cifra_di_l_jhh,
                          cifra_alc_jhh:array.cifra_alc_jhh,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_jhh",postParams);
         
        }




        public save_cifra_pri(array) {
        let postParams = {
                          cifra_pre_pri:array.cifra_pre_pri,
                          cifra_j_pri:array.cifra_j_pri,
                          cifra_sena_pri:array.cifra_sena_pri,
                          cifra_df_pri:array.cifra_df_pri,
                          cifra_dl_pri:array.cifra_dl_pri,
                          cifra_alc_pri:array.cifra_alc_pri,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_pri",postParams);
         
        }

        public save_cifra_verde(array) {
        let postParams = {
                          cifra_pre_verde:array.cifra_pre_verde,
                          cifra_jefe_verde:array.cifra_jefe_verde,
                          cifra_sena_verde:array.cifra_sena_verde,
                          cifra_di_f_verde:array.cifra_di_f_verde,
                          cifra_di_l_verde:array.cifra_di_l_verde,
                          cifra_alc_verde:array.cifra_alc_verde,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_verde",postParams);
         
        }


        public save_cifra_nalianza(array) {
        let postParams = {
                          cifra_pre_nalianza:array.cifra_pre_nalianza,
                          cifra_jefe_nalianza:array.cifra_jefe_nalianza,
                          cifra_sena_nalianza:array.cifra_sena_nalianza,
                          cifra_di_f_nalianza:array.cifra_di_f_nalianza,
                          cifra_di_l_nalianza:array.cifra_di_l_nalianza,
                          cifra_alc_nalianza:array.cifra_alc_nalianza,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_nalianza",postParams);
         
        }


        public save_cifra_humanista(array) {
        let postParams = {
                          cifra_pre_humanista:array.cifra_pre_humanista,
                          cifra_jefe_humanista:array.cifra_jefe_humanista,
                          cifra_sena_humanista:array.cifra_sena_humanista,
                          cifra_di_f_humanista:array.cifra_di_f_humanista,
                          cifra_di_l_humanista:array.cifra_di_l_humanista,
                          cifra_alc_humanista:array.cifra_alc_humanista,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_humanista",postParams);
         
        }


        public save_cifra_t_mexico(array) {
        let postParams = {
                          cifra_pre_t_mexico:array.cifra_pre_t_mexico,
                          cifra_jefe_t_mexico:array.cifra_jefe_t_mexico,
                          cifra_sena_t_mexico:array.cifra_sena_t_mexico,
                          cifra_di_f_t_mexico:array.cifra_di_f_t_mexico,
                          cifra_di_l_t_mexico:array.cifra_di_l_t_mexico,
                          cifra_alc_t_mexico:array.cifra_alc_t_mexico,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_cifra_t_mexico",postParams);
         
        }






        public save_ubicacion(array) {
        let postParams = {
                          lat:array.lat,
                          lng:array.lng,
                          id_registro:array.id_registro
                          }

        //alert(JSON.stringify(postParams));


         return this.http.post(this.url_mula+"/save_ubicacion",postParams);
         
        }


        public save_reportar(array) {
        let postParams = {
                          nombre_repre:array.nombre_repre,
                          ape_pat_repre:array.ape_pat_repre,
                          ape_mat_repre:array.ape_mat_repre,
                          partido:array.partido,
                          id_registro:array.id_casilla
                          }


         return this.http.post(this.url_mula+"/save_reportar",postParams);
         
        }



        public save_asistencia(array) {
        let postParams = {
                          id_asistente:array.id_asistente,
                          asistencia:array.asistencia,
                          }


         return this.http.post(this.url_mula+"/save_asistencia",postParams);
         
        }


        

        public save_escrito(array) {
        let postParams = {
                          foto_escrito1:array.foto_escrito1,
                          foto_escrito2:array.foto_escrito2,
                          foto_escrito3:array.foto_escrito3,
                          id_registro:array.id_registro
                          }
         return this.http.post(this.url_mula+"/save_escrito",postParams);
         
        }


        




        

        



        


        

}
