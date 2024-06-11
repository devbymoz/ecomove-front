import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservedVehiclesComponent } from './list-reserved-vehicles.component';

describe('ListReservedVehiclesComponent', () => {
  let component: ListReservedVehiclesComponent;
  let fixture: ComponentFixture<ListReservedVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListReservedVehiclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReservedVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
