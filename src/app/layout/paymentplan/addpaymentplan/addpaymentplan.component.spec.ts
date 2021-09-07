import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpaymentplanComponent } from './addpaymentplan.component';

describe('AddpaymentplanComponent', () => {
  let component: AddpaymentplanComponent;
  let fixture: ComponentFixture<AddpaymentplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpaymentplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpaymentplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
