import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sliderbox',
  templateUrl: './sliderbox.component.html',
  styleUrls: ['./sliderbox.component.scss']
})
export class SliderboxComponent implements OnInit {


  constructor() { }
  @Input() selectedLanguage = '';

  ngOnInit(): void {
    setInterval(() => {

      if(window.innerWidth > 1200) {
        this.spaceSlider -= (215 + 200);
        this.active += 1;

        if(this.active === 8) {
          this.active = 1;
          this.spaceSlider = -100;
        };
      }
    }, 9000);
  }

  sliderbox= [
    {id: 1,  numGeo: '10 მაისი', numEng: '10 May', percent: '13%'},
    {id: 2,  numGeo: '11 მაისი', numEng: '11 May', percent: '14%'},
    {id: 3,  numGeo: '12 მაისი', numEng: '12 May', percent: '15%'},
    {id: 4,  numGeo: '13 მაისი', numEng: '13 May', percent: '16%'},
    {id: 5,  numGeo: '14 მაისი', numEng: '14 May', percent: '17%'},
    {id: 6,  numGeo: '15 მაისი', numEng: '15 May', percent: '18%'},
    {id: 7,  numGeo: '16 მაისი', numEng: '16 May', percent: '13%'},
    {id: 8,  numGeo: '17 მაისი', numEng: '17 May', percent: '13%'}
  ];

  ngAfterViewInit() {
    if(window.innerWidth < 992 && window.innerWidth > 800) {
      this.spaceSlider = -80;
    }

    else if(window.innerWidth < 800 && window.innerWidth > 600) {
      this.spaceSlider = -60;
    }

    else if(window.innerWidth < 600) {
      this.spaceSlider = -310;
    }
  };


  onResize() {
    if(window.innerWidth < 992 && window.innerWidth > 800) {
      this.spaceSlider = -80;
      this.active = 1;
    }

    else if(window.innerWidth < 800 && window.innerWidth > 500) {
      this.spaceSlider = -60;
      this.active = 1;
    }

    else if(window.innerWidth < 500) {
      this.spaceSlider = -310;
      this.active = 1;
    }

    else {
      this.spaceSlider = -100;
      this.active = 1;
    }
  }

  active = 1;
  spaceSlider = -100;
  iconRight() {

    if(window.innerWidth < 992 && window.innerWidth > 800) {
      this.spaceSlider -= (180 + 160);
    }

    else if(window.innerWidth < 800 && window.innerWidth > 500) {
      this.spaceSlider -= (150 + 80);
    }

    else {
      this.spaceSlider -= (215 + 200);
    }
    this.active += 1;
    if(this.active === 8) {

      if(window.innerWidth < 992 && window.innerWidth > 800) {
        this.spaceSlider = -80;
      }

      else if(window.innerWidth < 800 && window.innerWidth > 500) {
        this.spaceSlider = -60;
      }
      else {
        this.spaceSlider = -100;
      }
      this.active = 1;

    };
  }

  iconLeft() {
    if(this.active != 1) {
      if(window.innerWidth < 992 && window.innerWidth > 800) {
        this.spaceSlider += (180 + 160);
      }

      else if(window.innerWidth < 800 && window.innerWidth > 500) {
        this.spaceSlider += (150 + 80);
      }

      else if(window.innerWidth < 500) {
        this.spaceSlider += (100 + 200);
      }

      else {
        this.spaceSlider += (215 + 200);
      }
      this.active -= 1;
    };
  }
}
