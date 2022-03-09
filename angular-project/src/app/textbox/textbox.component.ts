import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  constructor() { }
  @Input()
  selectedLanguage = '';

  ngOnInit(): void {
  }

  textboxContent = [
    {id: 1, img: "../../assets/images/text-1.png", geoInfo: "დაატრიალე ნებისმიერი სლოტი", engInfo: "Spin any slot"},
    {id: 2, img: "../../assets/images/text-2.png", geoInfo: "გაზარდე შენი ქეშბექი 40%-მდე", engInfo: "Increase your cashback to 40%"},
    {id: 3, img: "../../assets/images/text-3.png", geoInfo: "დაიბრუნე თანხა ყოველდღე", engInfo: "Get your money back every day"},
  ];
}

