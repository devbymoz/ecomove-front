import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnnonceCovoitComponent } from './card-annonce-covoit.component';

describe('CardAnnonceCovoitComponent', () => {
  let component: CardAnnonceCovoitComponent;
  let fixture: ComponentFixture<CardAnnonceCovoitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAnnonceCovoitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAnnonceCovoitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
