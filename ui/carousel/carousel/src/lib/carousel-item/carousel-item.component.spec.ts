import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VcCarouselItem } from './carousel-item.component';

describe('VcCarouselItem', () => {
  let component: VcCarouselItem;
  let fixture: ComponentFixture<VcCarouselItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcCarouselItem],
    }).compileComponents();

    fixture = TestBed.createComponent(VcCarouselItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
