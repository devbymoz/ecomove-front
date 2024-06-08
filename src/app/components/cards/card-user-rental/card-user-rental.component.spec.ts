import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserRentalComponent } from './card-user-rental.component';

describe('CardUserRentalComponent', () => {
  let component: CardUserRentalComponent;
  let fixture: ComponentFixture<CardUserRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardUserRentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUserRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
