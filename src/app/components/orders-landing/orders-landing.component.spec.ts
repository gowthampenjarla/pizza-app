import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersLandingComponent } from './orders-landing.component';

describe('OrdersLandingComponent', () => {
  let component: OrdersLandingComponent;
  let fixture: ComponentFixture<OrdersLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
