import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideColumComponent } from './side-colum.component';

describe('SideColumComponent', () => {
  let component: SideColumComponent;
  let fixture: ComponentFixture<SideColumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideColumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
