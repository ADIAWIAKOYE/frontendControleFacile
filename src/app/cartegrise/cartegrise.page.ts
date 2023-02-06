import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartegriseService } from '../services/cartegrise.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-cartegrise',
  templateUrl: './cartegrise.page.html',
  styleUrls: ['./cartegrise.page.scss'],
})
export class CartegrisePage implements OnInit {
 id: any;
  vecule: any;
  marqi: any;
  genri: any;
  plaq: any;
  typi: any;
  coul: any;
  idvec: any;
  nomi: any;
  prenomi: any;
  datenaissancei: any;
  lieunaissancei: any;
  numpermisi: any;
  numcartegrisei: any;
  datedelivrancei: any;
  datedecheancei: any;
  energii: any;
  carrouserii: any;
  nbplacei: any;
  puissanceadmini: any;
  puissancereeli: any;
  ptaci: any;
  pvi: any;
  coutunitairei: any;
  chassiei: any;
  dpmci: any;
  validite: any;
  iduser: any;
  profv: any;
  routere: any;
  roles: any;
  constructor(private storageService: StorageService, private route: ActivatedRoute, private cartegriseservice: CartegriseService,) { }
 
  back(): void {
    window.history.back()
  }

  ngOnInit() {


    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;

      if (this.roles == 'ROLE_USER'){
        this.routere = 'information'
        // this.suivant =  false;
      }else{
        this.routere = '/informationpolicier'
        // this.suivant = true;
      }
    }
    console.log("user est "+this.iduser )

    const idvehicule = this.route.snapshot.params['idvehicule']
    this.id = idvehicule
    console.log("l'ID est "+idvehicule)





  this.cartegriseservice.getcartegrisVehicule(idvehicule).subscribe(data=>{
    this.vecule=data;
    this.nomi=this.vecule.nom;
    this.prenomi=this.vecule.prenom;
    this.datenaissancei=this.vecule.datenaissance;
    this.lieunaissancei=this.vecule.lieunaissance;
    this.datedelivrancei=this.vecule.datedelivrance;
    this.datedecheancei=this.vecule.dateecheance
    this.numcartegrisei=this.vecule.numcartegrise;
    this.marqi=this.vecule.marque;
    this.genri=this.vecule.genre;
    this.typi=this.vecule.type;
    this.plaq=this.vecule.vehicule.plaqueimatri;
    this.coul=this.vecule.vehicule.couleur;
    this.idvec=this.vecule.vehicule.idvehicule;
    this.numpermisi=this.vecule.utilisateur.permis.numpermis;
    this.energii=this.vecule.energie;
    this.carrouserii=this.vecule.carrouserie;
    this.nbplacei=this.vecule.nbplace;
    this.puissancereeli=this.vecule.puissancereel;
    this.puissanceadmini=this.vecule.puissanceadmin;
    this.ptaci=this.vecule.ptac;
    this.pvi=this.vecule.pv;
    this.coutunitairei=this.vecule.coutunitaire;
    this.chassiei=this.vecule.chassie;
    this.dpmci=this.vecule.dpmc;
    this.validite=this.vecule.status;
    console.log("la nom est "+ this.nomi)
    console.log("la marque est "+ this.marqi)
    console.log("la genre est "+this.genri)
    console.log("la genre est "+this.typi)
    console.log("la plaque est "+this.plaq)
    console.log("la id vehicule est "+this.idvec)
    console.log("la numeropermis est ",this.numpermisi)
  });


  }

  


}
