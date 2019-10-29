import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuraViewerComponent } from './dura-viewer.component';

describe('DuraViewerComponent', () => {
  let component: DuraViewerComponent;
  let fixture: ComponentFixture<DuraViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuraViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuraViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
