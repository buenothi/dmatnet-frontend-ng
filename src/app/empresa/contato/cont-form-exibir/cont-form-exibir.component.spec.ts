import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContFormExibirComponent } from './cont-form-exibir.component';

describe('ContFormExibirComponent', () => {
  let component: ContFormExibirComponent;
  let fixture: ComponentFixture<ContFormExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContFormExibirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContFormExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
