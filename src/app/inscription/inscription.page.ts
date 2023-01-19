import { Component, OnInit } from '@angular/core';
import { type } from 'os';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})


export class InscriptionPage implements OnInit {
  
  suivant : boolean = true;

  inputs = [{ value: '' }];

  addInput() {

    this.inputs.push({ value: '' });
  }


  removeInput(){
       this.inputs.pop()
  }

  constructor(private alertController: AlertController) { }

  step = 1;
  nom!: string;
  prenom!: string;
  profession!: string;
  domicile!: string;
  commune!: string;
  phone!: string;
  permis!: string;
  cartegrise!: string;
  inpute! : any;
 type!:string;

  ngOnInit() {


   }

  nextStep() {
  this.suivant = false;
  this.step++;
  }

  addinput(){
    

  }

  submit() {
    // Code pour envoyer les données de formulaire au serveur ou les enregistrer localement
    console.log("nom:", this.nom);
    console.log("prenom:", this.prenom);
    console.log("profession:", this.profession);
    console.log("domicile:", this.domicile);
    console.log("commune:", this.commune);
    console.log("phone:", this.phone);
    console.log("permis:", this.permis);

    console.log("cartegrise:", this.inputs);


    
    }



    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'basic-alert',
        header: 'Alert Header',
        subHeader: 'Alert Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }


}
