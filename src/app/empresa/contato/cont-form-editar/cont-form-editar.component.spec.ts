import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContFormEditarComponent } from './cont-form-editar.component';

describe('ContFormEditarComponent', () => {
  let component: ContFormEditarComponent;
  let fixture: ComponentFixture<ContFormEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContFormEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContFormEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
