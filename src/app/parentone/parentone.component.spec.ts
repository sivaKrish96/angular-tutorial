import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentoneComponent } from './parentone.component';

describe('ParentoneComponent', () => {
  let component: ParentoneComponent;
  let fixture: ComponentFixture<ParentoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
