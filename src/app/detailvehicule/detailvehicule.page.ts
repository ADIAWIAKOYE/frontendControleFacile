import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/stockage.service';
import { VehiculeService } from '../services/vehicule.service';

@Component({
  selector: 'app-detailvehicule',
  templateUrl: './detailvehicule.page.html',
  styleUrls: ['./detailvehicule.page.scss'],
})
export class DetailvehiculePage implements OnInit {

  suivant : boolean = true;
  roles: any;
  id: any;
  idvecule: any;
  marqi: any;
  typi: any;
  genri: any;
  plaq: any;
  vecule: any;
  coul: any;
  idvec: any;

  constructor(private storageService: StorageService, private route: ActivatedRoute, private vehiculeservice: VehiculeService,) { }

  nextStep() {

    this.suivant = false;
    }

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.roles = this.storageService.getUser().roles;
      if (this.roles == 'ROLE_USER'){
        this.suivant ==  false;
      }
    }


    const idvehicule = this.route.snapshot.params['idvehicule']
      this.id = idvehicule
      console.log("l'ID est "+idvehicule)



      this.vehiculeservice.getcartegriseVehicule(idvehicule).subscribe(data=>{
        this.vecule=data;
        this.marqi=this.vecule.marque;
        this.genri=this.vecule.genre;
        this.typi=this.vecule.type;
        this.plaq=this.vecule.vehicule.plaqueimatri;
        this.coul=this.vecule.vehicule.couleur;
        this.idvec=this.vecule.vehicule.idvehicule;
        console.log("la marque est "+ this.marqi)
        console.log("la genre est "+this.genri)
        console.log("la genre est "+this.typi)
        console.log("la plaque est "+this.plaq)
        console.log("la id vehicule est "+this.idvec)
      });
  }

}
