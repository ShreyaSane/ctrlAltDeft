import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAgentComponent } from './live-agent.component';

describe('LiveAgentComponent', () => {
  let component: LiveAgentComponent;
  let fixture: ComponentFixture<LiveAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
