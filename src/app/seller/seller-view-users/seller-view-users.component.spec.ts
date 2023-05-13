import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerViewUsersComponent } from './seller-view-users.component';

describe('SellerViewUsersComponent', () => {
  let component: SellerViewUsersComponent;
  let fixture: ComponentFixture<SellerViewUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerViewUsersComponent]
    });
    fixture = TestBed.createComponent(SellerViewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
