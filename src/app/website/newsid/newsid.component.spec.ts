import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsidComponent } from './newsid.component';

describe('NewsidComponent', () => {
  let component: NewsidComponent;
  let fixture: ComponentFixture<NewsidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
