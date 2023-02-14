import { Component, OnInit } from '@angular/core';
import { AssocierinfractionService } from '../services/associerinfraction.service';
import { InfractionService } from '../services/infraction.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  id: any;
  data!:number
  montant!: number;
  numpermis!: string;
  Message: any;
  idvehicule: any;

  back(): void {
    window.history.back()
  }

  constructor(private associerinfraction : AssocierinfractionService, private infractionservice : InfractionService) { }

  ngOnInit() {

    // const idinfraction = this.route.snapshot.params['idinfraction']
    //   this.id = idinfraction
      console.log("l'ID de l'infraction est "+this.data)
  }

  regleinfraction(){
    this.associerinfraction.PostInfractionRegle(this.montant, this.data, this.numpermis).subscribe(regle=>{

       this.Message = regle.message

       console.log("le message de retour est "+this.Message)
    })
  }

  // ionViewDidEnter(){
  //   this.infractionservice.getinfractionParuser(this.idvehicule).subscribe(datat=>{})
  // }
}
