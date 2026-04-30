import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { statVariants } from './stat.variants';
import { StatLayout, StatIconColor } from './stat.enums';

@Component({
  standalone: true,
  selector: 'v-stat',
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VStat implements OnChanges {
  /** Row label above the value */
  @Input() title = '';

  /** Primary metric — the big number */
  @Input() value = '';

  /** Supporting text below the value */
  @Input() desc = '';

  /** Trend text (e.g. "+12.5% from last month") */
  @Input() trend = '';

  /** Trend direction: 'up' | 'down' | 'neutral' */
  @Input() trendDir: 'up' | 'down' | 'neutral' = 'neutral';

  /** Icon background color */
  @Input() iconColor: `${StatIconColor}` = StatIconColor.NONE;

  /** Center-align content */
  @Input() centered = false;

  iconClass = '';

  ngOnChanges(): void {
    this.iconClass = statVariants({ iconColor: this.iconColor as any });
  }
}
