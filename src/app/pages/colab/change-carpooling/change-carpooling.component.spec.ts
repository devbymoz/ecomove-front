import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCarpoolingComponent } from './change-carpooling.component';

describe('ChangeCarpoolingComponent', () => {
  let component: ChangeCarpoolingComponent;
  let fixture: ComponentFixture<ChangeCarpoolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeCarpoolingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeCarpoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
