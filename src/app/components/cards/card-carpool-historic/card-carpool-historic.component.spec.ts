import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarpoolHistoricComponent } from './card-carpool-historic.component';

describe('CardCarpoolHistoricComponent', () => {
  let component: CardCarpoolHistoricComponent;
  let fixture: ComponentFixture<CardCarpoolHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCarpoolHistoricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCarpoolHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
