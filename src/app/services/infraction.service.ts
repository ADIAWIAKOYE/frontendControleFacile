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


  getinfractionnbr(idappuser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `infraction/infractionparutilisateurnbre/${idappuser}`)
  }



  getalerte(idappuser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `alerte/afficheramendedate/${idappuser}`)
  }


  getalertenbr(idappuser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `alerte/afficheramendenbr/${idappuser}`)
  }


  getinfractionParuser(idvehicule: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `infraction/infractionparvehicule/${idvehicule}`)
  }


  getamende():Observable<any>
  {
    return this.http.get(  AUTH_API + `amende/afficheramende`)
  }



  postinfractionavecpermis(telephone: string, password: string):Observable<any>
  {
    return this.http.post(  AUTH_API + `amende/afficheramende`,
    {
      telephone,
      password,
    },)
  }

}
