import { Component, OnInit } from '@angular/core';
import { InformationpolicierService } from '../services/informationpolicier.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-policier1',
  templateUrl: './policier1.page.html',
  styleUrls: ['./policier1.page.scss'],
})
export class Policier1Page implements OnInit {
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

  constructor(private storageService: StorageService, private policierservice : InformationpolicierService) { }

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;
    }
    console.log("user est "+this.iduser )
    console.log("profile est "+this.profv )

    this.afficherpolicier();
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
