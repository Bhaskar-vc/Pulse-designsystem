import type { Meta, StoryObj } from '@storybook/angular';
import { VSpinner } from './spinner.component';

const meta: Meta<VSpinner> = {
  title: 'Feedback/Spinner',
  component: VSpinner,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger'],
      description: 'Spinner color',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'md', 'lg'],
      description: 'Spinner size',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Background theme (light or dark)',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label',
    },
  },
};

export default meta;
type Story = StoryObj<VSpinner>;

export const Default: Story = {
  args: {
    color: 'primary',
    size: 'default',
    theme: 'light',
    ariaLabel: 'Loading',
  },
};

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'sm',
    theme: 'light',
  },
};

export const Large: Story = {
  args: {
    color: 'primary',
    size: 'lg',
    theme: 'light',
  },
};

export const DarkTheme: Story = {
  args: {
    color: 'primary',
    size: 'default',
    theme: 'dark',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="background: #1f2937; padding: 24px; border-radius: 8px; display: inline-block;">
        <v-spinner [color]="color" [size]="size" [theme]="theme" [ariaLabel]="ariaLabel"></v-spinner>
      </div>
    `,
  }),
};

export const AllColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <v-spinner color="primary"></v-spinner>
        <v-spinner color="secondary"></v-spinner>
        <v-spinner color="success"></v-spinner>
        <v-spinner color="info"></v-spinner>
        <v-spinner color="warning"></v-spinner>
        <v-spinner color="danger"></v-spinner>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <v-spinner size="xs"></v-spinner>
        <v-spinner size="sm"></v-spinner>
        <v-spinner size="default"></v-spinner>
        <v-spinner size="md"></v-spinner>
        <v-spinner size="lg"></v-spinner>
      </div>
    `,
  }),
};
