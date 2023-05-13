import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerTicketComponent } from './seller-ticket.component';

describe('SellerTicketComponent', () => {
  let component: SellerTicketComponent;
  let fixture: ComponentFixture<SellerTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerTicketComponent]
    });
    fixture = TestBed.createComponent(SellerTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
