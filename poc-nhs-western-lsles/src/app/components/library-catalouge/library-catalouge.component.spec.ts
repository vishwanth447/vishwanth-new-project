import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCatalougeComponent } from './library-catalouge.component';

describe('LibraryCatalougeComponent', () => {
  let component: LibraryCatalougeComponent;
  let fixture: ComponentFixture<LibraryCatalougeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryCatalougeComponent]
    });
    fixture = TestBed.createComponent(LibraryCatalougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
