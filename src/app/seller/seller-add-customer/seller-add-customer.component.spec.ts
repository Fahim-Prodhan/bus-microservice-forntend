import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddCustomerComponent } from './seller-add-customer.component';

describe('SellerAddCustomerComponent', () => {
  let component: SellerAddCustomerComponent;
  let fixture: ComponentFixture<SellerAddCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerAddCustomerComponent]
    });
    fixture = TestBed.createComponent(SellerAddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
