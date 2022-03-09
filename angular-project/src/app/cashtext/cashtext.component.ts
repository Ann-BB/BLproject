
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cashtext',
  templateUrl: './cashtext.component.html',
  styleUrls: ['./cashtext.component.scss']
})
export class CashtextComponent implements OnInit {

  constructor() { }
  @Input()  selectedLanguage = '';

  ngOnInit(): void {
  }


  cashtext = {
    geo: "<h2>მიიღე <span>გარანტირებული 10%</span> CASHBACK <br>  და გაზარდე 1%-ით ყოველდღე!</h2>",
    eng: "<h2>Get a <span>Guaranteed 10%</span> CASHBACK <br> And increase it by 1% every day!</h2>"
  }
  equalone = {
    geo: "ყოველდღე დატრიალებული",
    eng: "Bet every day"
  }
  equaltwo = {
    geo: "ქეშბექი",
    eng: "Cashback"
  }
  oneprice = {
    geo: "250ლ",
    eng: "250Gel"
  }
  twoPrice = "+1%";

}

