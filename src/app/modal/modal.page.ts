import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  id: any;

  back(): void {
    window.history.back()
  }

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {

    const idinfraction = this.route.snapshot.params['idinfraction']
      this.id = idinfraction
      console.log("l'ID de l'infraction est "+idinfraction)
  }

}
