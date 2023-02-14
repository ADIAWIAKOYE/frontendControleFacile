import { Component, OnInit } from '@angular/core';
import { InformationService } from '../services/information.service';
import { InfractionService } from '../services/infraction.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  iduser: any;
  alerte: any;
  contenuu: any;
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
  alertenbr: any;

  constructor(private storageService: StorageService, private serviceinfraction : InfractionService, private informationservice: InformationService) {}

  ngOnInit() {
    
    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
    }
    console.log("user est "+this.iduser )

    this.serviceinfraction.getalerte(this.iduser).subscribe(data=>{
      this.alerte=data;
      this.contenuu= this.alerte.contenu;

    });

    this.serviceinfraction.getalertenbr(this.iduser).subscribe(data=>{
      this.alertenbr=data;
      // this.contenuu= this.alerte.contenu;

    });
    this.afficherutilisateur();
  }

  afficherutilisateur(){
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
