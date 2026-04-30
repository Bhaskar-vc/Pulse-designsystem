import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VTooltipContent } from './tooltip-content.component';

describe('VTooltipContent', () => {
  let component: VTooltipContent;
  let fixture: ComponentFixture<VTooltipContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VTooltipContent],
    }).compileComponents();

    fixture = TestBed.createComponent(VTooltipContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
