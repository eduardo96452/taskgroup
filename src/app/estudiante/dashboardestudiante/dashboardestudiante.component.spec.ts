import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardestudianteComponent } from './dashboardestudiante.component';

describe('DashboardestudianteComponent', () => {
  let component: DashboardestudianteComponent;
  let fixture: ComponentFixture<DashboardestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardestudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
