import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class ModifiervehiculeService {

  constructor(private http: HttpClient) { }

  getcartegrisVehicule(idvehicule: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `vehicule/afficherParId/${idvehicule}`)
  }

  modifierimageVehicule(idvehicule: any, couleur : any):Observable<any>
  {
    let data = {
      "couleur":couleur
      }

    return this.http.put<any>(  AUTH_API + `vehicule/update/${idvehicule}`, data)
  }


  modiimageVehicule(idvehicule: any, file : File):Observable<any>
  {
    let data =new FormData();
    data.append("file",file);

    console.log("id du vehicule  est "+idvehicule)

    console.log(file)
    return this.http.put<any>(    `${AUTH_API}vehicule/updateImage/${idvehicule}`, data)
  }


}
