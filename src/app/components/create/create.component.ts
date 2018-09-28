import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ArbreService } from '../../arbre.service';
import { Arbre } from '../../Arbre';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  especes : any;
  arrondissement : any;
  emplacement : any;
  genre : any;
  hauteur : number;
  genreSearch : any;
  especeSearch : any;
  arrSearch : any;
  empSearch : any;
  libelle : any;
  fields = {
    'libellefrancais' : this.libelle,
    'espece' : this.especeSearch,
    'genre': this.genreSearch,
    'arrondissement': this.arrSearch,
    'typeemplacement' : this.empSearch
  }
  title = 'Ajouter un arbre';
  angForm: FormGroup;
  constructor(private service: ArbreService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      libelle: ['', Validators.required ],
   });
  }
  getEspece() {
    this.service.getEspeces().subscribe(res => {
    this.especes = res;
    console.log(this.especes);
  })
}
  getArrondissement(){
    this.service.getArrondissement().subscribe(res => {
      this.arrondissement = res;
      console.log(this.arrondissement);
    
    })
  }
  getEmplacement(){
    this.service.getEmplacement().subscribe(res => {
      this.emplacement = res;
      console.log(this.emplacement);
    
    })
  }
  getGenre(){
    this.service.getGenres().subscribe(res => {
      this.genre = res;
      console.log(this.genre);
    
    })
  }
  addArbre( /*, date_plantation, circonference, hauteur, espece, adresse, lattitude, longitude, pepiniere, stade_develloppement, remarquable, genre, type_emplacement*/) {
    console.log(this.fields);
    this.service.addArbre(this.fields/*, date_plantation, circonference, hauteur, espece, adresse, lattitude, longitude, pepiniere, stade_develloppement, remarquable, genre, type_emplacement*/);
      this.router.navigate(['index']);
  }
  ngOnInit() {
    this.getEspece();
    this.getArrondissement(); 
    this.getEmplacement();
    this.getGenre();
  }
  genreChange(){
    this.genreSearch = (<HTMLInputElement>document.getElementById("genreSelect")).value;
    console.log(this.genreSearch);
  }
  especeChange(){
    this.especeSearch = (<HTMLInputElement>document.getElementById("especeSelect")).value;
    console.log(this.especeSearch);
  }
  arrChange(){
    this.arrSearch = (<HTMLInputElement>document.getElementById("arrSelect")).value;
    console.log(this.arrSearch);
  }
  typeChange(){
    this.empSearch = (<HTMLInputElement>document.getElementById("typeSelect")).value;
    console.log(this.empSearch);
  }
  libelleChange(){
    this.libelle = (<HTMLInputElement>document.getElementById("libelleS")).value;
    console.log(this.libelle);
  }
}
