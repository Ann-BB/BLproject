import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headertext',
  templateUrl: './headertext.component.html',
  styleUrls: ['./headertext.component.scss']
})
export class HeadertextComponent implements OnInit {

  constructor() { }
  @Output() updateData = new EventEmitter<string>();


  ngOnInit(): void {
  }
  hStyle = "";
  spacePosition = "";

  toEnglish() {
    this.spacePosition = "to-eng";
  }

  toGeorgia() {
    this.spacePosition = "to-geo";
  }


  @HostListener("document: scroll")
  scrollFn() {
    if(document.documentElement.scrollTop > 10) {
      this.hStyle = 'header-bg';
    } else if(document.documentElement.scrollTop < 10) {
      this.hStyle = '';
    }
  }

}
function scrollFn() {
  throw new Error('Function not implemented.');
}
