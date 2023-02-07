import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class AssocierinfractionService {

  constructor(private http : HttpClient) { }

  PostInfarction(lieu: string, description : string, montantt : string, idappuser : number, numpermis : string, montant : string, idvehicule : number):Observable<any>
  {
    let data =new FormData();
    data.append("lieu", lieu);
    data.append("description", description);
    data.append("montantt", montantt);

    console.log("la description est:------------------",description);
    console.log("le id de l'utilisateur est:",idappuser);
    console.log("le id du vehicule est:",idvehicule);
    return this.http.post<any>(  AUTH_API + `infraction/saveinfractionavecpermis/${idappuser}/${numpermis}/${montant}/${idvehicule}`, data)
  }

  PostInfarctionsanpermis(lieu: string, descriptions : string, idappuser : number, montant : number, idvehicule : number):Observable<any>
  {
    let data =new FormData();
    data.append("lieu", lieu);
    data.append("descriptions", descriptions);

    console.log("la description est:------------------",descriptions);
    return this.http.post<any>(  AUTH_API + `infraction/saveinfractionsanspermis/${idappuser}/${montant}/${idvehicule}`, data)
  }
}
