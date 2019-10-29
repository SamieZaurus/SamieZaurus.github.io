import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellenBimComponent } from './bestellen-bim.component';

describe('BestellenBimComponent', () => {
  let component: BestellenBimComponent;
  let fixture: ComponentFixture<BestellenBimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestellenBimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestellenBimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
