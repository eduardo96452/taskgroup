import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrotareaComponent } from './registrotarea.component';

describe('RegistrotareaComponent', () => {
  let component: RegistrotareaComponent;
  let fixture: ComponentFixture<RegistrotareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrotareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrotareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
