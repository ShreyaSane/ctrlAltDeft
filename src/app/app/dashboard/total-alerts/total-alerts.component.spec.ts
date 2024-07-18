import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAlertsComponent } from './total-alerts.component';

describe('TotalAlertsComponent', () => {
  let component: TotalAlertsComponent;
  let fixture: ComponentFixture<TotalAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
