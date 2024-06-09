import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationVehicleListComponent } from './reservation-vehicle-list.component';

describe('ReservationVehicleListComponent', () => {
  let component: ReservationVehicleListComponent;
  let fixture: ComponentFixture<ReservationVehicleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationVehicleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
