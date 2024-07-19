import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemReplyComponent } from './system-reply.component';

describe('SystemReplyComponent', () => {
  let component: SystemReplyComponent;
  let fixture: ComponentFixture<SystemReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
