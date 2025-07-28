import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Content3 } from './content3';

describe('Content3', () => {
  let component: Content3;
  let fixture: ComponentFixture<Content3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Content3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Content3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
