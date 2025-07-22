import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teluguhome } from './teluguhome';

describe('Teluguhome', () => {
  let component: Teluguhome;
  let fixture: ComponentFixture<Teluguhome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teluguhome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teluguhome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
