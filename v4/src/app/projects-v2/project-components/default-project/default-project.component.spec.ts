import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultProjectComponent } from './default-project.component';

describe('DefaultProjectComponent', () => {
  let component: DefaultProjectComponent;
  let fixture: ComponentFixture<DefaultProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
