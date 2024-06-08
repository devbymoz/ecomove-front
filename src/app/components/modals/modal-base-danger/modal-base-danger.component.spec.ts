import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBaseDangerComponent } from './modal-base-danger.component';

describe('ModalBaseDangerComponent', () => {
  let component: ModalBaseDangerComponent;
  let fixture: ComponentFixture<ModalBaseDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalBaseDangerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBaseDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
