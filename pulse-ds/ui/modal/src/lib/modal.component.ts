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
  selector: 'v-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VModal implements OnChanges {
  /** Controls modal visibility */
  @Input() isOpen = false;

  /** Modal title text */
  @Input() title = '';

  /** Modal body text (use [modalBody] slot for richer content) */
  @Input() body = '';

  /** Size variant */
  @Input() size: 'default' | 'wide' = 'default';

  /** Center icon + text layout */
  @Input() centered = false;

  /** Show X close button in header */
  @Input() showClose = true;

  /** Actions alignment: 'between' | 'right' | 'center' | 'stacked' */
  @Input() actionsAlign: 'between' | 'right' | 'center' | 'stacked' = 'between';

  /** Close backdrop click */
  @Input() closeOnBackdrop = true;

  /** Emitted when modal requests close */
  @Output() closed = new EventEmitter<void>();

  actionsClass = '';

  ngOnChanges(): void {
    const map: Record<string, string> = {
      between: 'modal-actions',
      right: 'modal-actions modal-actions--right',
      center: 'modal-actions modal-actions--centered',
      stacked: 'modal-actions modal-actions--stacked',
    };
    this.actionsClass = map[this.actionsAlign] ?? 'modal-actions';
  }

  close(): void {
    this.closed.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if (this.closeOnBackdrop && event.target === event.currentTarget) {
      this.close();
    }
  }
}
