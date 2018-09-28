import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArbreService } from './../../arbre.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  coin: any;
  angForm: FormGroup;
  title = 'Edit Arbre';
  constructor(private route: ActivatedRoute, private router: Router, private service: ArbreService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ]
   });
  }

  updateCoin(recordid, libelle /*, date_plantation, circonference, hauteur, espece, adresse, lattitude, longitude, pepiniere, stade_develloppement, remarquable, genre, type_emplacement*/) {
    this.route.params.subscribe(params => {
    this.service.updateArbre( params['id'],recordid, libelle/*, date_plantation, circonference, hauteur, espece, adresse, lattitude, longitude, pepiniere, stade_develloppement, remarquable, genre, type_emplacement*/);
    this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coin = this.service.editArbre(params['id']).subscribe(res => {
        this.coin = res;
      });
    });
  }
}
