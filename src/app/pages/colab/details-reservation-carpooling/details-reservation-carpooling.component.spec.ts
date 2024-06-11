import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReservationCarpoolingComponent } from './details-reservation-carpooling.component';

describe('DetailsReservationCarpoolingComponent', () => {
  let component: DetailsReservationCarpoolingComponent;
  let fixture: ComponentFixture<DetailsReservationCarpoolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsReservationCarpoolingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsReservationCarpoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
