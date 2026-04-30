import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  forwardRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ratingVariants, starFillVariants } from './rating.variants';
import { RatingSize, RatingColor } from './rating.enums';

type StarState = 'full' | 'half' | 'empty';

@Component({
  standalone: true,
  selector: 'v-rating',
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VRating), multi: true },
  ],
})
export class VRating implements ControlValueAccessor, OnChanges {
  /** Rating value (0–max, supports .5 increments) */
  @Input() value = 0;

  /** Total number of stars */
  @Input() max = 5;

  /** Size variant */
  @Input() size: `${RatingSize}` = RatingSize.MD;

  /** Star fill color */
  @Input() color: `${RatingColor}` = RatingColor.YELLOW;

  /** Allow user interaction */
  @Input() interactive = false;

  /** Optional review count shown in parentheses */
  @Input() count: number | null = null;

  /** Show numeric value after stars */
  @Input() showValue = false;

  /** Accessible label */
  @Input() ariaLabel = '';

  /** Emitted when user selects a rating */
  @Output() ratingChange = new EventEmitter<number>();

  stars: StarState[] = [];
  ratingClass = '';
  starFillClass = '';

  private cdr = inject(ChangeDetectorRef);
  private onChange: (v: number) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnChanges(): void {
    this.ratingClass  = ratingVariants({ size: this.size as any, interactive: this.interactive });
    this.starFillClass = starFillVariants({ color: this.color as any });
    this.stars = this.buildStars();
  }

  setRating(rating: number): void {
    this.value = rating;
    this.stars = this.buildStars();
    this.onChange(rating);
    this.onTouched();
    this.ratingChange.emit(rating);
    this.cdr.markForCheck();
  }

  writeValue(val: number): void {
    this.value = val ?? 0;
    this.stars = this.buildStars();
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (v: number) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  private buildStars(): StarState[] {
    return Array.from({ length: this.max }, (_, i) => {
      const threshold = i + 1;
      if (this.value >= threshold) return 'full';
      if (this.value >= threshold - 0.5) return 'half';
      return 'empty';
    });
  }
}
