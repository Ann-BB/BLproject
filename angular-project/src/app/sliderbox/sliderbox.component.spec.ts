import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderboxComponent } from './sliderbox.component';

describe('SliderboxComponent', () => {
  let component: SliderboxComponent;
  let fixture: ComponentFixture<SliderboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
