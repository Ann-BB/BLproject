import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashtextComponent } from './cashtext.component';

describe('CashtextComponent', () => {
  let component: CashtextComponent;
  let fixture: ComponentFixture<CashtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
