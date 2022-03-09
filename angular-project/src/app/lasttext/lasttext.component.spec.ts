import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasttextComponent } from './lasttext.component';

describe('LasttextComponent', () => {
  let component: LasttextComponent;
  let fixture: ComponentFixture<LasttextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LasttextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LasttextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
