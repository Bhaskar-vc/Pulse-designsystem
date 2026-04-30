import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VTooltipTrigger } from './tooltip-trigger.component';

describe('VTooltipTrigger', () => {
  let component: VTooltipTrigger;
  let fixture: ComponentFixture<VTooltipTrigger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VTooltipTrigger],
    }).compileComponents();

    fixture = TestBed.createComponent(VTooltipTrigger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
