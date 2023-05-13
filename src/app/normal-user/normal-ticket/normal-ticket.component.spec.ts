import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalTicketComponent } from './normal-ticket.component';

describe('NormalTicketComponent', () => {
  let component: NormalTicketComponent;
  let fixture: ComponentFixture<NormalTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalTicketComponent]
    });
    fixture = TestBed.createComponent(NormalTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
