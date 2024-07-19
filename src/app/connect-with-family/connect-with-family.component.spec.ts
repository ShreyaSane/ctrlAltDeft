import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWithFamilyComponent } from './connect-with-family.component';

describe('ConnectWithFamilyComponent', () => {
  let component: ConnectWithFamilyComponent;
  let fixture: ComponentFixture<ConnectWithFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectWithFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectWithFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
