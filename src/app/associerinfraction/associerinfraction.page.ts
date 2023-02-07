import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssocierinfractionService } from '../services/associerinfraction.service';
import { InformationService } from '../services/information.service';
import { InfractionService } from '../services/infraction.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-associerinfraction',
  templateUrl: './associerinfraction.page.html',
  styleUrls: ['./associerinfraction.page.scss'],
})
export class AssocierinfractionPage implements OnInit {
  cat: string = "men";
  iduser: any;
  profv: any;
  profil: any;
  idvehicule: any;
  id: any;
  lieu: any;
  description: any;
  permis: any;
  amende: any;
  montantpaye: any;
  amendeee: any;
  amendes: any;
  descriptions: any;
  lieus: any;
  numpermis: any;
  ainfraction: any;
  sanspermis: any;
  message: any;
  montantt: any;
  constructor(private route: ActivatedRoute,private storageService: StorageService, private serviceinfraction : InfractionService, private associerinfraction : AssocierinfractionService) { }

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


    this.serviceinfraction.getamende().subscribe(data=>{
      this.amendeee=data;
      console.log("les amendes sont est"+data )
      for(let amendes of this.amendeee){

        console.log("les montants amendes sont est "+amendes.montant ) 
      }
    });
    
  }

  submit1() {
    // Code pour envoyer les données de formulaire au serveur ou les enregistrer localement
    console.log("le lieu:", this.lieu);
    console.log("la description:", this.description);
    console.log("le numero de permis:", this.permis);
    console.log("l' amende a payer:", this.amende);
   console.log("le montant payer:", this.montantpaye);
    // console.log("phone:", this.phone);
    // console.log("permis:", this.permis);

    // console.log("cartegrise:", this.inputs);
    }

    associerinfracion(){
       this.associerinfraction.PostInfarction(this.lieu, this.description,  this.montantt, this.iduser, this.numpermis, this.amendes, this.id).subscribe(data=>{
            this.ainfraction = data;
            this.message = data.message

            console.log("le message de retoure est:", this.message);
       })
    }

    submit2(){
    console.log("le lieu:", this.lieus);
    console.log("la description:", this.descriptions);
    console.log("l' amende a payer:", this.amendes);
    }
      associerinfractionSanspermis(){
        this.associerinfraction.PostInfarctionsanpermis(this.lieus, this.description, this.iduser, this.amendes, this.id).subscribe(data=>{
          this.sanspermis = data;
        })
      }
}
