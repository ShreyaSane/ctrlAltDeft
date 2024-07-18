import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarComponentComponent } from './tool-bar-component.component';

describe('ToolBarComponentComponent', () => {
  let component: ToolBarComponentComponent;
  let fixture: ComponentFixture<ToolBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
