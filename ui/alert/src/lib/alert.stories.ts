import type { Meta, StoryObj } from '@storybook/angular';
import { VAlert } from './alert.component';

const meta: Meta<VAlert> = {
  title: 'Feedback/Alert',
  component: VAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Semantic type of the alert',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
      description: 'Visual variant of the alert',
    },
    size: {
      control: 'select',
      options: ['default', 'compact'],
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

// --- Default ---
export const Default: Story = {
  args: {
    type: 'info',
    variant: 'default',
    size: 'default',
    title: 'Information',
    message: 'This is an informational alert to notify the user about something important.',
    dismissible: false,
    actionLabel: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <v-alert
        [type]="type"
        [variant]="variant"
        [size]="size"
        [title]="title"
        [message]="message"
        [dismissible]="dismissible"
        [actionLabel]="actionLabel"
      ></v-alert>
    `,
  }),
};

// --- Types ---
export const Types: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:12px;">
        <v-alert type="info" title="Info" message="This is an informational message."></v-alert>
        <v-alert type="success" title="Success" message="The operation completed successfully."></v-alert>
        <v-alert type="warning" title="Warning" message="Please review the details before proceeding."></v-alert>
        <v-alert type="error" title="Error" message="Something went wrong. Please try again."></v-alert>
      </div>
    `,
  }),
};

// --- Variants ---
export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:12px;">
        <v-alert type="info" variant="default" title="Default" message="Default variant with a subtle background."></v-alert>
        <v-alert type="info" variant="filled" title="Filled" message="Filled variant with a solid background."></v-alert>
        <v-alert type="info" variant="outlined" title="Outlined" message="Outlined variant with a border."></v-alert>
      </div>
    `,
  }),
};

// --- Dismissible ---
export const Dismissible: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:12px;">
        <v-alert type="info" title="Dismissible Alert" message="Click the close button to dismiss this alert." [dismissible]="true"></v-alert>
        <v-alert type="success" title="Dismissible Success" message="You can dismiss this success alert." [dismissible]="true"></v-alert>
      </div>
    `,
  }),
};

// --- With Action ---
export const WithAction: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:12px;">
        <v-alert type="info" title="Update Available" message="A new version is available for download." actionLabel="Update now"></v-alert>
        <v-alert type="warning" title="Trial Expiring" message="Your free trial expires in 3 days." actionLabel="Upgrade plan"></v-alert>
      </div>
    `,
  }),
};

// --- Compact ---
export const Compact: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:12px;">
        <v-alert type="info" size="compact" message="Compact info alert without title."></v-alert>
        <v-alert type="success" size="compact" message="Compact success alert without title."></v-alert>
        <v-alert type="warning" size="compact" message="Compact warning alert without title."></v-alert>
        <v-alert type="error" size="compact" message="Compact error alert without title."></v-alert>
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
            <v-alert type="error" title="Payment failed" message="Your card was declined. Please update your payment method to continue." actionLabel="Update payment"></v-alert>
            <p class="dnd-caption">Use a clear title, helpful message, and an action that guides the user toward resolution.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-alert type="error" message="Error occurred."></v-alert>
            <p class="dnd-caption">Don't show vague error messages without context or actionable guidance -- users need to know what happened and how to fix it.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
