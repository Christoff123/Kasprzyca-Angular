import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service'; // replace with the actual path


@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent implements OnInit {
  public title: string;

  formData = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { 
    this.title = 'Witaj na stronie logowania'
  }

  ngOnInit(): void {
  }

  logowanie() {
    if(this.formData.username === 'user' && this.formData.password === 'user') {
      console.log('Zalogowano pomyślnie');
    } else {
      console.log('Błąd logowanie. Sprawdź dane.');


    }
    this.authService.login();
    this.router.navigate(['/dashboard']);
  }
}
