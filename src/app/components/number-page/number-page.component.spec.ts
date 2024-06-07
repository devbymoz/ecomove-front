import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPageComponent } from './number-page.component';

describe('NumberPageComponent', () => {
  let component: NumberPageComponent;
  let fixture: ComponentFixture<NumberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
