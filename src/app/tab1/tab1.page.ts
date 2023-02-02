import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  iduser: any;
  profv: any;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    
    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;
    }
    console.log("user est "+this.iduser )
    console.log("profile est "+this.profv )
  }
  
}
