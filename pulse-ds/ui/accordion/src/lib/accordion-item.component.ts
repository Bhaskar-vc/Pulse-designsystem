import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { VAccordion } from './accordion.component';

@Component({
  standalone: true,
  selector: 'v-accordion-item',
  imports: [CommonModule],
  template: `
    <div class="accordion-item">
      <button
        type="button"
        class="accordion-trigger"
        [class.is-open]="isOpen"
        [disabled]="disabled || null"
        [attr.aria-expanded]="isOpen"
        (click)="toggle()"
      >
        <span class="accordion-trigger-content">
          <span>{{ title }}</span>
          @if (badge) {
            <span class="acc-badge" [class]="badgeClass">{{ badge }}</span>
          }
        </span>
        <svg class="accordion-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </button>
      <div class="accordion-content-wrap" [class.is-open]="isOpen">
        <div class="accordion-content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VAccordionItem {
  /** Trigger button label */
  @Input() title = '';

  /** Optional badge text */
  @Input() badge = '';

  /** Badge color: '' | 'success' | 'warning' */
  @Input() badgeType: '' | 'success' | 'warning' = '';

  /** Disabled state */
  @Input() disabled = false;

  get isOpen(): boolean { return this.accordion.isOpen(this); }

  get badgeClass(): string {
    return this.badgeType ? `acc-badge acc-badge-${this.badgeType}` : 'acc-badge';
  }

  private accordion = inject(VAccordion);
  readonly cdr = inject(ChangeDetectorRef);

  toggle(): void {
    if (!this.disabled) this.accordion.toggle(this);
  }
}
