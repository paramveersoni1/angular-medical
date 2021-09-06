import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitieComponent } from './universitie.component';

describe('UniversitieComponent', () => {
  let component: UniversitieComponent;
  let fixture: ComponentFixture<UniversitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
