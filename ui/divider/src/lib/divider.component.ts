import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerType, DividerOrientation } from './divider.enums';

@Component({
    standalone: true,
    selector: 'vc-divider',
    imports: [CommonModule],
    templateUrl: './divider.component.html',
    styleUrl: './divider.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VcDivider {
  @Input() type: `${DividerType}` | string = DividerType.HORIZONTAL;

  @Input() dashed: boolean = false;

  @Input() title: string | undefined;

  @Input() orientation: `${DividerOrientation}` | string | undefined;
}
