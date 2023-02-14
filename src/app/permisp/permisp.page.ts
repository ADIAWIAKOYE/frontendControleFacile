import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformationService } from '../services/information.service';
import { PermisService } from '../services/permis.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-permisp',
  templateUrl: './permisp.page.html',
  styleUrls: ['./permisp.page.scss'],
})
export class PermispPage implements OnInit {
  iduser: any;
  profv: any;
  profil: any;
  idvehicule: any;
  id: any;
  perm: any;
  perminomp: any;
  perminump: any;
  permiprenomp: any;
  permidatenaissancep: any;
  permilieunaissancep: any;
  permicommunp: any;
  permidomicilep: any;
  permiprofessionp: any;
  permidatelivraisonp: any;
  permidateecheancep: any;
  permiprofilep: any;
  permicategoriep: any;
  user: any;
  profilu: any;
  

  constructor(private route: ActivatedRoute, private permis: PermisService, private storageService: StorageService, private informationservice : InformationService) { }

  back(): void {
    window.history.back()
  }

  ngOnInit() {

    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;

      this.profil=this.iduser.profile;
    }
    console.log("permis est "+this.iduser )

    console.log("profile est "+this.profv )

    this.idvehicule = this.route.snapshot.params['idvehicule']
    this.id = this.idvehicule
    console.log("l'ID du vehicule est "+this.idvehicule)


    this.permis.getpermisparvehicule(this.idvehicule).subscribe(data=>{
      this.perm=data;
      this.perminomp=this.perm.nom;
      this.perminump=this.perm.numpermis;
      this.permiprenomp=this.perm.prenom;
      this.permidatenaissancep=this.perm.datenaissance;
      this.permilieunaissancep=this.perm.lieunaissance;
      this.permicommunp=this.perm.commune;
      this.permidomicilep=this.perm.domicile;
      this.permiprofessionp=this.perm.profession;
      this.permidatelivraisonp=this.perm.datedelivrance;
      this.permidateecheancep=this.perm.dateecheance;
      this.permiprofilep=this.perm.profilepermis;
      this.permicategoriep=this.perm.categoriepermis;
      console.log("permis est "+this.perm.nom )
      console.log("permis est "+this.perm.numpermis )
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
