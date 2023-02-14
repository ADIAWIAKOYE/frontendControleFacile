import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformationService } from '../services/information.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  idappuser: any;
  id: any;
  utilisateur: any;
  nomu: any;
  prenomu: any;
  domicileu: any;
  datenaissanceu: any;
  lieunaissanceu: any;
  professionu: any;
  communeu: any;
  telephoneu: any;
  iduser: any;
  profv: any;
  profilu: any;

  constructor(private storageService: StorageService, private route: ActivatedRoute,  private informationservice: InformationService) { }

  back(): void {
    window.history.back()
  }

  ngOnInit() {

    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;
    }
    console.log("user est "+this.iduser )

    this.idappuser = this.route.snapshot.params['idappuser']
    this.id = this.idappuser
    console.log("l'ID est "+this.idappuser)

    this.informationservice.getutilisateur(this.idappuser).subscribe(data=>{
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
      console.log("la nom est "+this.nomu)
      console.log("la prenom est "+this.prenomu)
      console.log("la domicile est "+this.domicileu)
    });

  }

}
