import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompteService } from '../services/compte.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-compts',
  templateUrl: './compts.page.html',
  styleUrls: ['./compts.page.scss'],
})
export class ComptsPage implements OnInit {
  iduser: any;
  profv: any;
  idappuser: any;
  id: any;
  utilisateur: any;
  nomu: any;
  domicileu: any;
  prenomu: any;
  datenaissanceu: any;
  lieunaissanceu: any;
  communeu: any;
  professionu: any;
  telephoneu: any;
  profilu: any;
  file: any;
  img: any;
  utilisamodifier: any;
  nom!: string;
  prenom!: string;
  telephone!: string;
  domicile!: string;
  profession!: string;
  commune!: string;
  message: any;

  constructor(private storageService: StorageService, private route: ActivatedRoute,  private compteservice: CompteService)  { }

  back(): void {
    window.history.back()
  }

  ngOnInit() {

    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;
    }
    console.log("user est "+this.iduser )


    this.idappuser = this.route.snapshot.params['idappuser']
    this.id = this.idappuser
    console.log("l'ID est "+this.idappuser)


     this.afficherComptepolicier();

  }

afficherComptepolicier(){
  this.compteservice.getutilisateur(this.iduser).subscribe(data=>{
    this.utilisateur=data;
    this.nomu=this.utilisateur.nom;
    this.prenomu=this.utilisateur.prenom;
    this.domicileu=this.utilisateur.domicile;
    this.datenaissanceu=this.utilisateur.datenaissance;
    this.lieunaissanceu=this.utilisateur.lieunaissance;
    this.professionu=this.utilisateur.profession;
    this.communeu=this.utilisateur.commune;
    this.telephoneu=this.utilisateur.telephone;  
    this.profilu = this.utilisateur.profile;
    console.log("la nom est "+this.nomu)
    console.log("la prenom est "+this.prenomu)
    console.log("la domicile est "+this.domicileu)
  });
}


  fileChang(event:any){
    this.file=event.target["files"][0]
    this.compteservice.modifierprofile(this.iduser, this.file).subscribe(data=>{
      this.img=data;
      this.afficherComptepolicier();
    })
    console.log("azertyusdfghjxcvbnfghj",this.file)

 
  }


  updateimage(){
    this.compteservice.modifierprofile(this.iduser, this.file).subscribe(data=>{
      this.img=data;
    })
     location.reload();
  }


  updateutilisateur(){
    this.compteservice.modifierutilisateur(this.iduser, this.nom, this.prenom, this.domicile, this.telephone, this.profession, this.commune).subscribe(data=>{
        this.utilisamodifier=data;

        this.message = this.utilisamodifier.message
        console.log("azertyusdfghjxcvbnfghj",this.message)
        this.afficherComptepolicier();
    }) 
    // location.reload();  
  }

}
