import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerCarpoolListComponent } from './organizer-carpool-list.component';

describe('OrganizerCarpoolListComponent', () => {
  let component: OrganizerCarpoolListComponent;
  let fixture: ComponentFixture<OrganizerCarpoolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerCarpoolListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerCarpoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
