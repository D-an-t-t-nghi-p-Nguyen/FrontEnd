import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdNewsComponent } from './get-id-news.component';

describe('GetIdNewsComponent', () => {
  let component: GetIdNewsComponent;
  let fixture: ComponentFixture<GetIdNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetIdNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
