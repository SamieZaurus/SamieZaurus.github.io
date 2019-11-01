import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyserenComponent } from './analyseren.component';

describe('AnalyserenComponent', () => {
  let component: AnalyserenComponent;
  let fixture: ComponentFixture<AnalyserenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyserenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyserenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
