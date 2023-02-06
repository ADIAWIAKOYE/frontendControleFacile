import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StorageService } from '../services/stockage.service';
// import { BarcodeScannerr } from '@capacitor-community/barcode-scanner';
// import { Component } from '@angular/core';
// import { Camera } from '@capacitor/camera';


@Component({
  selector: 'app-policier2',
  templateUrl: './policier2.page.html',
  styleUrls: ['./policier2.page.scss'], 
})
export class Policier2Page implements OnInit {
  
  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  code: any;
  iduser: any;
  profv: any;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  constructor(private storageService: StorageService, private qrScanner: QRScanner, private barcodeScanner: BarcodeScanner) {
    // this.scancode();
   }

  //  async checkPermission() {
  //   return new Promise(async (resolve, reject) => {
  //     const status = await BarcodeScanner.checkPermission({ force: true });
  //     if (status.granted) {
  //       resolve(true);
  //     } else if (status.denied) {
  //       BarcodeScanner.openAppSettings();
  //       resolve(false);
  //     }
  //   });
  // }

scan(){
  this.barcodeScanner.scan().then(barcodeData => {
    
    this.code = barcodeData.text;
    console.log('Barcode data', this.code);
   }).catch(err => {
       console.log('Error', err);
   });
}

  // scancode() {
  //   this.qrScanner.show()
  //   this.qrScanner.prepare()
  //   .then((status: QRScannerStatus) => {
  //      if (status.authorized) {
  //        // camera permission was granted
  
  //        // start scanning
  //        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //          console.log('Scanned something', text);
  
  //          this.qrScanner.hide(); // hide camera preview
  //          scanSub.unsubscribe(); // stop scanning
  //        });
  
  //      } else if (status.denied) {
  //        // camera permission was permanently denied
  //        // you must use QRScanner.openSettings() method to guide the user to the settings page
  //        // then they can grant the permission from there
  //      } else {
  //        // permission was denied, but not permanently. You can ask for permission again at a later time.
  //      }
  //   })
  //   .catch((e: any) => console.log('Error is', e));
  // }

  ngOnInit() {
    // this.scancode();
    // .show

    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;
    }
    console.log("user est "+this.iduser )
    console.log("profile est "+this.profv )
  }

}
