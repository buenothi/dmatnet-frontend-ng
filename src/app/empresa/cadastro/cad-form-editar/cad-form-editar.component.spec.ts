import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFormEditarComponent } from './cad-form-editar.component';

describe('CadFormEditarComponent', () => {
  let component: CadFormEditarComponent;
  let fixture: ComponentFixture<CadFormEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadFormEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadFormEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
