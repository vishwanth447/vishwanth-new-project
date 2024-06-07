import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAMemberComponent } from './become-a-member.component';

describe('BecomeAMemberComponent', () => {
  let component: BecomeAMemberComponent;
  let fixture: ComponentFixture<BecomeAMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeAMemberComponent]
    });
    fixture = TestBed.createComponent(BecomeAMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
