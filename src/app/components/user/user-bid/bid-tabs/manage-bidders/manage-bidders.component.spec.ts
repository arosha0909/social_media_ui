import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBiddersComponent } from './manage-bidders.component';

describe('ManageBiddersComponent', () => {
  let component: ManageBiddersComponent;
  let fixture: ComponentFixture<ManageBiddersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBiddersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
