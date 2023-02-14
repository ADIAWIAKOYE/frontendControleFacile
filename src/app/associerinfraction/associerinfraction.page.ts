import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssocierinfractionService } from '../services/associerinfraction.service';
import { InformationService } from '../services/information.service';
import { InfractionService } from '../services/infraction.service';
import { StorageService } from '../services/stockage.service';
import Swal from 'sweetalert2'

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
  montant: any;
  montantpaye: any;
  amendeee: any;
  amendes: any;
  descriptions: any;
  lieus: any;
  numpermis: any;
  ainfraction: any;
  sanspermis: any;
  Message: any;
  montantt: any;
  stat: any;
  Messages: any;
  statt: any;
  user: any;
  profilu: any;
  constructor(private route: ActivatedRoute,private storageService: StorageService, private serviceinfraction : InfractionService, private associerinfraction : AssocierinfractionService, private informationservice : InformationService) { }

  back(): void {
    window.history.back()
  }

  resetFormassocierinfracion(){

    this.lieu= ''
 
    this.description = ''
 
    this.montantt = ''

    this.numpermis= ''
 
    this.montant = ''
 
 }

 resetFormassocierinfractionSanspermis(){

  this.lieus = ''

  this.descriptions = ''

  this.amendes = ''

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
    
    this.afficheruser();
  }

  submit1() {
    // Code pour envoyer les données de formulaire au serveur ou les enregistrer localement
    console.log("le lieu:", this.lieu);
    console.log("la description:", this.description);
    console.log("le numero de permis:", this.permis);
    console.log("l' amende a payer:", this.montant);
   console.log("le montant payer:", this.montantpaye);
    // console.log("phone:", this.phone);
    // console.log("permis:", this.permis);

    // console.log("cartegrise:", this.inputs);
    }

    associerinfracion(){
       this.associerinfraction.PostInfarction(this.lieu, this.description,  this.montantt, this.iduser, this.numpermis, this.montant, this.id).subscribe(data=>{
            this.ainfraction = data;

            this.Message = this.ainfraction.message
            this.stat = this.ainfraction.status
            console.log("le message de retoure est:", this.Message);
            console.log("le message de retoure est:", this.stat);

            setTimeout (()=>{

              if(this.stat == true){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    heightAuto:false,
                    title: this.Message,
                    showConfirmButton: false,
                     timer: 1500.
                  
                  })
             }else{
              Swal.fire({
                position: 'center',
                icon: 'error',
                heightAuto:false,
                title: this.Message,
                showConfirmButton: false,
                 timer: 1500.
              
              })
             }

            },10)

       })
       
       this.resetFormassocierinfracion()     
    }

    submit2(){
    console.log("le lieu:", this.lieus);
    console.log("la description:", this.descriptions);
    console.log("l' amende a payer:", this.amendes);
    }
      associerinfractionSanspermis(){
        this.associerinfraction.PostInfarctionsanpermis(this.lieus, this.descriptions, this.iduser, this.amendes, this.id).subscribe(data=>{
          this.sanspermis = data;

          this.Messages = this.sanspermis.message;
          this.statt = this.sanspermis.status;
          console.log("le message de retoure est:", this.Messages);
          console.log("le message de retoure est:", this.statt);


          setTimeout (()=>{

            if(this.statt == true){
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  heightAuto:false,
                  title: this.Messages,
                  showConfirmButton: false,
                   timer: 1500.
                
                })
           }else{
            Swal.fire({
              position: 'center',
              icon: 'error',
              heightAuto:false,
              title: this.Messages,
              showConfirmButton: false,
               timer: 1500.
            
            })
           }

          },10)

        })
        this.resetFormassocierinfractionSanspermis();
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
