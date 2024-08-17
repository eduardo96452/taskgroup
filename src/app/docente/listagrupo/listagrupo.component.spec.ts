import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagrupoComponent } from './listagrupo.component';

describe('ListagrupoComponent', () => {
  let component: ListagrupoComponent;
  let fixture: ComponentFixture<ListagrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagrupoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
