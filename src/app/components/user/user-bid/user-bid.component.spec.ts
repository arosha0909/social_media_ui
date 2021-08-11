import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBidComponent } from './user-bid.component';

describe('UserBidComponent', () => {
  let component: UserBidComponent;
  let fixture: ComponentFixture<UserBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
