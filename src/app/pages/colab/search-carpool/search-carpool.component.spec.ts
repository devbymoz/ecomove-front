import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCarpoolComponent } from './search-carpool.component';

describe('SearchCarpoolComponent', () => {
  let component: SearchCarpoolComponent;
  let fixture: ComponentFixture<SearchCarpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCarpoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCarpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
