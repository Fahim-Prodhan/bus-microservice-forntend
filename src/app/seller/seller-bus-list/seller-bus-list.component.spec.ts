import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerBusListComponent } from './seller-bus-list.component';

describe('SellerBusListComponent', () => {
  let component: SellerBusListComponent;
  let fixture: ComponentFixture<SellerBusListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerBusListComponent]
    });
    fixture = TestBed.createComponent(SellerBusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
