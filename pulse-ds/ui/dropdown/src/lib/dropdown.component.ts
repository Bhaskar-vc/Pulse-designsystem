import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  forwardRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownItem } from './dropdown.types';

@Component({
  standalone: true,
  selector: 'v-dropdown',
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VDropdown), multi: true },
  ],
})
export class VDropdown implements ControlValueAccessor, OnChanges {
  /** Available options */
  @Input() items: DropdownItem[] = [];

  /** Selected value */
  @Input() value = '';

  /** Placeholder shown when nothing is selected */
  @Input() placeholder = 'Select an option';

  /** Optional field label */
  @Input() label = '';

  /** Optional hint text */
  @Input() hint = '';

  /** Error state */
  @Input() hasError = false;

  /** Error message */
  @Input() errorMessage = '';

  /** Disabled state */
  @Input() disabled = false;

  /** Show search box in menu */
  @Input() searchable = false;

  /** Emitted when selection changes */
  @Output() valueChange = new EventEmitter<string>();
  @Output() itemSelected = new EventEmitter<DropdownItem>();

  isOpen = false;
  selectedLabel = '';
  searchQuery = '';
  filteredItems: DropdownItem[] = [];

  private cdr = inject(ChangeDetectorRef);
  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnChanges(): void {
    this.filteredItems = [...this.items];
    this.updateLabel();
  }

  toggle(): void {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.searchQuery = '';
      this.filteredItems = [...this.items];
    }
    this.cdr.markForCheck();
  }

  close(): void {
    this.isOpen = false;
    this.cdr.markForCheck();
  }

  select(item: DropdownItem): void {
    this.value = item.value;
    this.updateLabel();
    this.onChange(this.value);
    this.onTouched();
    this.valueChange.emit(this.value);
    this.itemSelected.emit(item);
    this.close();
  }

  filterItems(): void {
    const q = this.searchQuery.toLowerCase();
    this.filteredItems = q
      ? this.items.filter(i => i.label.toLowerCase().includes(q))
      : [...this.items];
    this.cdr.markForCheck();
  }

  isFirstInGroup(item: DropdownItem): boolean {
    const idx = this.filteredItems.indexOf(item);
    if (idx === 0) return true;
    return this.filteredItems[idx - 1]?.group !== item.group;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void { this.close(); }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    const el = e.target as HTMLElement;
    if (!el.closest('v-dropdown')) this.close();
  }

  writeValue(val: string): void {
    this.value = val ?? '';
    this.updateLabel();
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (v: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  private updateLabel(): void {
    this.selectedLabel = this.items.find(i => i.value === this.value)?.label ?? '';
  }
}
