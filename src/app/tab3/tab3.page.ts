import { Component, OnInit } from '@angular/core';
import { InfractionService } from '../services/infraction.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  iduser: any;
  alerte: any;
  contenuu: any;

  constructor(private storageService: StorageService, private serviceinfraction : InfractionService) {}

  ngOnInit() {
    
    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
    }
    console.log("user est "+this.iduser )

    this.serviceinfraction.getalerte(this.iduser).subscribe(data=>{
      this.alerte=data;
      this.contenuu= this.alerte.contenu;

    });
  }

}
