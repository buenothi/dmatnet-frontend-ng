import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstFormEditarComponent } from './est-form-editar.component';

describe('EstFormEditarComponent', () => {
  let component: EstFormEditarComponent;
  let fixture: ComponentFixture<EstFormEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstFormEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstFormEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
