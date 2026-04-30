import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcTooltipV2Component } from './vc-tooltip-v2.component';

describe('VcTooltipV2Component', () => {
  let component: VcTooltipV2Component;
  let fixture: ComponentFixture<VcTooltipV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcTooltipV2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(VcTooltipV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
