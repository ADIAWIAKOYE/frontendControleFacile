import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor() { }
  telephone!: string;
  password!: string;

  ngOnInit() {
  }

  submit() {
    // Code pour envoyer les données de formulaire au serveur ou les enregistrer localement
    console.log("telephone:", this.telephone);
    console.log("password:", this.password);
    


    
    }
}
