import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'v-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VCard implements OnChanges {
  /** Size variant: 'sm' | 'md' | 'lg' */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /** Whether the card is in selected state */
  @Input() selected = false;

  /** Whether the card is disabled */
  @Input() disabled = false;

  /** Whether the card shows a pointer cursor and hover effect on click */
  @Input() clickable = false;

  /** Remove box shadow */
  @Input() flat = false;

  /** Horizontal card layout */
  @Input() horizontal = false;

  /** Emitted when a clickable card is clicked */
  @Output() cardClick = new EventEmitter<void>();

  cardClass = '';

  ngOnChanges(): void {
    const parts = ['card'];
    if (this.size !== 'md') parts.push(`card--${this.size}`);
    if (this.selected) parts.push('card--selected');
    if (this.disabled) parts.push('card--disabled');
    if (this.clickable) parts.push('card--clickable');
    if (this.flat) parts.push('card--flat');
    if (this.horizontal) parts.push('card--horizontal');
    this.cardClass = parts.join(' ');
  }
}
