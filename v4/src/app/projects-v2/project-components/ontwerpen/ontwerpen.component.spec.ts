import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OntwerpenComponent } from './ontwerpen.component';

describe('OntwerpenComponent', () => {
  let component: OntwerpenComponent;
  let fixture: ComponentFixture<OntwerpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntwerpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntwerpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
