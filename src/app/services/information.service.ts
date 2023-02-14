import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http: HttpClient) { }

  getutilisateur(idappuser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `utilisateur/afficher/${idappuser}`)
  }




  getuser(idappuser: any):Observable<any>
  {
    return this.http.get<any>(  AUTH_API + `utilisateur/afficherU/${idappuser}`)
  }

}
