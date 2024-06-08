import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelCarpoolComponent } from './modal-cancel-carpool.component';

describe('ModalCancelCarpoolComponent', () => {
  let component: ModalCancelCarpoolComponent;
  let fixture: ComponentFixture<ModalCancelCarpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCancelCarpoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCancelCarpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
