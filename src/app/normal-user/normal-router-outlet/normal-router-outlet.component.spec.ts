import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalRouterOutletComponent } from './normal-router-outlet.component';

describe('NormalRouterOutletComponent', () => {
  let component: NormalRouterOutletComponent;
  let fixture: ComponentFixture<NormalRouterOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalRouterOutletComponent]
    });
    fixture = TestBed.createComponent(NormalRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
