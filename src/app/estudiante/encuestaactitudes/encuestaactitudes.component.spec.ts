import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaactitudesComponent } from './encuestaactitudes.component';

describe('EncuestaactitudesComponent', () => {
  let component: EncuestaactitudesComponent;
  let fixture: ComponentFixture<EncuestaactitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaactitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncuestaactitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
