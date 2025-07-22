import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logint } from './logint';

describe('Logint', () => {
  let component: Logint;
  let fixture: ComponentFixture<Logint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
