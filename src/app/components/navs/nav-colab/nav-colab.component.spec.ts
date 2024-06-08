import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavColabComponent } from './nav-colab.component';

describe('NavColabComponent', () => {
  let component: NavColabComponent;
  let fixture: ComponentFixture<NavColabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavColabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
