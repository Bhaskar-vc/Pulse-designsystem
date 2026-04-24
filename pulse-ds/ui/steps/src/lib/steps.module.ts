import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VSteps } from './steps.component';

@NgModule({
  imports: [CommonModule, VSteps],
  exports: [VSteps],
})
export class StepsModule {}
