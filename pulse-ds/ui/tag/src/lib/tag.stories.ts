import type { Meta, StoryObj } from '@storybook/angular';
import { VTag } from './tag.component';

const meta: Meta<VTag> = {
  title: 'Data Display/Tag',
  component: VTag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'light', 'outlined', 'tinted'],
      description: 'Visual variant of the tag',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Semantic color of the tag',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tag',
    },
    showDot: {
      control: 'boolean',
      description: 'Show a colored dot before the label',
    },
    dismissible: {
      control: 'boolean',
      description: 'Show dismiss (x) button',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
};

export default meta;
type Story = StoryObj<VTag>;

export const Default: Story = {
  args: {
    variant: 'light',
    color: 'primary',
    size: 'md',
    showDot: false,
    dismissible: false,
  },
  render: (args) => ({
    props: args,
    template: `<v-tag [variant]="variant" [color]="color" [size]="size" [showDot]="showDot" [dismissible]="dismissible">Default Tag</v-tag>`,
  }),
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<v-tag [variant]="variant" [color]="color" [size]="size">Solid Tag</v-tag>`,
  }),
};

export const WithDot: Story = {
  args: {
    variant: 'light',
    color: 'success',
    size: 'md',
    showDot: true,
  },
  render: (args) => ({
    props: args,
    template: `<v-tag [variant]="variant" [color]="color" [size]="size" [showDot]="showDot">Active</v-tag>`,
  }),
};

export const Dismissible: Story = {
  args: {
    variant: 'light',
    color: 'error',
    size: 'md',
    dismissible: true,
  },
  render: (args) => ({
    props: args,
    template: `<v-tag [variant]="variant" [color]="color" [size]="size" [dismissible]="dismissible">Remove me</v-tag>`,
  }),
};

export const AllColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-tag color="primary">Primary</v-tag>
        <v-tag color="secondary">Secondary</v-tag>
        <v-tag color="success">Success</v-tag>
        <v-tag color="warning">Warning</v-tag>
        <v-tag color="error">Error</v-tag>
        <v-tag color="info">Info</v-tag>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <v-tag variant="light" color="primary">Light</v-tag>
        <v-tag variant="solid" color="primary">Solid</v-tag>
        <v-tag variant="outlined" color="primary">Outlined</v-tag>
        <v-tag variant="tinted" color="primary">Tinted</v-tag>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; align-items: center;">
        <v-tag size="sm">Small</v-tag>
        <v-tag size="md">Medium</v-tag>
        <v-tag size="lg">Large</v-tag>
      </div>
    `,
  }),
};
