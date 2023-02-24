import { Component, OnInit } from '@angular/core';
import { InformationpolicierService } from '../services/informationpolicier.service';
import { StorageService } from '../services/stockage.service';
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
  iduser: any;
  profv: any;
  policier: any;
  nomu: any;
  prenomu: any;
  domicileu: any;
  emailu: any;
  gradeu: any;
  matriculeu: any;
  telephoneu: any;
  profilu: any;
  vehicul2: any;

  constructor(private storageService: StorageService, private  vehiculeservice : VehiculeService, private policierservice : InformationpolicierService) { }

  filterTerm!: string;
  ngOnInit() {

    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;
    }
    console.log("user est "+this.iduser )
    console.log("profile est "+this.profv )

    this.vehiculeservice.getlistervehicule().subscribe(data=>{
      this.vehicul=data;

        this.filterTerm = '';
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
    this.afficherpolicier();

    this.listedesvehicule();
  }

  listedesvehicule(){
    this.vehiculeservice.getlistervehicule2().subscribe(data=>{
      this.vehicul2=data;
    })
  }

  afficherpolicier(){
    this.policierservice.getpoliciser(this.iduser).subscribe(data=>{
      this.policier=data;
      this.nomu=this.policier.nom;
      this.prenomu=this.policier.prenom;
      this.domicileu=this.policier.domicile;
      this.emailu=this.policier.email;
      this.gradeu=this.policier.grade;
      this.matriculeu=this.policier.matricule;
      this.telephoneu=this.policier.telephone; 
      this.profilu=this.policier.profile; 
      console.log("la nom est "+this.nomu)
      console.log("la prenom est "+this.prenomu)
      console.log("la domicile est "+this.domicileu)
    });
  }

}
