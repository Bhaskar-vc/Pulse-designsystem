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
import { SegmentItem } from './segment.types';
import { SegmentSize } from './segment.enums';
import { segmentVariants } from './segment.variants';

@Component({
  standalone: true,
  selector: 'v-segment',
  imports: [CommonModule],
  templateUrl: './segment.component.html',
  styleUrl: './segment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VSegment),
      multi: true,
    },
  ],
})
export class VSegment implements ControlValueAccessor, OnChanges {
  /** Option items to display */
  @Input() items: SegmentItem[] = [];

  /** Currently selected value */
  @Input() value = '';

  /** Size variant */
  @Input() size: SegmentSize = SegmentSize.MD;

  /** Accessible group label */
  @Input() ariaLabel = '';

  /** Emitted when a segment button is clicked */
  @Output() valueChange = new EventEmitter<string>();

  segmentClass = '';

  private cdr = inject(ChangeDetectorRef);
  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnChanges(): void {
    this.segmentClass = segmentVariants({ size: this.size as any });
  }

  select(item: SegmentItem): void {
    if (item.disabled) return;
    this.value = item.value;
    this.onChange(this.value);
    this.onTouched();
    this.valueChange.emit(this.value);
    this.cdr.markForCheck();
  }

  writeValue(value: string): void {
    this.value = value ?? '';
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (v: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}
