import { Component, OnInit } from '@angular/core';
import { InformationService } from '../services/information.service';
import { PermisService } from '../services/permis.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-permis',
  templateUrl: './permis.page.html',
  styleUrls: ['./permis.page.scss'],
})
export class PermisPage implements OnInit {
  perm: any;
  iduser: any;
  perminom: any;
  perminum: any;
  permiprenom: any;
  permidatenaissance: any;
  permilieunaissance: any;
  permicommun: any;
  permidomicile: any;
  permiprofession: any;
  permidatelivraison: any;
  permidateecheance: any;
  permicategorie: any;
  permiprofile: any;
  profil: any;
  profv: any;
  routere: any;
  roles: any;
  user: any;
  profilu: any;


  constructor(private permis: PermisService, private storageService: StorageService, private informationservice : InformationService) { }

  back(): void {
    window.history.back()
  }

  ngOnInit() {

    if (this.storageService.isLoggedIn()) {
       this.roles = this.storageService.getUser().roles;
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;

      this.profil=this.iduser.profile;

      if (this.roles == 'ROLE_USER'){
        this.routere = 'information'
        // this.suivant =  false;
      }else{
        this.routere = '/informationpolicier'
        // this.suivant = true;
      }
    }
    console.log("permis est "+this.iduser )

    console.log("profile est "+this.profil )

       this.afficheruser();

       this.afficherpermis();
  }


  afficherpermis(){
        this.permis.getpermis(this.iduser).subscribe(data=>{
      this.perm=data;
      this.perminom=this.perm.permis.nom;
      this.perminum=this.perm.permis.numpermis;
      this.permiprenom=this.perm.permis.prenom;
      this.permidatenaissance=this.perm.permis.datenaissance;
      this.permilieunaissance=this.perm.permis.lieunaissance;
      this.permicommun=this.perm.permis.commune;
      this.permidomicile=this.perm.permis.domicile;
      this.permiprofession=this.perm.permis.profession;
      this.permidatelivraison=this.perm.permis.datedelivrance;
      this.permidateecheance=this.perm.permis.dateecheance;
      this.permiprofile=this.perm.permis.profilepermis;
      this.permicategorie=this.perm.permis.categoriepermis
      console.log("permis est "+this.perm.permis.nom )
      console.log("permis est "+this.perm.permis.numpermis )

      console.log("data est "+this.perm)
    });
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
