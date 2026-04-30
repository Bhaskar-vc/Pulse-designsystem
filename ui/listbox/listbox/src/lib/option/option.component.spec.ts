import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcOption } from './option.component';

describe('VcOption', () => {
  let component: VcOption;
  let fixture: ComponentFixture<VcOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcOption],
    }).compileComponents();

    fixture = TestBed.createComponent(VcOption);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
