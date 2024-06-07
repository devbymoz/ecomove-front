import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListRentalVehicleComponent } from './card-list-rental-vehicle.component';

describe('CardListRentalVehicleComponent', () => {
  let component: CardListRentalVehicleComponent;
  let fixture: ComponentFixture<CardListRentalVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListRentalVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListRentalVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
