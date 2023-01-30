import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../services/connexion.service';
import { StorageService } from '../services/stockage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(private authService: ConnexionService, private storageService: StorageService, private router: Router) { }
  telephone!: string;
  password!: string;



  form: any = {
    telephone: null,
    password: null
  };


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }


  onSubmit(): void {
    const { telephone, password } = this.form;

    this.authService.login(telephone, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        // this.router.navigate([''])
        if (this.storageService.getUser().roles[0] === 'ROLE_USER') {
          this.router.navigate(['/tabs']);
        }else {
          this.router.navigate(['/policier']);
        }
       // this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
      

    });
  }

  reloadPage(): void {
    window.location.reload();
  }


  submit() {
    // Code pour envoyer les données de formulaire au serveur ou les enregistrer localement
    console.log("telephone:", this.telephone);
    console.log("password:", this.password);    
    }
}
