import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VProgressBar } from './progress-bar.component';
import { VProgressCircle } from './progress-circle.component';

const meta: Meta<VProgressBar> = {
  title: 'Data Display/Progress',
  component: VProgressBar,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [VProgressCircle] })],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value (0-max)',
    },
    max: {
      control: 'number',
      description: 'Maximum value (default 100)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Track height',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: 'Fill color',
    },
    striped: {
      control: 'boolean',
      description: 'Show diagonal stripe pattern',
    },
    animated: {
      control: 'boolean',
      description: 'Animate the stripes (requires striped=true)',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Show indeterminate animation instead of fixed value',
    },
    label: {
      control: 'text',
      description: 'Optional label displayed above the bar',
    },
    showValue: {
      control: 'boolean',
      description: 'Show percentage value to the right of the label',
    },
  },
};

export default meta;
type Story = StoryObj<VProgressBar>;

export const Default: Story = {
  args: {
    value: 60,
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

export const WithLabel: Story = {
  args: {
    value: 75,
    max: 100,
    size: 'md',
    color: 'primary',
    label: 'Upload progress',
    showValue: true,
  },
};

export const Striped: Story = {
  args: {
    value: 50,
    size: 'lg',
    color: 'success',
    striped: true,
    animated: false,
  },
};

export const StripedAnimated: Story = {
  args: {
    value: 65,
    size: 'lg',
    color: 'info',
    striped: true,
    animated: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    size: 'md',
    color: 'primary',
  },
};

export const AllColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <v-progress-bar [value]="60" color="primary" label="Primary" [showValue]="true"></v-progress-bar>
        <v-progress-bar [value]="70" color="success" label="Success" [showValue]="true"></v-progress-bar>
        <v-progress-bar [value]="45" color="warning" label="Warning" [showValue]="true"></v-progress-bar>
        <v-progress-bar [value]="30" color="error" label="Error" [showValue]="true"></v-progress-bar>
        <v-progress-bar [value]="85" color="info" label="Info" [showValue]="true"></v-progress-bar>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <v-progress-bar [value]="60" size="sm" label="Small"></v-progress-bar>
        <v-progress-bar [value]="60" size="md" label="Medium"></v-progress-bar>
        <v-progress-bar [value]="60" size="lg" label="Large"></v-progress-bar>
        <v-progress-bar [value]="60" size="xl" label="Extra Large"></v-progress-bar>
      </div>
    `,
  }),
};

export const Circle: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <v-progress-circle [value]="75" color="primary" [showValue]="true"></v-progress-circle>
        <v-progress-circle [value]="50" color="success" [showValue]="true" label="Tasks"></v-progress-circle>
        <v-progress-circle [value]="30" color="warning" [diameter]="60" [strokeWidth]="6"></v-progress-circle>
        <v-progress-circle [value]="90" color="error" [diameter]="100" [strokeWidth]="10" sublabel="Complete"></v-progress-circle>
      </div>
    `,
  }),
};
