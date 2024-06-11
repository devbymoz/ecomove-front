import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCarpoolingComponent } from './details-carpooling.component';

describe('DetailsCarpoolingComponent', () => {
  let component: DetailsCarpoolingComponent;
  let fixture: ComponentFixture<DetailsCarpoolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCarpoolingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCarpoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
