import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSearchSellerComponent } from './route-search-seller.component';

describe('RouteSearchSellerComponent', () => {
  let component: RouteSearchSellerComponent;
  let fixture: ComponentFixture<RouteSearchSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteSearchSellerComponent]
    });
    fixture = TestBed.createComponent(RouteSearchSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
