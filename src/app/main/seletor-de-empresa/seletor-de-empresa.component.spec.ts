import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorDeEmpresaComponent } from './seletor-de-empresa.component';

describe('SeletorDeEmpresaComponent', () => {
  let component: SeletorDeEmpresaComponent;
  let fixture: ComponentFixture<SeletorDeEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeletorDeEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorDeEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
