import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresorecuperacionComponent } from './regresorecuperacion.component';

describe('RegresorecuperacionComponent', () => {
  let component: RegresorecuperacionComponent;
  let fixture: ComponentFixture<RegresorecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegresorecuperacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegresorecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
