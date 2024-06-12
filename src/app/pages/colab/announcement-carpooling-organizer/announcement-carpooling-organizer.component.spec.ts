import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementCarpoolingOrganizerComponent } from './announcement-carpooling-organizer.component';

describe('AnnouncementCarpoolingOrganizerComponent', () => {
  let component: AnnouncementCarpoolingOrganizerComponent;
  let fixture: ComponentFixture<AnnouncementCarpoolingOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementCarpoolingOrganizerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementCarpoolingOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
