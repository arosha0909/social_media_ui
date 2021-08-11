import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyActiveBidsComponent } from './my-active-bids.component';

describe('MyActiveBidsComponent', () => {
  let component: MyActiveBidsComponent;
  let fixture: ComponentFixture<MyActiveBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyActiveBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyActiveBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
