import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class InfractionService {

  constructor(private http : HttpClient) { }

  getinfraction(idappuser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `infraction/infractionparutilisateur/${idappuser}`)
  }



  getalerte(idappuser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `alerte/afficheramende/${idappuser}`)
  }


  getinfractionParuser(idvehicule: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `infraction/infractionparvehicule/${idvehicule}`)
  }

}
