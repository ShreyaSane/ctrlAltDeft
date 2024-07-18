import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoFencingAlertsComponent } from './geo-fencing-alerts.component';

describe('GeoFencingAlertsComponent', () => {
  let component: GeoFencingAlertsComponent;
  let fixture: ComponentFixture<GeoFencingAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoFencingAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoFencingAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
