import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class CartegriseService {

  constructor(private http:HttpClient) { }


  getcartegrisVehicule(idvehicule: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `cartegrise/vehiculeCarvehicule/${idvehicule}`)
  }
}
