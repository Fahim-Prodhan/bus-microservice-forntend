import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRouterOutletComponent } from './seller-router-outlet.component';

describe('SellerRouterOutletComponent', () => {
  let component: SellerRouterOutletComponent;
  let fixture: ComponentFixture<SellerRouterOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerRouterOutletComponent]
    });
    fixture = TestBed.createComponent(SellerRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
