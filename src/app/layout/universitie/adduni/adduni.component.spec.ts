import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduniComponent } from './adduni.component';

describe('AdduniComponent', () => {
  let component: AdduniComponent;
  let fixture: ComponentFixture<AdduniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
