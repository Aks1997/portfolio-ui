import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaTemplateComponent } from './textarea-template.component';

describe('TextareaTemplateComponent', () => {
  let component: TextareaTemplateComponent;
  let fixture: ComponentFixture<TextareaTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
