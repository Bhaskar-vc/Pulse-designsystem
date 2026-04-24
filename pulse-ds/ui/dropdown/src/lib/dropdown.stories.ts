import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VDropdown } from './dropdown.component';
import { DropdownItem } from './dropdown.types';

const sampleItems: DropdownItem[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
];

const groupedItems: DropdownItem[] = [
  { value: 'apple', label: 'Apple', group: 'Fruits' },
  { value: 'banana', label: 'Banana', group: 'Fruits' },
  { value: 'carrot', label: 'Carrot', group: 'Vegetables' },
  { value: 'broccoli', label: 'Broccoli', group: 'Vegetables' },
  { value: 'salmon', label: 'Salmon', group: 'Protein' },
  { value: 'chicken', label: 'Chicken', group: 'Protein' },
];

const meta: Meta<VDropdown> = {
  title: 'Form Controls/Dropdown',
  component: VDropdown,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [FormsModule] })],
  argTypes: {
    items: {
      control: 'object',
      description: 'Available options',
    },
    value: {
      control: 'text',
      description: 'Selected value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder shown when nothing is selected',
    },
    label: {
      control: 'text',
      description: 'Optional field label',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text',
    },
    hasError: {
      control: 'boolean',
      description: 'Error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    searchable: {
      control: 'boolean',
      description: 'Show search box in menu',
    },
  },
};

export default meta;
type Story = StoryObj<VDropdown>;

export const Default: Story = {
  args: {
    items: sampleItems,
    placeholder: 'Select a fruit',
    label: 'Fruit',
    hint: '',
    hasError: false,
    disabled: false,
    searchable: false,
  },
};

export const WithLabel: Story = {
  args: {
    items: sampleItems,
    placeholder: 'Choose an option',
    label: 'Favorite fruit',
    hint: 'Pick the one you like most',
    hasError: false,
    disabled: false,
    searchable: false,
  },
};

export const Searchable: Story = {
  args: {
    items: sampleItems,
    placeholder: 'Search and select',
    label: 'Fruit',
    searchable: true,
    hasError: false,
    disabled: false,
  },
};

export const GroupedItems: Story = {
  args: {
    items: groupedItems,
    placeholder: 'Select a food item',
    label: 'Food',
    searchable: false,
    hasError: false,
    disabled: false,
  },
};

export const WithError: Story = {
  args: {
    items: sampleItems,
    placeholder: 'Select a fruit',
    label: 'Fruit',
    hasError: true,
    errorMessage: 'This field is required',
    disabled: false,
    searchable: false,
  },
};

export const PreSelected: Story = {
  args: {
    items: sampleItems,
    value: 'cherry',
    placeholder: 'Select a fruit',
    label: 'Fruit',
    hasError: false,
    disabled: false,
    searchable: false,
  },
};

export const Disabled: Story = {
  args: {
    items: sampleItems,
    placeholder: 'Cannot select',
    label: 'Fruit',
    hasError: false,
    disabled: true,
    searchable: false,
  },
};
