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


  constructor(private permis: PermisService, private storageService: StorageService,) { }

  ngOnInit() {

    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
    }
    console.log("permis est "+this.iduser )

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
