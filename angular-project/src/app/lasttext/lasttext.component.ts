import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-lasttext',
  templateUrl: './lasttext.component.html',
  styleUrls: ['./lasttext.component.scss']
})
export class LasttextComponent implements OnInit {

  constructor() { }
  @Input() selectedLanguage = '';
  ngOnInit(): void {
  }


  wordbox = [

      {
        id: 1,
        watch: false,
        icons: "../../assets/images/icon-down.png",
        firsttext:  {
          geo: "რა არის EGT FREESPINS?",
          eng: "What is EGT FREESPINS?"
        },
        innertext:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5"
        }
      },


      {
        id: 2,
        watch: false,
        icons: "../../assets/images/icon-down.png",
        firsttext:  {
          geo: "როდის იწყება აქცია?",
          eng: "When does the promotion start?"
        },
        innertext:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, perferendis voluptate! Doloribus dignissimos iure accusantium quidem harum, nam illo fugiat."
        }
      },

      {
        id: 3,
        watch: false,
        icons: "../../assets/images/icon-down.png",
        firsttext:  {
          geo: "ვის შეუძლია აქციაში მონაწილეობის მიღება?",
          eng: "Who can take part in the action?"
        },
        innertext:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5"
        }
      },


      {
        id: 4,
        watch: false,
        icons: "../../assets/images/icon-down.png",
        firsttext:  {
          geo: "რომელი თამაშები მონაწილეობს აქციაში?",
          eng: "Which games are participating in the promotion?"
        },
        innertext:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, perferendis voluptate! Doloribus dignissimos iure accusantium quidem harum, nam illo fugiat."
        }
      },


      {
        id: 5,
        watch: false,
        icons: "../../assets/images/icon-down.png",
        firsttext:  {
          geo: "როდის დამერიცხება ფრისპინები?",
          eng: "When will I receive the Frispins?"
        },
        innertext:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5"
        }
      },


      {
        id: 6,
        watch: false,
        icons: "../../assets/images/icon-down.png",
        firsttext:  {
          geo: "დამატებითი წესები და პირობები",
          eng: "Additional terms and conditions"
        },
        innertext:  {
            geo: "EGT freespins არის ბეთლაივის ახალი აქცია სლოტებში. პირველად მსოფლიოში, მოთამაშეები, რომლებიც EGT-ს სლოტებში დაატრიალებენ მინიმუმ 20₾-ს, ბეთლაივისგან საჩუქრად მიიღებენ 20 უფასო დატრიალებას EGT-ს სლოტზე Burning Hot 5",
            eng: "EGT freespins is Bethlehem's new promotion in slots. For the first time in the world, players who spin at least 20₾ in EGT slots will receive 20 free spins on EGT slot as a gift from Bethlehem Burning Hot 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, perferendis voluptate! Doloribus dignissimos iure accusantium quidem harum, nam illo fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, perferendis voluptate! Doloribus dignissimos iure accusantium quidem harum, nam illo fugiat."
        }
      },


  ]

  //icons ????;
  iconsContent(id: number) {
    this.wordbox[id - 1].icons === "../../assets/images/icon-down.png" ? this.wordbox[id - 1].icons = "../../assets/images/icon-up.png" : this.wordbox[id - 1].icons = "../../assets/images/icon-down.png";
    this.wordbox[id - 1].watch = !this.wordbox[id - 1].watch;
  }
}

