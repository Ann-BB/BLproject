import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-middletext',
  templateUrl: './middletext.component.html',
  styleUrls: ['./middletext.component.scss']
})
export class MiddletextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()  selectedLanguage = '';

  textboxone = {
    geo: 'წარმატებისა თუ წარუმატებლობის მიუხედავად, კალენდარული დღის განმავლობაში მინ. 250₾ დატრიალების შემთხვევაში მოთამაშეების მზარდი ქეშბექი გაიზრდება 1%-ით.',
    eng: "Regardless of success or failure, during the calendar day min. In case of 250₾ spin, the players' growing cashback will increase by 1%. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero voluptas numquam dolorum magnam similique."
  }

  textboxtwo = {
    geo: 'თუ მოთამაშე დღის განმავლობაში არ დაატრიალებს ჯამში მინ. 250₾-ს, მისი დღიური ქეშბექი შემცირდება 1%-ით, მაგრამ არ ჩამოსცდება გარანტირებულ 10%-იან ნიშნულს.',
    eng: "If the player does not spin a total of min. At ₾ 250, its daily cashback will be reduced by 1%, but will not fall below the guaranteed 10% mark."
  }
}
