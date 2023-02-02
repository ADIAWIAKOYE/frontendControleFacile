import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }


  getutilisateur(idappuser: any):Observable<any>
  {
    console.log("id de l'utilisteur:------------------",idappuser);
    return this.http.get<any>(  AUTH_API + `utilisateur/afficher/${idappuser}`)
  }


  modifierprofile(idappuser: any, file : File):Observable<any>
  {
    let data =new FormData();
    data.append("file",file);

    console.log("id du vehicule  est "+idappuser)

    console.log(file)
    return this.http.put<any>(`${AUTH_API}utilisateur/UpdateProfile/${idappuser}`, data)
  }


  modifierutilisateur(idvehicule: any, nom : string,  prenom : string,  domicile : string,  telephone : string,  profession : string, commune : string):Observable<any>
  {
    let data = {
      "nom":nom,
      "prenom":prenom,
      "domicile":domicile,
      "telephone":telephone,
      "profession":profession,
      "commune":commune
      }

    return this.http.put<any>(  AUTH_API + `utilisateur/Update/${idvehicule}`, data)
  }
}
