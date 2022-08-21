import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFormExibirComponent } from './cad-form-exibir.component';

describe('CadFormExibirComponent', () => {
  let component: CadFormExibirComponent;
  let fixture: ComponentFixture<CadFormExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadFormExibirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadFormExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
