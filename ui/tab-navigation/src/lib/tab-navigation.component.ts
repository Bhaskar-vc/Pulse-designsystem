import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { VcMenuItem } from './menuitem';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'vc-tab-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tab-navigation.component.html',
  styleUrl: './tab-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VcTabNavigation implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  @Input() tabs: VcMenuItem[] | undefined;
  @Input() activeTab: VcMenuItem | undefined;
  @Input() labelSize: 'sm' | 'default' = 'default';

  @Output() onClick: EventEmitter<VcMenuItem> = new EventEmitter();

  selectedTab: VcMenuItem | undefined;
  showLeftArrow: boolean = false;
  showRightArrow: boolean = false;
  private scrollListener: (() => void) | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.checkScroll();
    this.setupScrollListener();
    this.setupResizeObserver();
  }

  private setupScrollListener(): void {
    if (!this.scrollContainer) return;
    this.scrollListener = this.checkScroll.bind(this);
    this.scrollContainer.nativeElement.addEventListener('scroll', this.scrollListener);
  }

  private setupResizeObserver(): void {
    if (!this.scrollContainer) return;
    this.resizeObserver = new ResizeObserver(() => {
      this.checkScroll();
    });
    this.resizeObserver.observe(this.scrollContainer.nativeElement);
  }

  private checkScroll(): void {
    if (!this.scrollContainer) return;
    const element = this.scrollContainer.nativeElement;
    this.showLeftArrow = element.scrollLeft > 0;
    this.showRightArrow = element.scrollLeft + element.clientWidth < element.scrollWidth;
    this.cdr.markForCheck();
  }

  scroll(direction: 'left' | 'right'): void {
    if (!this.scrollContainer) return;
    const element = this.scrollContainer.nativeElement;
    const scrollAmount = 200;
    const newScrollLeft = direction === 'left' ? element.scrollLeft - scrollAmount : element.scrollLeft + scrollAmount;
    element.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  }

  selectTab(tab: VcMenuItem): void {
    this.selectedTab = tab;
    this.activeTab = this.selectedTab;
    this.onClick.emit(this.selectedTab);
  }

  ngOnDestroy(): void {
    if (this.scrollListener && this.scrollContainer) {
      this.scrollContainer.nativeElement.removeEventListener('scroll', this.scrollListener);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
