import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompteService } from '../services/compte.service';
import { InformationpolicierService } from '../services/informationpolicier.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-comptepolicier',
  templateUrl: './comptepolicier.page.html',
  styleUrls: ['./comptepolicier.page.scss'],
})
export class ComptepolicierPage implements OnInit {
  iduser: any;
  profv: any;
  idappuser: any;
  id: any;
  policier: any;
  nomu: any;
  prenomu: any;
  domicileu: any;
  emailu: any;
  gradeu: any;
  matriculeu: any;
  telephoneu: any;
  policiermodifier: any;
  message: any;
  nom : string = '';
  email : string = '';
  prenom : string = '';
  adresse : string = '';
  telephone : string = '';
  grade : string = '';
  profileu: any;
  file: any;
  img: any;

  constructor(private storageService: StorageService, private route: ActivatedRoute, private policierservice : InformationpolicierService,  private compteservice: CompteService) { }


  back(): void {
    window.history.back()
  }

  ngOnInit() {

    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;

      // if (this.roles == 'ROLE_USER'){
      //   this.routere = 'information'
      //   // this.suivant =  false;
      // }else{
      //   this.routere = '/informationpolicier'
      //   // this.suivant = true;
     }


     this.idappuser = this.route.snapshot.params['idappuser']
     this.id = this.idappuser
     console.log("l'ID est "+this.idappuser)


    this.afficherpolocier();



  }

  fileChang(event:any){
    this.file=event.target["files"][0]
    this.compteservice.modifierprofilepolicier(this.iduser, this.file).subscribe(data=>{
      this.img=data;
      this.afficherpolocier();
    })
    console.log("azertyusdfghjxcvbnfghj",this.file)

 
  }


  afficherpolocier(){
    this.policierservice.getpoliciser(this.idappuser).subscribe(data=>{
      this.policier=data;
      this.nomu=this.policier.nom;
      this.prenomu=this.policier.prenom;
      this.domicileu=this.policier.domicile;
      this.emailu=this.policier.email;
      this.gradeu=this.policier.grade;
      this.matriculeu=this.policier.matricule;
      this.telephoneu=this.policier.telephone; 
      this.profileu = this.policier.profile;
      console.log("la nom est "+this.nomu)
      console.log("la prenom est "+this.prenomu)
      console.log("la domicile est "+this.domicileu)
    });
  }

  updatepolicier(){
    this.compteservice.modifierPolicier(this.iduser, this.nom, this.prenom, this.adresse, this.telephone, this.email, this.grade).subscribe(data=>{
        // this.policiermodifier=data;

        this.message = data.message
        console.log("azertyusdfghjxcvbnfghj",this.message)

        console.log("la grade est:------------------",this.grade);   
         
        this.afficherpolocier();    
    }) 
   
    
  }

  submit1() {
    // Code pour envoyer les données de formulaire au serveur ou les enregistrer localement
    console.log("la grade est:------------------",this.grade);
  }

}
