import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformationService } from '../services/information.service';
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
  iduser: any;
  profv: any;
  routere: any;
  user: any;
  profilu: any;

  constructor(private storageService: StorageService, private route: ActivatedRoute, private vehiculeservice: VehiculeService, private informationservice : InformationService) { }

  back(): void {
    window.history.back()
  }

  nextStep() {

    this.suivant = false;
    }

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.roles = this.storageService.getUser().roles;
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;
      if (this.roles == 'ROLE_USER'){
        this.routere = 'information'
        this.suivant =  false;
      }else{
        this.routere = '/informationpolicier'
        this.suivant = true;
      }
      console.log("le role est  "+this.roles)
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

      this.afficheruser();
  }


  afficheruser(){
    this.informationservice.getuser(this.iduser).subscribe(data=>{
      this.user=data;
      // this.nomu=this.utilisateur.nom;
      // this.prenomu=this.utilisateur.prenom;
      // this.domicileu=this.utilisateur.domicile;
      // this.datenaissanceu=this.utilisateur.datenaissance;
      // this.lieunaissanceu=this.utilisateur.lieunaissance;
      // this.professionu=this.utilisateur.profession;
      // this.communeu=this.utilisateur.commune;
      // this.telephoneu=this.utilisateur.telephone;
      this.profilu=this.user.profile;  
      // console.log("la nom est "+this.nomu)
      // console.log("la prenom est "+this.prenomu)
      // console.log("la domicile est "+this.domicileu)
    });
  }

}
