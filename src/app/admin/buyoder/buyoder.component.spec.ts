import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyoderComponent } from './buyoder.component';

describe('BuyoderComponent', () => {
  let component: BuyoderComponent;
  let fixture: ComponentFixture<BuyoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyoderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
