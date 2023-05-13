import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSeatListComponent } from './seller-seat-list.component';

describe('SellerSeatListComponent', () => {
  let component: SellerSeatListComponent;
  let fixture: ComponentFixture<SellerSeatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerSeatListComponent]
    });
    fixture = TestBed.createComponent(SellerSeatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
