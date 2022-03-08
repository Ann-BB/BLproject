import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLgComponent } from './box-lg.component';

describe('BoxLgComponent', () => {
  let component: BoxLgComponent;
  let fixture: ComponentFixture<BoxLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
