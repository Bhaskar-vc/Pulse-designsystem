import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VProgressBar } from './progress-bar.component';
import { VProgressCircle } from './progress-circle.component';

const meta: Meta<VProgressBar> = {
  title: 'Data Display/Progress',
  component: VProgressBar,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VProgressCircle],
    }),
  ],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value (0 to max)',
    },
    max: {
      control: 'number',
      description: 'Maximum value representing 100% completion',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Height of the progress track',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: 'Fill color of the progress bar',
    },
    striped: {
      control: 'boolean',
      description: 'Show a diagonal stripe pattern on the fill',
    },
    animated: {
      control: 'boolean',
      description: 'Animate the stripe pattern (requires striped)',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Show an indeterminate loading animation instead of a fixed value',
    },
    label: {
      control: 'text',
      description: 'Optional label displayed above the progress bar',
    },
    showValue: {
      control: 'boolean',
      description: 'Show the percentage value next to the label',
    },
  },
};
export default meta;
type Story = StoryObj<VProgressBar>;

// --- Default ---
export const Default: Story = {
  args: {
    value: 65,
    max: 100,
    size: 'md',
    color: 'primary',
    striped: false,
    animated: false,
    indeterminate: false,
    label: '',
    showValue: false,
  },
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
        <div>
          <p style="margin: 0 0 4px; font-size: 13px; color: #555;">Small</p>
          <v-progress-bar [value]="60" size="sm" color="primary"></v-progress-bar>
        </div>
        <div>
          <p style="margin: 0 0 4px; font-size: 13px; color: #555;">Medium (default)</p>
          <v-progress-bar [value]="60" size="md" color="primary"></v-progress-bar>
        </div>
        <div>
          <p style="margin: 0 0 4px; font-size: 13px; color: #555;">Large</p>
          <v-progress-bar [value]="60" size="lg" color="primary"></v-progress-bar>
        </div>
        <div>
          <p style="margin: 0 0 4px; font-size: 13px; color: #555;">Extra Large</p>
          <v-progress-bar [value]="60" size="xl" color="primary"></v-progress-bar>
        </div>
      </div>
    `,
  }),
};

// --- Colors ---
export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 480px;">
        <div>
          <p style="margin: 0 0 4px; font-size: 13px; color: #555;">Primary</p>
          <v-progress-bar [value]="70" color="primary"></v-progress-bar>
        </div>
        <div>
          <p style="margin: 0 0 4px; font-size: 13px; color: #555;">Success</p>
          <v-progress-bar [value]="70" color="success"></v-progress-bar>
        </div>
        <div>
          <p style="margin: 0 0 4px; font-size: 13px; color: #555;">Warning</p>
          <v-progress-bar [value]="70" color="warning"></v-progress-bar>
        </div>
        <div>
          <p style="margin: 0 0 4px; font-size: 13px; color: #555;">Error</p>
          <v-progress-bar [value]="70" color="error"></v-progress-bar>
        </div>
        <div>
          <p style="margin: 0 0 4px; font-size: 13px; color: #555;">Info</p>
          <v-progress-bar [value]="70" color="info"></v-progress-bar>
        </div>
      </div>
    `,
  }),
};

// --- Striped ---
export const Striped: Story = {
  args: {
    value: 75,
    color: 'primary',
    striped: true,
    animated: false,
  },
};

// --- Animated ---
export const Animated: Story = {
  args: {
    value: 75,
    color: 'primary',
    striped: true,
    animated: true,
  },
};

// --- Indeterminate ---
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    color: 'primary',
  },
};

// --- With Label ---
export const WithLabel: Story = {
  args: {
    value: 42,
    label: 'Uploading files...',
    showValue: true,
    color: 'primary',
  },
};

// --- Circular Progress ---
export const CircularProgress: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: flex-end;">
        <v-progress-circle [value]="25" color="primary" label="Downloads"></v-progress-circle>
        <v-progress-circle [value]="50" color="success" label="Uploads"></v-progress-circle>
        <v-progress-circle [value]="75" color="warning" label="Storage"></v-progress-circle>
        <v-progress-circle [value]="100" color="info" label="Complete"></v-progress-circle>
      </div>
    `,
  }),
};

// --- Circular Sizes ---
export const CircularSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: flex-end;">
        <v-progress-circle [value]="65" [diameter]="48" [strokeWidth]="5" color="primary" label="48px"></v-progress-circle>
        <v-progress-circle [value]="65" [diameter]="80" [strokeWidth]="8" color="primary" label="80px"></v-progress-circle>
        <v-progress-circle [value]="65" [diameter]="120" [strokeWidth]="10" color="primary" label="120px"></v-progress-circle>
        <v-progress-circle [value]="65" [diameter]="160" [strokeWidth]="12" color="primary" label="160px"></v-progress-circle>
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
            <div style="max-width: 360px;">
              <v-progress-bar [value]="72" label="Uploading report.pdf" [showValue]="true" color="primary"></v-progress-bar>
            </div>
            <p class="dnd-caption">Provide a label and show the value so users understand what is being tracked and the current progress.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="max-width: 360px;">
              <v-progress-bar [value]="72" color="primary"></v-progress-bar>
            </div>
            <p class="dnd-caption">Don't show a bare progress bar without context — users can't tell what it represents or how far along it is.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
