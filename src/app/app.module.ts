import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
// import { Camera } from '@capacitor/camera';
// import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, QRScanner, BarcodeScanner],
  bootstrap: [AppComponent],
})

export class AppModule {}
