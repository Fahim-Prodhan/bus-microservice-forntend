import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalRoutesComponent } from './normal-routes.component';

describe('NormalRoutesComponent', () => {
  let component: NormalRoutesComponent;
  let fixture: ComponentFixture<NormalRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalRoutesComponent]
    });
    fixture = TestBed.createComponent(NormalRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
