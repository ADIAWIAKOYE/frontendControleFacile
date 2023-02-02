import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModifiervehiculeService } from '../services/modifiervehicule.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-modifiervehicule',
  templateUrl: './modifiervehicule.page.html',
  styleUrls: ['./modifiervehicule.page.scss'],
})
export class ModifiervehiculePage implements OnInit {
  id: any;
  vecule: any;
  plaq: any;
  image: any;
  cul: any;
  couleur: any;
  modif: any;
  idvehile!: number;
  idvehicule!:number
  Message: any;
  file: any;
  img: any;
  iduser: any;
  profv: any;

  back(): void {
    window.history.back()
  }

  constructor(private route: ActivatedRoute, private modifiervehiculeservice: ModifiervehiculeService, private storageService: StorageService) { }

  ngOnInit() {

    if (this.storageService.isLoggedIn()) {
      this.iduser = this.storageService.getUser().idappuser;
      this.profv=this.storageService.getUser().profile;
    }
    console.log("user est "+this.iduser )

     this.idvehicule = this.route.snapshot.params['idvehicule']
    this.id = this.idvehicule
    console.log("l'ID est "+this.idvehicule)


    this.modifiervehiculeservice.getcartegrisVehicule(this.idvehicule).subscribe(data=>{
      this.vecule=data;
      this.plaq=this.vecule.plaqueimatri;
      this.image=this.vecule.photovehicule;
      this.cul=this.vecule.couleur;
      console.log("la plaque est "+this.plaq)
      console.log("la photo est "+this.image)
      console.log("la couleur est "+this.cul)
    });


}

updateEmployee() {
  this.modifiervehiculeservice.modifierimageVehicule(this.idvehicule, this.couleur).subscribe(data=>{
        this.modif=data;

       this.Message=data.message;

       console.log("la message  est "+this.Message)
  });
  location.reload();
      }


      fileChang(event:any){
        this.file=event.target["files"][0]

        console.log("azertyusdfghjxcvbnfghj",this.file)
      }


      updateimage(){
        this.modifiervehiculeservice.modiimageVehicule(this.idvehicule, this.file).subscribe(data=>{
          this.img=data;
        })
        // location.reload();
      }




}