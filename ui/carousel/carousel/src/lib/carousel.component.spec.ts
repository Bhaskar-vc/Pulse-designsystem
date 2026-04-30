import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcCarousel } from './carousel.component';

describe('VcCarousel', () => {
  let component: VcCarousel;
  let fixture: ComponentFixture<VcCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(VcCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
