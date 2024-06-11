import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolReservationHistoryComponent } from './carpool-reservation-history.component';

describe('CarpoolReservationHistoryComponent', () => {
  let component: CarpoolReservationHistoryComponent;
  let fixture: ComponentFixture<CarpoolReservationHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolReservationHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpoolReservationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
