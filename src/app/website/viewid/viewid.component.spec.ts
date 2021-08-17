import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewidComponent } from './viewid.component';

describe('ViewidComponent', () => {
  let component: ViewidComponent;
  let fixture: ComponentFixture<ViewidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
