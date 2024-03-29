import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesCreateFormComponent } from './habitaciones-create-form.component';

describe('HabitacionesCreateFormComponent', () => {
  let component: HabitacionesCreateFormComponent;
  let fixture: ComponentFixture<HabitacionesCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitacionesCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HabitacionesCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
