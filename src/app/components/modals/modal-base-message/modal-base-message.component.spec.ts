import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBaseMessageComponent } from './modal-base-message.component';

describe('ModalBaseMessageComponent', () => {
  let component: ModalBaseMessageComponent;
  let fixture: ComponentFixture<ModalBaseMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBaseMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBaseMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
