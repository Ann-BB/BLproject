import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddletextComponent } from './middletext.component';

describe('MiddletextComponent', () => {
  let component: MiddletextComponent;
  let fixture: ComponentFixture<MiddletextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddletextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddletextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
