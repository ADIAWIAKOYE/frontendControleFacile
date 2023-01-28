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
  constructor(private storageService: StorageService, private route: ActivatedRoute, private cartegriseservice: CartegriseService,) { }


  ngOnInit() {
    const idvehicule = this.route.snapshot.params['idvehicule']
  this.id = idvehicule
  console.log("l'ID est "+idvehicule)





  this.cartegriseservice.getcartegrisVehicule(idvehicule).subscribe(data=>{
    this.vecule=data;
    this.nomi=this.vecule.nom;
    this.marqi=this.vecule.marque;
    this.genri=this.vecule.genre;
    this.typi=this.vecule.type;
    this.plaq=this.vecule.vehicule.plaqueimatri;
    this.coul=this.vecule.vehicule.couleur;
    this.idvec=this.vecule.vehicule.idvehicule;
    console.log("la nom est "+ this.nomi)
    console.log("la marque est "+ this.marqi)
    console.log("la genre est "+this.genri)
    console.log("la genre est "+this.typi)
    console.log("la plaque est "+this.plaq)
    console.log("la id vehicule est "+this.idvec)
  });


  }

  


}
