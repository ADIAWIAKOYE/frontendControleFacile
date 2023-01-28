import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/stockage.service';
import { VehiculeService } from '../services/vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.page.html',
  styleUrls: ['./vehicule.page.scss'],
})
export class VehiculePage implements OnInit {
  iduser: any;
  vehicule: any;
  id: any;
  marq: any;
  genr: any;
  typ: any;
  idvecule: any;
  genri: any;
  typi: any;
  marqi: any;
  idv: any;
  ifrer: any;
  vicule: any;
  vehic: any;
  idve: any;

  constructor( private vehiculeservice: VehiculeService, private storageService: StorageService,) { }

  ngOnInit() {

    // const idvehicule = this.route.snapshot.params['idvehicule']
    //   this.id = idvehicule
    //   console.log("l'ID est "+idvehicule)



      // this.vehiculeservice.getcartegriseVehicule(idvehicule).subscribe(data=>{
      //   this.idvecule=data;
      //   this.marqi=this.idvecule.marque;
      //   this.genri=this.idvecule.genre;
      //   this.typi=this.idvecule.type;
      //   this.ifrer=this.idvecule.idvehicule;
      //   console.log("la marque est "+ this.marqi)
      //   console.log("la genre est "+this.genri)
      //   console.log("la genre est "+this.typi)
      //   console.log("la idididididiidid est "+this.ifrer)
      // });





    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
    }
    console.log("user est "+this.iduser )

    this.vehiculeservice.getvehicule(this.iduser).subscribe(data=>{
      this.vehicule=data;
      this.vicule= this.vehicule.idvehicule;
    
for(let vehicle of this.vehicule){
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
