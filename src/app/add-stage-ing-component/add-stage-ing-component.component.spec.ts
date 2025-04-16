import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStageIngComponentComponent } from './add-stage-ing-component.component';

describe('AddStageIngComponentComponent', () => {
  let component: AddStageIngComponentComponent;
  let fixture: ComponentFixture<AddStageIngComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStageIngComponentComponent]
    });
    fixture = TestBed.createComponent(AddStageIngComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
