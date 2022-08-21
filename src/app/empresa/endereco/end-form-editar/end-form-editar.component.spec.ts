import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndFormEditarComponent } from './end-form-editar.component';

describe('EndFormEditarComponent', () => {
  let component: EndFormEditarComponent;
  let fixture: ComponentFixture<EndFormEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndFormEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndFormEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
