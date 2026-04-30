import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcSelect } from './select.component';

describe('VcSelect', () => {
  let component: VcSelect;
  let fixture: ComponentFixture<VcSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(VcSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
