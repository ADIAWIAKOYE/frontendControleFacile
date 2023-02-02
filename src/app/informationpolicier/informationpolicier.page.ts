import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informationpolicier',
  templateUrl: './informationpolicier.page.html',
  styleUrls: ['./informationpolicier.page.scss'],
})
export class InformationpolicierPage implements OnInit {

  constructor() { }

  back(): void {
    window.history.back()
  }

  ngOnInit() {
  }

}
