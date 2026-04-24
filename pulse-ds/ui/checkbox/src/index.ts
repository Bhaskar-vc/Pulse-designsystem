export * from './lib/checkbox.module';
export * from './lib/checkbox.component';
export { VCheckbox as VcCheckbox } from './lib/checkbox.component';

/** Compat type for copied vantage-ui components */
export type VcCheckboxChangeEvent = {
  checked?: boolean;
  indeterminate?: boolean;
  changedItem?: unknown;
  originalEvent?: Event;
};
