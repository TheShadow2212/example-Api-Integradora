import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesUpdateFormComponent } from './habitaciones-update-form.component';

describe('HabitacionesUpdateFormComponent', () => {
  let component: HabitacionesUpdateFormComponent;
  let fixture: ComponentFixture<HabitacionesUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitacionesUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitacionesUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
