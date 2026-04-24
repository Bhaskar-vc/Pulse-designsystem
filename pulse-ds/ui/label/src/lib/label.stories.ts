import type { Meta, StoryObj } from '@storybook/angular';
import { VcLabel } from './label.component';

const meta: Meta<VcLabel> = {
  title: 'Utilities/Label',
  component: VcLabel,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['light', 'dark', 'bold'],
      description: 'Visual weight of the label text.',
    },
    text: {
      control: 'text',
      description: 'The label text to display.',
    },
    tooltip: {
      control: 'boolean',
      description: 'Whether to show a tooltip info icon next to the label.',
    },
    required: {
      control: 'boolean',
      description: 'Whether to show a required asterisk (*).',
    },
    optional: {
      control: 'boolean',
      description: 'Whether to show an "(optional)" suffix.',
    },
    labelFor: {
      control: 'text',
      description: 'The id of the form element this label is associated with.',
    },
  },
};

export default meta;
type Story = StoryObj<VcLabel>;

export const Default: Story = {
  args: {
    type: 'dark',
    text: 'Email address',
    tooltip: false,
    required: false,
    optional: false,
  },
};

export const Light: Story = {
  args: {
    type: 'light',
    text: 'Username',
  },
};

export const Bold: Story = {
  args: {
    type: 'bold',
    text: 'Full Name',
  },
};

export const Required: Story = {
  args: {
    type: 'dark',
    text: 'Password',
    required: true,
  },
};

export const Optional: Story = {
  args: {
    type: 'dark',
    text: 'Phone number',
    optional: true,
  },
};

export const WithTooltip: Story = {
  args: {
    type: 'dark',
    text: 'API Key',
    tooltip: true,
  },
};

export const RequiredWithTooltip: Story = {
  args: {
    type: 'dark',
    text: 'Organization ID',
    required: true,
    tooltip: true,
  },
};
