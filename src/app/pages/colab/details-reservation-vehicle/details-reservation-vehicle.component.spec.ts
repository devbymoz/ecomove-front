import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReservationVehicleComponent } from './details-reservation-vehicle.component';

describe('DetailsReservationVehicleComponent', () => {
  let component: DetailsReservationVehicleComponent;
  let fixture: ComponentFixture<DetailsReservationVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsReservationVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsReservationVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
