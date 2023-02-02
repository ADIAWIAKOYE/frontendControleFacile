import { Component, OnInit } from '@angular/core';
import { InfractionService } from '../services/infraction.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  iduser: any;
  infraction: any;
  desciption: any;

  constructor(private storageService: StorageService, private serviceinfraction : InfractionService) {}

  ngOnInit() {
    
    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
    }
    console.log("user est "+this.iduser )


    this.serviceinfraction.getinfraction(this.iduser).subscribe(data=>{
      this.infraction=data;
      this.desciption= this.infraction.desciption;

      console.log("mes trucs"+JSON.stringify(data[0][0]))
      for(let infractions of this.infraction){

        console.log("la plaque d'imatriculation est "+infractions.plaqueimatri)

      }
    });
  }
  
}
