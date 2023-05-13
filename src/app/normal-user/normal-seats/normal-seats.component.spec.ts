import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalSeatsComponent } from './normal-seats.component';

describe('NormalSeatsComponent', () => {
  let component: NormalSeatsComponent;
  let fixture: ComponentFixture<NormalSeatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalSeatsComponent]
    });
    fixture = TestBed.createComponent(NormalSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
