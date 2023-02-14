import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformationpolicierService } from '../services/informationpolicier.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-informationpolicier',
  templateUrl: './informationpolicier.page.html',
  styleUrls: ['./informationpolicier.page.scss'],
})
export class InformationpolicierPage implements OnInit {
  iduser: any;
  profv: any;
  idappuser: any;
  id: any;
  policier: any;
  emailu: any;
  domicileu: any;
  prenomu: any;
  nomu: any;
  gradeu: any;
  matriculeu: any;
  telephoneu: any;
  profilu: any;

  constructor( private route: ActivatedRoute, private storageService : StorageService , private policierservice : InformationpolicierService) { }

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

     this.afficherpolicier();

  }


  afficherpolicier(){
    this.policierservice.getpoliciser(this.idappuser).subscribe(data=>{
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
