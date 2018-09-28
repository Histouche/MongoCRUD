import { ArbreService } from './../../arbre.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Arbre } from '../../Arbre';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  arbres: any;
  especes : any;
  arrondissement : any;
  emplacement : any;
  genre : any;

  genreSearch : any;
  especeSearch : any;
  arrSearch : any;
  empSearch : any;

  constructor(private http: HttpClient, private service: ArbreService) {}

  ngOnInit() {
    this.getArbres();
    this.getEspece();
    this.getArrondissement(); 
    this.getEmplacement();
    this.getGenre();
  }

  search(){
    this.service.getArbresFiltre( this.genreSearch, this.especeSearch, this.arrSearch, this.empSearch).subscribe(res => {
      this.arbres = res;
    });
  }
  getArbres() {
    this.service.getArbres().subscribe(res => {
      this.arbres = res;
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

  deleteArbre(id) {
    this.service.deleteArbre(id).subscribe(res => {
      console.log('Deleted');
    });
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
}
