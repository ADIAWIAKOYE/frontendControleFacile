import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associerinfraction',
  templateUrl: './associerinfraction.page.html',
  styleUrls: ['./associerinfraction.page.scss'],
})
export class AssocierinfractionPage implements OnInit {
  cat: string = "men";
  constructor() { }

  back(): void {
    window.history.back()
  }

  ngOnInit() {
    
  }

}
