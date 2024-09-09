import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantegrupoComponent } from './estudiantegrupo.component';

describe('EstudiantegrupoComponent', () => {
  let component: EstudiantegrupoComponent;
  let fixture: ComponentFixture<EstudiantegrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiantegrupoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstudiantegrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
