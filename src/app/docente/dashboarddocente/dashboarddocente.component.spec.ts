import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarddocenteComponent } from './dashboarddocente.component';

describe('DashboarddocenteComponent', () => {
  let component: DashboarddocenteComponent;
  let fixture: ComponentFixture<DashboarddocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboarddocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboarddocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
