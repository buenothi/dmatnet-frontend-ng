import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndFormExibirComponent } from './end-form-exibir.component';

describe('EndFormExibirComponent', () => {
  let component: EndFormExibirComponent;
  let fixture: ComponentFixture<EndFormExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndFormExibirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndFormExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
