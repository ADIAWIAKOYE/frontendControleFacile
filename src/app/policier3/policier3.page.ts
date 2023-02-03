import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../services/vehicule.service';

@Component({
  selector: 'app-policier3',
  templateUrl: './policier3.page.html',
  styleUrls: ['./policier3.page.scss'],
})
export class Policier3Page implements OnInit {
  vehicul: any;
  idve: any;
  vehic: any;
  genr: any;
  marq: any;
  typ: any;
  idv: any;

  constructor( private  vehiculeservice : VehiculeService) { }


  ngOnInit() {

    this.vehiculeservice.getlistervehicule().subscribe(data=>{
      this.vehicul=data;


      for(let vehicle of this.vehicul){
        console.log("permis est "+vehicle.plaqueimatri)
        console.log("id vehicule est "+vehicle.idvehicule)
        this.idve = vehicle.idvehicule;   
     
        this.vehiculeservice.getcartegriseVehicule(this.idve).subscribe(data=>{
         this.vehic=data;
         this.marq=this.vehic.marque;
         this.genr=this.vehic.genre;
         this.typ=this.vehic.type;
         this.idv=this.vehic.idvehicule;
         console.log("la marque est "+this.marq)
         console.log("la genre est "+this.genr)
         console.log("la genre est "+this.typ)
         console.log("la id vehicule est "+this.idve)
       });
     }

    });
  }

}
