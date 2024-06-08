import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBaseComponent } from './header-base.component';

describe('HeaderBaseComponent', () => {
  let component: HeaderBaseComponent;
  let fixture: ComponentFixture<HeaderBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
