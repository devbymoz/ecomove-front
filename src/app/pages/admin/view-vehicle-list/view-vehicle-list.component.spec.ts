import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVehicleListComponent } from './view-vehicle-list.component';

describe('ViewVehicleListComponent', () => {
  let component: ViewVehicleListComponent;
  let fixture: ComponentFixture<ViewVehicleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewVehicleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
