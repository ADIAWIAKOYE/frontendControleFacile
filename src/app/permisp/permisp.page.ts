import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  

  constructor(private route: ActivatedRoute, private permis: PermisService, private storageService: StorageService,) { }

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

  }

}
