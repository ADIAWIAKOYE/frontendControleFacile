import { Component, OnInit } from '@angular/core';
import { InformationService } from '../services/information.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  iduser: any;
  profv: any;
  utilisateur: any;
  nomu: any;
  prenomu: any;
  domicileu: any;
  datenaissanceu: any;
  lieunaissanceu: any;
  professionu: any;
  communeu: any;
  telephoneu: any;
  profilu: any;

  constructor(private storageService: StorageService, private informationservice: InformationService) {}

  ngOnInit() {
    
    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;
    }
    console.log("user est "+this.iduser )
    console.log("profile est "+this.profv )

    this.Afficherutilisateur();
  }
  

  Afficherutilisateur(){
    this.informationservice.getutilisateur(this.iduser).subscribe(data=>{
      this.utilisateur=data;
      this.nomu=this.utilisateur.nom;
      this.prenomu=this.utilisateur.prenom;
      this.domicileu=this.utilisateur.domicile;
      this.datenaissanceu=this.utilisateur.datenaissance;
      this.lieunaissanceu=this.utilisateur.lieunaissance;
      this.professionu=this.utilisateur.profession;
      this.communeu=this.utilisateur.commune;
      this.telephoneu=this.utilisateur.telephone;
      this.profilu=this.utilisateur.profile;  
      // console.log("la nom est "+this.nomu)
      // console.log("la prenom est "+this.prenomu)
      // console.log("la domicile est "+this.domicileu)
    });
  }

}
