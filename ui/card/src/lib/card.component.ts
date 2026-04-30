import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { cardVariants } from './card.variants';
import { CardSize } from './card.enums';

@Component({
  standalone: true,
  selector: 'v-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VCard implements OnChanges {
  /** Size variant */
  @Input() size: `${CardSize}` = CardSize.MD;

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

  /** Glass morphism — frosted backdrop blur */
  @Input() glass = false;

  /** Outlined — visible border, no shadow lift */
  @Input() outlined = false;

  /** Image-full overlay — image fills the card background */
  @Input() overlay = false;

  /** Emitted when a clickable card is clicked */
  @Output() cardClick = new EventEmitter<void>();

  cardClass = '';

  ngOnChanges(): void {
    this.cardClass = cardVariants({
      size:       this.size as any,
      selected:   this.selected,
      disabled:   this.disabled,
      clickable:  this.clickable,
      flat:       this.flat,
      horizontal: this.horizontal,
      glass:      this.glass,
      outlined:   this.outlined,
      overlay:    this.overlay,
    });
  }
}
