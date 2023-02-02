import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptepolicier',
  templateUrl: './comptepolicier.page.html',
  styleUrls: ['./comptepolicier.page.scss'],
})
export class ComptepolicierPage implements OnInit {

  constructor() { }

  back(): void {
    window.history.back()
  }

  ngOnInit() {
  }

}
