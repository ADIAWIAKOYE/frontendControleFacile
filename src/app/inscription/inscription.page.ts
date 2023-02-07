import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { AlertController, IonModal } from '@ionic/angular';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})


export class InscriptionPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  suivant : boolean = true;

  inputs = [{ value: '' }];
  

  // for (let element of inputs) {
  //   console.log(element);
  // }
 
  
  message: any;
  name: any;

  addInput() {

    this.inputs.push({ value: '' });
  }


  removeInput(){
       this.inputs.pop()
  }

  constructor(private alertController: AlertController, private inscriptionservice: InscriptionService) { }

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


 resetForm(){

  this.nom = '';
  this.prenom = '';
  this.profession = '';
  this.domicile = '';
  this.commune = '';
  this.phone = '';
  this.permis = '';
  this.inpute = '';

}

  ngOnInit() {


   }

  nextStep() {
  this.suivant = false;
  this.step++;
  }

  ReturnStep() {
    this.suivant = true;
    this.step--;
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

    errorMessage = '';
    inp: string = "";
    last: string = "";

    onSubmit(){
          
        for (let element of this.inputs) {

          this.inp = this.inp+=element.value+","
          
          
          console.log(element);
        }
        
        this.last = this.inp[this.inp.length-1];
        this.inp =this.inp.substring(0, this.inp.length - 1);

        // console.log("last est :------------------"+this.last);

        // console.log("insput est :------------------"+this.inp);
      // this.inputs.forEach(element => {
    
      // });
      // console.log("Téléphone:------------------"+this.phone);
      // console.log("Cartegrise:------------------"+this.inputs);

      this.inscriptionservice.inscription(this.phone, this.inp, this.nom, this.prenom, this.domicile, this.commune, this.profession, this.permis).subscribe(
        data => {
          // console.log("Téléphone:------------------"+this.phone);
          // console.log("Cartegrise:------------------"+this.inp);

          this.message = data.message;
      
          // console.log("---------------------------------"+this.message)
          // console.log("---------------------------------"+data)

          // error: err => {
          //   this.errorMessage = err.error.message;
          // }
        },
      );
      this.resetForm()
     
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


    cancel() {
      this.modal.dismiss(null, 'cancel');
    }
  
    confirm() {
      this.modal.dismiss(this.name, 'confirm');
    }
  
    onWillDismiss(event: Event) {
      const ev = event as CustomEvent<OverlayEventDetail<string>>;
      if (ev.detail.role === 'confirm') {
        this.message = `Hello, ${ev.detail.data}!`;
      }
    }
}
