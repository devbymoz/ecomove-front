import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarpoolComponent } from './create-carpool.component';

describe('CreateCarpoolComponent', () => {
  let component: CreateCarpoolComponent;
  let fixture: ComponentFixture<CreateCarpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCarpoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCarpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
