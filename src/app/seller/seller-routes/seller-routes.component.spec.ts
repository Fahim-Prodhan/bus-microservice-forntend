import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRoutesComponent } from './seller-routes.component';

describe('SellerRoutesComponent', () => {
  let component: SellerRoutesComponent;
  let fixture: ComponentFixture<SellerRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerRoutesComponent]
    });
    fixture = TestBed.createComponent(SellerRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
