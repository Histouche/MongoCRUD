import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
//import 'rxjs/add/operator/map';

@Injectable()
export class ArbreService {

  result: any;
  constructor(private http: HttpClient) {}

  addArbre(fields /*, date_plantation, circonference, hauteur, espece, adresse, lattitude, longitude, pepiniere, stade_develloppement, remarquable, genre, type_emplacement*/) {
    const uri = 'http://localhost:4000/arbres/add';
    const obj = {
      fields: fields,
      /*date_plantation: date_plantation,
      circonference : circonference,
      hauteur: hauteur,
      espece: espece,
      adresse : adresse,
      lattitude : lattitude,
      longitude: longitude,
      pepiniere: pepiniere,
      stade_develloppement: stade_develloppement,
      remarquable: remarquable,
      genre: genre,
      type_emplacement: type_emplacement*/
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log(obj));
  }

  getArbres() {
    const uri = 'http://localhost:4000/arbres';
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
  
  getArbresFiltre(genre, espece, arr, emp){
    const uri = 'http://localhost:4000/arbres/filtre/'+genre+'/'+espece+'/'+arr+'/'+emp;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
  
getEspeces(){
  const uri = 'http://localhost:4000/arbres/especes';
  return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
}

getArrondissement(){
  const uri = 'http://localhost:4000/arbres/arrondissement';
  return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
}

getGenres(){
  const uri = 'http://localhost:4000/arbres/genre';
  return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
}

getEmplacement(){
  const uri = 'http://localhost:4000/arbres/emplacement';
  return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
}

  editArbre(id) {
    const uri = 'http://localhost:4000/arbres/edit/' + id;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }

  updateArbre(id,recordid, fields/*, date_plantation, circonference, hauteur, espece, adresse, lattitude, longitude, pepiniere, stade_develloppement, remarquable, genre, type_emplacement*/) {
    const uri = 'http://localhost:4000/arbres/update/' + id;

    const obj = {
      id: id,
      recordid: recordid,
      fields: fields,
      /*date_plantation: date_plantation,
      circonference : circonference,
      hauteur: hauteur,
      espece: espece,
      adresse : adresse,
      lattitude : lattitude,
      longitude: longitude,
      pepiniere: pepiniere,
      stade_develloppement: stade_develloppement,
      remarquable: remarquable,
      genre: genre,
      type_emplacement: type_emplacement*/
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteArbre(id) {
    const uri = 'http://localhost:4000/arbres/delete/' + id;

        return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
}
