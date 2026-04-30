import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelType } from './label.enums';
import { labelVariants } from './label.variants';

@Component({
    standalone: true,
    selector: 'vc-label',
    imports: [CommonModule],
    templateUrl: './label.component.html',
    styleUrl: './label.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VcLabel {
  @Input() type: `${LabelType}` = LabelType.DARK;
  @Input() text: string = '';
  @Input() tooltip: boolean = false;
  @Input() required: boolean = false;
  @Input() optional: boolean = false;
  @Input() labelFor: string | undefined;

  getStyling() {
    return labelVariants({ type: this.type as any });
  }
}
