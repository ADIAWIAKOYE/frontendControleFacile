import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http:HttpClient) { }

  getvehicule(iduser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `vehicule/user/${iduser}`)
  }


  getcartegriseVehicule(idvehicule: any):Observable<any>
  {
     console.log("la je suis id de vehicule est "+ idvehicule)
    return this.http.get<any>(  AUTH_API + `cartegrise/vehiculeCarvehicule/${idvehicule}`)
  }


  getcartegriVehicule(idvehicule: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `vehicule/user/${idvehicule}`)
  }
}
