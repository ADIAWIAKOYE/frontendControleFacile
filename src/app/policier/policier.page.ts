import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-policier',
  templateUrl: './policier.page.html',
  styleUrls: ['./policier.page.scss'],
})
// export class PolicierPage implements OnInit {
  export class PolicierPage {

  constructor(private storageService: StorageService) { }

  // ngOnInit() {
  // }

}
