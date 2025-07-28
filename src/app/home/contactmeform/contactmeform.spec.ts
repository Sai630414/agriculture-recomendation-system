import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactmeform } from './contactmeform';

describe('Contactmeform', () => {
  let component: Contactmeform;
  let fixture: ComponentFixture<Contactmeform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactmeform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactmeform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
