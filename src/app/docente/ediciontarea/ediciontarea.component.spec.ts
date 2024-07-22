import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiciontareaComponent } from './ediciontarea.component';

describe('EdiciontareaComponent', () => {
  let component: EdiciontareaComponent;
  let fixture: ComponentFixture<EdiciontareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdiciontareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdiciontareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
