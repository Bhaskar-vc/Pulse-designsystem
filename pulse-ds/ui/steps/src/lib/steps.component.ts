import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepDef, StepState, StepsSize } from './steps.types';

@Component({
  standalone: true,
  selector: 'v-steps',
  imports: [CommonModule],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VSteps implements OnChanges {
  /** Step definitions */
  @Input() steps: StepDef[] = [];

  /** Active step index (0-based); auto-sets step states if states not provided */
  @Input() activeStep = -1;

  /** Visual size variant */
  @Input() size: StepsSize = 'md';

  /** Vertical orientation */
  @Input() vertical = false;

  stepsClass = '';

  ngOnChanges(): void {
    const parts = ['steps'];
    if (this.size !== 'md') parts.push(`steps--${this.size}`);
    if (this.vertical) parts.push('steps--vertical');
    this.stepsClass = parts.join(' ');

    if (this.activeStep >= 0) {
      this.steps = this.steps.map((s, i) => ({
        ...s,
        state: s.state ?? this.inferState(i),
      }));
    }
  }

  stepClass(step: StepDef): string {
    const parts = ['step'];
    if (step.state) parts.push(`is-${step.state}`);
    return parts.join(' ');
  }

  private inferState(index: number): StepState {
    if (index < this.activeStep) return 'done';
    if (index === this.activeStep) return 'active';
    return 'pending';
  }
}
