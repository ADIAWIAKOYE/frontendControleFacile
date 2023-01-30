import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) { }

  inscription(telephone: string, numcartegrise: any, nom: string, prenom: string, adresse: string, commune: string, profession: string, numpermis: string): Observable<any> {
    let data = new FormData();

    data.append("telephone", telephone);
    data.append("numcartegrise", numcartegrise);
    data.append("nom", nom);
    data.append("prenom", prenom);
    data.append("adresse", adresse);
    data.append("commune", commune);
    data.append("profession", profession);
    data.append("numpermis", numpermis);
    console.log("nomservice:------------------",nom);
    console.log("prenomservice:------------------",prenom);
    console.log("adresseservice:------------------",adresse);
    console.log("communeservice:------------------",commune);
    console.log("professionservice:------------------",profession);
    console.log("numpermisservice:------------------",numpermis);
    console.log("Téléphoneservice:------------------",telephone);
    console.log("Cartegriseservice:------------------",numcartegrise);
    return this.http.post(
      AUTH_API + 'utilisateur/user/registe', data);
  }
}
