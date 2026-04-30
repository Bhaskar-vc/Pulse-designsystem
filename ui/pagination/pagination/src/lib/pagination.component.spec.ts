import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcPagination } from './pagination.component';

describe('VcPagination', () => {
  let component: VcPagination;
  let fixture: ComponentFixture<VcPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcPagination],
    }).compileComponents();

    fixture = TestBed.createComponent(VcPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
