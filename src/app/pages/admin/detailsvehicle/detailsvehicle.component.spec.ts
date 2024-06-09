import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsvehicleComponent } from './detailsvehicle.component';

describe('DetailsvehicleComponent', () => {
  let component: DetailsvehicleComponent;
  let fixture: ComponentFixture<DetailsvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsvehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
