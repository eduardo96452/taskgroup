import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilprofesorComponent } from './perfilprofesor.component';

describe('PerfilprofesorComponent', () => {
  let component: PerfilprofesorComponent;
  let fixture: ComponentFixture<PerfilprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilprofesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
