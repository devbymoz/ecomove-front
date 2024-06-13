import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCarpoolingAnnouncementComponent } from './post-carpooling-announcement.component';

describe('PostCarpoolingAnnouncementComponent', () => {
  let component: PostCarpoolingAnnouncementComponent;
  let fixture: ComponentFixture<PostCarpoolingAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCarpoolingAnnouncementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCarpoolingAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
