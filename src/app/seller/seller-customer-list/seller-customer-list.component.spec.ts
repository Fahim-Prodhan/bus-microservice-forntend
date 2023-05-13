import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCustomerListComponent } from './seller-customer-list.component';

describe('SellerCustomerListComponent', () => {
  let component: SellerCustomerListComponent;
  let fixture: ComponentFixture<SellerCustomerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerCustomerListComponent]
    });
    fixture = TestBed.createComponent(SellerCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
