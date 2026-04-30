import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcDropdownItem } from './dropdown-item.component';

describe('VcDropdownItem', () => {
  let component: VcDropdownItem;
  let fixture: ComponentFixture<VcDropdownItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcDropdownItem],
    }).compileComponents();

    fixture = TestBed.createComponent(VcDropdownItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
