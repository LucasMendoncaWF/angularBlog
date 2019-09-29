import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualPostComponent } from './actual-post.component';

describe('ActualPostComponent', () => {
  let component: ActualPostComponent;
  let fixture: ComponentFixture<ActualPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
