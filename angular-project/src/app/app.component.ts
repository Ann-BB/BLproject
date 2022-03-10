import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  fontFamily = "Georgia";

  language = 'geo';

  updateData(selectedLanguage: string) {
    this.language = selectedLanguage;
    this.fontFamily === "Georgia" && selectedLanguage != 'geo' ? this.fontFamily = 'sans-serif' : this.fontFamily === "Georgia"  && selectedLanguage != 'eng';
    this.fontFamily === "sans-serif" && selectedLanguage != 'eng' ? this.fontFamily = 'Georgia' : this.fontFamily === "sans-serif"  && selectedLanguage != 'geo';
  }
}
