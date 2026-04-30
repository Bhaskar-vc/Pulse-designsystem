import type { Meta, StoryObj } from '@storybook/angular';
import { VTag } from './tag.component';

const meta: Meta<VTag> = {
  title: 'Data Display/Tag',
  component: VTag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'solid', 'outlined', 'tinted'],
      description: 'Visual style of the tag',
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
      description: 'Show a dismiss (x) button',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
};
export default meta;
type Story = StoryObj<VTag>;

// --- Default ---
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
    template: `<v-tag [variant]="variant" [color]="color" [size]="size" [showDot]="showDot" [dismissible]="dismissible">Label</v-tag>`,
  }),
};

// --- Variants ---
export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <v-tag variant="light" color="primary">Light</v-tag>
        <v-tag variant="solid" color="primary">Solid</v-tag>
        <v-tag variant="outlined" color="primary">Outlined</v-tag>
        <v-tag variant="tinted" color="primary">Tinted</v-tag>
      </div>
    `,
  }),
};

// --- Colors ---
export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
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

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <v-tag size="sm" color="primary">Small</v-tag>
        <v-tag size="md" color="primary">Medium</v-tag>
        <v-tag size="lg" color="primary">Large</v-tag>
      </div>
    `,
  }),
};

// --- With Dot ---
export const WithDot: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <v-tag [showDot]="true" color="primary">Primary</v-tag>
        <v-tag [showDot]="true" color="success">Success</v-tag>
        <v-tag [showDot]="true" color="warning">Warning</v-tag>
        <v-tag [showDot]="true" color="error">Error</v-tag>
        <v-tag [showDot]="true" color="info">Info</v-tag>
      </div>
    `,
  }),
};

// --- Dismissible ---
export const Dismissible: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <v-tag [dismissible]="true" color="primary">Removable</v-tag>
        <v-tag [dismissible]="true" color="success">Closeable</v-tag>
        <v-tag [dismissible]="true" color="error">Deletable</v-tag>
      </div>
    `,
  }),
};

// --- Variant x Color Matrix ---
export const VariantColorMatrix: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div *ngFor="let variant of ['light', 'solid', 'outlined', 'tinted']">
          <p style="margin: 0 0 8px; font-weight: 600; text-transform: capitalize;">{{ variant }}</p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <v-tag *ngFor="let c of ['primary', 'secondary', 'success', 'warning', 'error', 'info']" [variant]="variant" [color]="c">{{ c }}</v-tag>
          </div>
        </div>
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
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <v-tag color="success" [showDot]="true">Active</v-tag>
              <v-tag color="warning" [showDot]="true">Pending</v-tag>
              <v-tag color="error" [showDot]="true">Expired</v-tag>
            </div>
            <p class="dnd-caption">Use semantic colors and concise labels to convey status at a glance.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <v-tag color="primary">This user account is currently active</v-tag>
              <v-tag color="primary">Awaiting approval from admin</v-tag>
            </div>
            <p class="dnd-caption">Don't use long text inside tags or use the same color for different statuses — tags should be short and visually distinct.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
