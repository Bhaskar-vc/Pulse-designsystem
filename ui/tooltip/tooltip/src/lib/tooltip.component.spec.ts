import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VTooltip } from './tooltip.component';

describe('VTooltip', () => {
  let component: VTooltip;
  let fixture: ComponentFixture<VTooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VTooltip],
    }).compileComponents();

    fixture = TestBed.createComponent(VTooltip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
