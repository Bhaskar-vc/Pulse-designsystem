import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { accordionVariants } from './accordion.variants';
import { AccordionVariant, AccordionSize } from './accordion.enums';

// Forward-declare to avoid circular import — items inject VAccordion via DI at runtime.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AccordionItemRef = { cdr: { markForCheck(): void } };

@Component({
  standalone: true,
  selector: 'v-accordion',
  imports: [CommonModule],
  template: `
    <div [class]="accordionClass">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VAccordion implements OnChanges {
  /** Visual variant */
  @Input() variant: `${AccordionVariant}` = AccordionVariant.DEFAULT;

  /** Height size (default = md, 48px) */
  @Input() size: `${AccordionSize}` = AccordionSize.MD;

  /** Allow multiple items open simultaneously */
  @Input() allowMultiple = false;

  accordionClass = '';

  private openItems = new Set<AccordionItemRef>();
  private cdr = inject(ChangeDetectorRef);

  ngOnChanges(): void {
    this.accordionClass = accordionVariants({ variant: this.variant as any, size: this.size as any });
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
