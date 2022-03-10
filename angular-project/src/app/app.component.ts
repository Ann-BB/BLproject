import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  fontFamily = "BPG Nino Mtavruli";

  language = 'geo';

  updateData(selectedLanguage: string) {
    this.language = selectedLanguage;
    this.fontFamily === "BPG Nino Mtavruli" && selectedLanguage != 'geo' ? this.fontFamily = 'sans-serif' : this.fontFamily === "BPG Nino Mtavruli"  && selectedLanguage != 'eng';
    this.fontFamily === "sans-serif" && selectedLanguage != 'eng' ? this.fontFamily = 'BPG Nino Mtavruli' : this.fontFamily === "sans-serif"  && selectedLanguage != 'geo';
  }
}
