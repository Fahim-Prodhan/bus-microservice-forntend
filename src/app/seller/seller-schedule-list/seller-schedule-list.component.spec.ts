import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerScheduleListComponent } from './seller-schedule-list.component';

describe('SellerScheduleListComponent', () => {
  let component: SellerScheduleListComponent;
  let fixture: ComponentFixture<SellerScheduleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerScheduleListComponent]
    });
    fixture = TestBed.createComponent(SellerScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
