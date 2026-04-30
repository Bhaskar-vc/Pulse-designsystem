import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcCarouselIndicators } from './carousel-indicators.component';

describe('VcCarouselIndicators', () => {
  let component: VcCarouselIndicators;
  let fixture: ComponentFixture<VcCarouselIndicators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcCarouselIndicators],
    }).compileComponents();

    fixture = TestBed.createComponent(VcCarouselIndicators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
