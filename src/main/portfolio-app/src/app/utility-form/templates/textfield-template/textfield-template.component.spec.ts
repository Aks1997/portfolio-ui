import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldTemplateComponent } from './textfield-template.component';

describe('TextfieldTemplateComponent', () => {
  let component: TextfieldTemplateComponent;
  let fixture: ComponentFixture<TextfieldTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
