import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolCardDetailsComponent } from './carpool-card-details.component';

describe('CarpoolCardDetailsComponent', () => {
  let component: CarpoolCardDetailsComponent;
  let fixture: ComponentFixture<CarpoolCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarpoolCardDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpoolCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
