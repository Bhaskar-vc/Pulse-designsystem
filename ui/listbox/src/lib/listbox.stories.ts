import type { Meta, StoryObj } from '@storybook/angular';
import { VcListbox } from './listbox.component';

const sampleOptions = [
  { id: '1', text: 'United States' },
  { id: '2', text: 'United Kingdom' },
  { id: '3', text: 'Canada' },
  { id: '4', text: 'Australia' },
  { id: '5', text: 'Germany' },
];

const meta: Meta<VcListbox> = {
  title: 'Form Controls/Listbox',
  component: VcListbox,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of selectable options with id and text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when nothing is selected',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the listbox is in a loading state',
    },
    size: {
      control: 'select',
      options: ['sm', 'default'],
      description: 'Size of the listbox',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Color theme of the listbox',
    },
    multiple: {
      control: 'boolean',
      description: 'Whether multiple options can be selected',
    },
    showSelectAllCheckbox: {
      control: 'boolean',
      description: 'Show a select-all checkbox in multi-select mode',
    },
  },
};
export default meta;
type Story = StoryObj<VcListbox>;

// --- Default ---
export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select a country',
    loading: false,
    size: 'default',
    theme: 'light',
    multiple: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 320px;">
        <vc-listbox
          [options]="options"
          [placeholder]="placeholder"
          [loading]="loading"
          [size]="size"
          [theme]="theme"
          [multiple]="multiple"
        ></vc-listbox>
      </div>
    `,
  }),
};

// --- Multiple ---
export const Multiple: Story = {
  render: () => ({
    props: { options: sampleOptions },
    template: `
      <div style="max-width: 320px;">
        <vc-listbox
          [options]="options"
          [multiple]="true"
          [showSelectAllCheckbox]="true"
          placeholder="Select countries"
        ></vc-listbox>
      </div>
    `,
  }),
};

// --- Loading ---
export const Loading: Story = {
  render: () => ({
    props: { options: [] },
    template: `
      <div style="max-width: 320px;">
        <vc-listbox
          [options]="options"
          [loading]="true"
          placeholder="Loading options..."
        ></vc-listbox>
      </div>
    `,
  }),
};

// --- Dark Theme ---
export const DarkTheme: Story = {
  render: () => ({
    props: { options: sampleOptions },
    template: `
      <div style="max-width: 320px; padding: 20px; background: #1d2939; border-radius: 8px;">
        <vc-listbox
          [options]="options"
          theme="dark"
          placeholder="Select a country"
        ></vc-listbox>
      </div>
    `,
  }),
};

// --- Do and Don't ---
export const DoAndDont: Story = {
  render: () => ({
    props: {
      goodOptions: [
        { id: '1', text: 'Engineering' },
        { id: '2', text: 'Design' },
        { id: '3', text: 'Product Management' },
        { id: '4', text: 'Marketing' },
        { id: '5', text: 'Sales' },
      ],
      badOptions: [
        { id: '1', text: 'A' },
        { id: '2', text: 'B' },
        { id: '3', text: 'C' },
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
            <div style="max-width: 280px;">
              <vc-listbox
                [options]="goodOptions"
                [multiple]="true"
                [showSelectAllCheckbox]="true"
                placeholder="Select departments"
              ></vc-listbox>
            </div>
            <p class="dnd-caption">Use descriptive option labels and provide a select-all option when multi-selecting from a known set.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="max-width: 280px;">
              <vc-listbox
                [options]="badOptions"
                placeholder="Select"
              ></vc-listbox>
            </div>
            <p class="dnd-caption">Don't use abbreviated or meaningless option labels -- users need context to make a choice.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
