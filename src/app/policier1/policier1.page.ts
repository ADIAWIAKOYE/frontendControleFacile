import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-policier1',
  templateUrl: './policier1.page.html',
  styleUrls: ['./policier1.page.scss'],
})
export class Policier1Page implements OnInit {
  iduser: any;
  profv: any;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;
    }
    console.log("user est "+this.iduser )
    console.log("profile est "+this.profv )
  }

}
