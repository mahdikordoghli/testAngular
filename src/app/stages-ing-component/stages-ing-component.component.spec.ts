import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesIngComponentComponent } from './stages-ing-component.component';

describe('StagesIngComponentComponent', () => {
  let component: StagesIngComponentComponent;
  let fixture: ComponentFixture<StagesIngComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagesIngComponentComponent]
    });
    fixture = TestBed.createComponent(StagesIngComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
