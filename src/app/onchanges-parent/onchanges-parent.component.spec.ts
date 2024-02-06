import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangesParentComponent } from './onchanges-parent.component';

describe('OnchangesParentComponent', () => {
  let component: OnchangesParentComponent;
  let fixture: ComponentFixture<OnchangesParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnchangesParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnchangesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
