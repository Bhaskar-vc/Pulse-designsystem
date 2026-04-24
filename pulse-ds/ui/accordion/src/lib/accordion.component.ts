import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Forward-declare to avoid circular import — VAccordionItem is never imported here.
// VAccordionItem injects VAccordion via DI at runtime.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AccordionItemRef = { cdr: { markForCheck(): void } };

@Component({
  standalone: true,
  selector: 'v-accordion',
  imports: [CommonModule],
  template: `
    <div class="accordion" [class]="accordionClass">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: VAccordion, useExisting: VAccordion }],
})
export class VAccordion implements OnChanges {
  /** Visual variant */
  @Input() variant: 'default' | 'bordered' = 'default';

  /** Allow multiple items open simultaneously */
  @Input() allowMultiple = false;

  accordionClass = '';

  private openItems = new Set<AccordionItemRef>();
  private cdr = inject(ChangeDetectorRef);

  ngOnChanges(): void {
    this.accordionClass =
      this.variant === 'bordered' ? 'accordion accordion--bordered' : 'accordion';
  }

  toggle(item: AccordionItemRef): void {
    const wasOpen = this.openItems.has(item);
    if (!this.allowMultiple) {
      const toClose = [...this.openItems].filter(i => i !== item);
      this.openItems.clear();
      toClose.forEach(i => i.cdr.markForCheck());
    }
    if (wasOpen) {
      this.openItems.delete(item);
    } else {
      this.openItems.add(item);
    }
    item.cdr.markForCheck();
    this.cdr.markForCheck();
  }

  isOpen(item: AccordionItemRef): boolean {
    return this.openItems.has(item);
  }
}
