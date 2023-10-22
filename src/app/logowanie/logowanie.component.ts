import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
})
export class LogowanieComponent implements OnInit {

  formData = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  logowanie() {
    if(this.formData.username === 'przykladowyUzytkownik' && this.formData.password === 'przykladoweHaslo') {
      console.log('Zalogowano pomyślnie');
    } else {
      console.log('Błąd logowanie. Sprawdź dane.');
    }
  }

}
