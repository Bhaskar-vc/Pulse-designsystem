import type { Meta, StoryObj } from '@storybook/angular';
import { VAlert } from './alert.component';

const meta: Meta<VAlert> = {
  title: 'Feedback/Alert',
  component: VAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
      description: 'Alert semantic type',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined', 'toast', 'banner'],
      description: 'Visual variant',
    },
    size: {
      control: 'select',
      options: ['default', 'sm'],
      description: 'Size of the alert',
    },
    title: {
      control: 'text',
      description: 'Bold title line',
    },
    message: {
      control: 'text',
      description: 'Body message text',
    },
    dismissible: {
      control: 'boolean',
      description: 'Show dismiss button',
    },
    actionLabel: {
      control: 'text',
      description: 'Underlined action link label',
    },
  },
};

export default meta;
type Story = StoryObj<VAlert>;

export const Default: Story = {
  args: {
    type: 'info',
    variant: 'default',
    size: 'default',
    title: 'Information',
    message: 'This is an informational alert message.',
    dismissible: false,
    actionLabel: '',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    variant: 'default',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    dismissible: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    variant: 'default',
    title: 'Warning',
    message: 'Your session will expire in 5 minutes.',
    dismissible: false,
    actionLabel: 'Extend session',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    variant: 'default',
    title: 'Error',
    message: 'Something went wrong. Please try again later.',
    dismissible: true,
    actionLabel: 'Retry',
  },
};

export const Filled: Story = {
  args: {
    type: 'info',
    variant: 'filled',
    title: 'Filled variant',
    message: 'This alert uses the filled visual style.',
    dismissible: false,
  },
};

export const Outlined: Story = {
  args: {
    type: 'success',
    variant: 'outlined',
    title: 'Outlined variant',
    message: 'This alert uses the outlined visual style.',
    dismissible: false,
  },
};

export const Toast: Story = {
  args: {
    type: 'info',
    variant: 'toast',
    title: 'Toast notification',
    message: 'You have a new message.',
    dismissible: true,
  },
};

export const Banner: Story = {
  args: {
    type: 'warning',
    variant: 'banner',
    title: '',
    message: 'Scheduled maintenance on Sunday 10pm-2am. Plan accordingly.',
    dismissible: true,
  },
};

export const SmallSize: Story = {
  args: {
    type: 'info',
    variant: 'default',
    size: 'sm',
    title: '',
    message: 'Compact alert with smaller padding.',
    dismissible: false,
  },
};

export const AllTypes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 500px;">
        <v-alert type="info" title="Info" message="Informational message here."></v-alert>
        <v-alert type="success" title="Success" message="Operation completed successfully."></v-alert>
        <v-alert type="warning" title="Warning" message="Proceed with caution."></v-alert>
        <v-alert type="error" title="Error" message="An error has occurred."></v-alert>
      </div>
    `,
  }),
};
