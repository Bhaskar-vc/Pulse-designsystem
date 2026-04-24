export interface DropdownItem {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
  danger?: boolean;
  dividerBefore?: boolean;
  group?: string;
}
