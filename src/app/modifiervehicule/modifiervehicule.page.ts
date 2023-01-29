import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModifiervehiculeService } from '../services/modifiervehicule.service';

@Component({
  selector: 'app-modifiervehicule',
  templateUrl: './modifiervehicule.page.html',
  styleUrls: ['./modifiervehicule.page.scss'],
})
export class ModifiervehiculePage implements OnInit {
  id: any;
  vecule: any;
  plaq: any;
  image: any;

  back(): void {
    window.history.back()
  }

  constructor(private route: ActivatedRoute, private modifiervehiculeservice: ModifiervehiculeService) { }

  ngOnInit() {

    const idvehicule = this.route.snapshot.params['idvehicule']
    this.id = idvehicule
    console.log("l'ID est "+idvehicule)


    this.modifiervehiculeservice.getcartegrisVehicule(idvehicule).subscribe(data=>{
      this.vecule=data;
      this.plaq=this.vecule.plaqueimatri;
      this.image=this.vecule.photovehicule;
      console.log("la plaque est "+this.plaq)
      console.log("la photo est "+this.image)
    });

}

}