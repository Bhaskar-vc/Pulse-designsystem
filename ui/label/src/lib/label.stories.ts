import type { Meta, StoryObj } from '@storybook/angular';
import { VcLabel } from './label.component';

const meta: Meta<VcLabel> = {
  title: 'Form Controls/Label',
  component: VcLabel,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['dark', 'light', 'bold'],
      description: 'Visual style of the label',
    },
    text: {
      control: 'text',
      description: 'Label text content',
    },
    tooltip: {
      control: 'boolean',
      description: 'Whether to show a tooltip icon',
    },
    required: {
      control: 'boolean',
      description: 'Whether to show a required indicator',
    },
    optional: {
      control: 'boolean',
      description: 'Whether to show an optional indicator',
    },
    labelFor: {
      control: 'text',
      description: 'The id of the form element this label is associated with',
    },
  },
};
export default meta;
type Story = StoryObj<VcLabel>;

// --- Default ---
export const Default: Story = {
  args: {
    text: 'Email address',
    type: 'dark',
    tooltip: false,
    required: false,
    optional: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <vc-label
        [text]="text"
        [type]="type"
        [tooltip]="tooltip"
        [required]="required"
        [optional]="optional"
        [labelFor]="labelFor"
      ></vc-label>
    `,
  }),
};

// --- Required ---
export const Required: Story = {
  render: () => ({
    template: `<vc-label text="Full name" [required]="true"></vc-label>`,
  }),
};

// --- Optional ---
export const Optional: Story = {
  render: () => ({
    template: `<vc-label text="Middle name" [optional]="true"></vc-label>`,
  }),
};

// --- With Tooltip ---
export const WithTooltip: Story = {
  render: () => ({
    template: `<vc-label text="API Key" [tooltip]="true"></vc-label>`,
  }),
};

// --- Types ---
export const Types: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <vc-label text="Dark label" type="dark"></vc-label>
        <vc-label text="Light label" type="light"></vc-label>
        <vc-label text="Bold label" type="bold"></vc-label>
      </div>
    `,
  }),
};

// --- Do and Don't ---
export const DoAndDont: Story = {
  render: () => ({
    template: `
      <div class="dnd-wrap">
        <div class="dnd-do">
          <div class="dnd-do-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Do
          </div>
          <div class="dnd-do-body">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <vc-label text="Email address" [required]="true"></vc-label>
              <vc-label text="Phone number" [optional]="true"></vc-label>
            </div>
            <p class="dnd-caption">Use concise, descriptive labels and clearly mark fields as required or optional.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="display:flex;flex-direction:column;gap:12px;">
              <vc-label text="Enter your electronic mail address here"></vc-label>
              <vc-label text="Field 2"></vc-label>
            </div>
            <p class="dnd-caption">Don't use overly verbose or generic labels -- keep them short and meaningful.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
