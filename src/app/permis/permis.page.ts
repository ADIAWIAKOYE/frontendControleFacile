import { Component, OnInit } from '@angular/core';
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


  constructor(private permis: PermisService, private storageService: StorageService,) { }

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

    console.log("profile est "+this.profil )

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
    });
  }

}
