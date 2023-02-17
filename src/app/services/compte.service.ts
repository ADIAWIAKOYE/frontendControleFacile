import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
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


  modifierutilisateur(idappuser: any, nom : string,  prenom : string,  domicile : string,  telephone : string,  profession : string, commune : string):Observable<any>
  {
    let data =new FormData();
    data.append("nom", nom);
    data.append("prenom", prenom);
    data.append("domicile", domicile);
    data.append("telephone", telephone);
    data.append("profession", profession);
    data.append("commune", commune);
    console.log("id dE l'utilisateur modifier  est "+idappuser)
    console.log("le nom dE l'utilisateur modifier  est "+nom)
    console.log("le prenom l'utilisateur modifier  est "+prenom)
    console.log("le domicile l'utilisateur modifier  est "+domicile)
    console.log("le telephone l'utilisateur modifier  est "+telephone)
    return this.http.put<any>(  AUTH_API + `utilisateur/Updateutil/${idappuser}`, data)
  }

  ///////////////////////////////Comptpolicier///////////////////////////////////////////////



  modifierprofilepolicier(idappuser: any, file : File):Observable<any>
  {
    let data =new FormData();
    data.append("file",file);

    console.log("id du policier  est "+idappuser)

    console.log("le file  est ",file)

    return this.http.put<any>( AUTH_API + `policier/UpdatePolicier/${idappuser}`, data)
  }



  modifierPolicier(idappuser: any, nom : string, prenom : string, adresse : string, telephone : string, email : string, grade : string):Observable<any>
  {
    let data =new FormData();
    data.append("nom", nom);
    data.append("prenom", prenom);
    data.append("adresse", adresse);
    data.append("telephone", telephone);
    data.append("email", email);
    data.append("grade", grade);
    console.log("la grade est:------------------",grade);
    return this.http.put<any>(  AUTH_API + `policier/Update/${idappuser}`, data)
  }
}
