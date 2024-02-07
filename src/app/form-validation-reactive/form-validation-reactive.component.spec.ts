import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationReactiveComponent } from './form-validation-reactive.component';

describe('FormValidationReactiveComponent', () => {
  let component: FormValidationReactiveComponent;
  let fixture: ComponentFixture<FormValidationReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidationReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidationReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
