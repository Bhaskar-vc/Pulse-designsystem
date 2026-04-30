import type { Meta, StoryObj } from '@storybook/angular';
import { VDropdown } from './dropdown.component';

const sampleItems = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

const meta: Meta<VDropdown> = {
  title: 'Form Controls/Dropdown',
  component: VDropdown,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of options with value and label',
    },
    value: {
      control: 'text',
      description: 'Currently selected value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when nothing is selected',
    },
    label: {
      control: 'text',
      description: 'Optional field label displayed above the dropdown',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text displayed below the dropdown',
    },
    hasError: {
      control: 'boolean',
      description: 'Whether the dropdown is in an error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown when hasError is true',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the dropdown is disabled',
    },
    searchable: {
      control: 'boolean',
      description: 'Show a search box inside the dropdown menu',
    },
    multi: {
      control: 'boolean',
      description: 'Enable multi-select mode',
    },
    selectedValues: {
      control: 'object',
      description: 'Array of selected values in multi-select mode',
    },
    multiHint: {
      control: 'text',
      description: 'Hint text shown in the multi-select header',
    },
  },
};
export default meta;
type Story = StoryObj<VDropdown>;

// --- Default ---
export const Default: Story = {
  args: {
    items: sampleItems,
    value: '',
    placeholder: 'Select a fruit',
    label: '',
    hint: '',
    hasError: false,
    errorMessage: '',
    disabled: false,
    searchable: false,
    multi: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-dropdown
        [items]="items"
        [value]="value"
        [placeholder]="placeholder"
        [label]="label"
        [hint]="hint"
        [hasError]="hasError"
        [errorMessage]="errorMessage"
        [disabled]="disabled"
        [searchable]="searchable"
        [multi]="multi"
      ></v-dropdown>
    `,
  }),
};

// --- With Label ---
export const WithLabel: Story = {
  render: () => ({
    props: { items: sampleItems },
    template: `
      <v-dropdown
        [items]="items"
        label="Favorite Fruit"
        hint="Choose the fruit you like most"
        placeholder="Select a fruit"
      ></v-dropdown>
    `,
  }),
};

// --- Searchable ---
export const Searchable: Story = {
  render: () => ({
    props: {
      items: [
        { value: 'apple', label: 'Apple' },
        { value: 'apricot', label: 'Apricot' },
        { value: 'avocado', label: 'Avocado' },
        { value: 'banana', label: 'Banana' },
        { value: 'blueberry', label: 'Blueberry' },
        { value: 'cherry', label: 'Cherry' },
        { value: 'cranberry', label: 'Cranberry' },
        { value: 'date', label: 'Date' },
        { value: 'elderberry', label: 'Elderberry' },
        { value: 'fig', label: 'Fig' },
      ],
    },
    template: `
      <v-dropdown
        [items]="items"
        [searchable]="true"
        label="Search Fruits"
        placeholder="Type to search..."
      ></v-dropdown>
    `,
  }),
};

// --- Multi Select ---
export const MultiSelect: Story = {
  render: () => ({
    props: { items: sampleItems, selectedValues: ['apple', 'cherry'] },
    template: `
      <v-dropdown
        [items]="items"
        [multi]="true"
        [selectedValues]="selectedValues"
        label="Select Fruits"
        multiHint="Pick one or more"
        placeholder="Select fruits"
      ></v-dropdown>
    `,
  }),
};

// --- Error State ---
export const ErrorState: Story = {
  render: () => ({
    props: { items: sampleItems },
    template: `
      <v-dropdown
        [items]="items"
        [hasError]="true"
        errorMessage="This field is required"
        label="Fruit"
        placeholder="Select a fruit"
      ></v-dropdown>
    `,
  }),
};

// --- Disabled ---
export const Disabled: Story = {
  render: () => ({
    props: { items: sampleItems },
    template: `
      <v-dropdown
        [items]="items"
        [disabled]="true"
        label="Fruit"
        placeholder="Select a fruit"
        value="banana"
      ></v-dropdown>
    `,
  }),
};

// --- Do and Don't ---
export const DoAndDont: Story = {
  render: () => ({
    props: {
      goodItems: [
        { value: 'eng', label: 'Engineering' },
        { value: 'des', label: 'Design' },
        { value: 'mkt', label: 'Marketing' },
        { value: 'sal', label: 'Sales' },
      ],
      badItems: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
      ],
    },
    template: `
      <div class="dnd-wrap">
        <div class="dnd-do">
          <div class="dnd-do-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Do
          </div>
          <div class="dnd-do-body">
            <v-dropdown
              [items]="goodItems"
              label="Department"
              placeholder="Select a department"
              hint="Choose your team"
            ></v-dropdown>
            <p class="dnd-caption">Use descriptive labels, meaningful placeholder text, and provide hint text to guide the user.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-dropdown
              [items]="badItems"
              placeholder="Select"
            ></v-dropdown>
            <p class="dnd-caption">Don't use cryptic option labels or omit the field label -- users need context to make a selection.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
