import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/stockage.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { InfractionService } from '../services/infraction.service';
import { VehiculeService } from '../services/vehicule.service';
import Swal from 'sweetalert2'
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-detailinfraction',
  templateUrl: './detailinfraction.page.html',
  styleUrls: ['./detailinfraction.page.scss'],
})
export class DetailinfractionPage implements OnInit {

  suivant : boolean = true;
  statuss : boolean = true;
  iduser: any;
  profv: any;
  roles: any;
  id: any;
  infraction: any;
  idve: any;
  vecule: any;
  marqi: any;
  genri: any;
  typi: any;
  coul: any;
  plaq: any;
  idvec: any;
  routere: any;
  user: any;
  profilu: any;

  constructor(private route: ActivatedRoute,  private vehiculeservice: VehiculeService, private storageService: StorageService, private modalController: ModalController, private infractionservice : InfractionService, private alertController: AlertController, private informationservice : InformationService ) { }


  


  back(): void {
    window.history.back()
  }
  idinfraction: any

  async presentModal(idinfraction: number) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'data': idinfraction, 
      },
      breakpoints: [0.5],
      initialBreakpoint: 0.5
      
    });
    return await modal.present();
  }


  nextStep() {

    this.suivant = false;

    this.statuss = false;
    }

    onclick()
    {
      // Swal.fire('Any fool can use a computer')

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }

  ngOnInit() {

    

    if (this.storageService.isLoggedIn()) {
      this.roles = this.storageService.getUser().roles;
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;

      if (this.roles == 'ROLE_USER'){
        this.routere = 'information'
        this.suivant =  false;
      }else{
        this.routere = '/informationpolicier'
        this.suivant = true;
      }
    }
    console.log("user est "+this.iduser )
    console.log("le role est "+this.roles )








    const idvehicule = this.route.snapshot.params['idvehicule']
      this.id = idvehicule
      console.log("l'ID est "+idvehicule)


      this.vehiculeservice.getcartegriseVehicule(idvehicule).subscribe(data=>{
        this.vecule=data;
        this.marqi=this.vecule.marque;
        this.genri=this.vecule.genre;
        this.typi=this.vecule.type;
        this.plaq=this.vecule.vehicule.plaqueimatri;
        this.coul=this.vecule.vehicule.couleur;
        this.idvec=this.vecule.vehicule.idvehicule;
        console.log("la marque est "+ this.marqi)
        console.log("la genre est "+this.genri)
        console.log("la genre est "+this.typi)
        console.log("la plaque est "+this.plaq)
        console.log("la id vehicule est "+this.idvec)
      });


      this.infractionservice.getinfractionParuser(idvehicule).subscribe(data=>{
        this.infraction=data;
        console.log("infraction est "+this.infraction)



        for(let infractions of this.infraction){
          console.log("la description de l'infraction est "+infractions.description)
          console.log("le lieu de l'infraction est "+infractions.lieu)
          console.log("les status sont  est "+infractions.status)
          //this.idve = infractions.idvehicule;
          // if (infractions.status = false){
          //   this.statuss =  true;
          // }else  {
          //   this.statuss = false;
          // }
          console.log("id vehicule est "+ infractions.idvehicule)
        }
      });

      this.afficheruser();
  }





  async presentAlert() {
    const alert = await this.alertController.create({
      
      header: 'Please enter your info',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
     ],
    });

    await alert.present();
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
