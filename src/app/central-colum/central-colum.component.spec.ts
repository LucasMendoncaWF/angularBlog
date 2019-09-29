import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralColumComponent } from './central-colum.component';

describe('CentralColumComponent', () => {
  let component: CentralColumComponent;
  let fixture: ComponentFixture<CentralColumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralColumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
