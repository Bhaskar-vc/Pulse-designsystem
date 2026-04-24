import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VAccordion } from './accordion.component';
import { VAccordionItem } from './accordion-item.component';

@NgModule({
  imports: [CommonModule, VAccordion, VAccordionItem],
  exports: [VAccordion, VAccordionItem],
})
export class AccordionModule {}
