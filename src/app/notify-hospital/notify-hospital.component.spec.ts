import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyHospitalComponent } from './notify-hospital.component';

describe('NotifyHospitalComponent', () => {
  let component: NotifyHospitalComponent;
  let fixture: ComponentFixture<NotifyHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
