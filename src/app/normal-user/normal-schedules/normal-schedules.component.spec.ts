import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalSchedulesComponent } from './normal-schedules.component';

describe('NormalSchedulesComponent', () => {
  let component: NormalSchedulesComponent;
  let fixture: ComponentFixture<NormalSchedulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalSchedulesComponent]
    });
    fixture = TestBed.createComponent(NormalSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
