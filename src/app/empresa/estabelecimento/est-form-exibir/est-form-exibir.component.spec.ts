import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstFormExibirComponent } from './est-form-exibir.component';

describe('EstFormExibirComponent', () => {
  let component: EstFormExibirComponent;
  let fixture: ComponentFixture<EstFormExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstFormExibirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstFormExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
