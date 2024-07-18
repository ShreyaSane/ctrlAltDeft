import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAnswerComponent } from './agent-answer.component';

describe('AgentAnswerComponent', () => {
  let component: AgentAnswerComponent;
  let fixture: ComponentFixture<AgentAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
