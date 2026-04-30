import type { Meta, StoryObj } from '@storybook/angular';
import { VToggle } from './toggle.component';

const meta: Meta<VToggle> = {
  title: 'Form Controls/Toggle',
  component: VToggle,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed next to the toggle',
    },
    supporting: {
      control: 'text',
      description: 'Supporting text below the label',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Toggle size variant',
    },
    color: {
      control: 'select',
      options: ['success', 'primary', 'secondary'],
      description: 'Toggle color when active',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
  },
};
export default meta;
type Story = StoryObj<VToggle>;

// --- Default ---
export const Default: Story = {
  args: {
    label: 'Notifications',
    supporting: '',
    size: 'md',
    color: 'success',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-toggle
        [label]="label"
        [supporting]="supporting"
        [size]="size"
        [color]="color"
        [disabled]="disabled"
      ></v-toggle>
    `,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 40px; font-size: 13px; color: #667085;">SM</span>
          <v-toggle label="Small toggle" size="sm"></v-toggle>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 40px; font-size: 13px; color: #667085;">MD</span>
          <v-toggle label="Medium toggle" size="md"></v-toggle>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 40px; font-size: 13px; color: #667085;">LG</span>
          <v-toggle label="Large toggle" size="lg"></v-toggle>
        </div>
      </div>
    `,
  }),
};

// --- Colors ---
export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <v-toggle label="Success" color="success"></v-toggle>
        <v-toggle label="Primary" color="primary"></v-toggle>
        <v-toggle label="Secondary" color="secondary"></v-toggle>
      </div>
    `,
  }),
};

// --- With Supporting Text ---
export const WithSupporting: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <v-toggle
          label="Email notifications"
          supporting="Receive email alerts for new messages and updates"
        ></v-toggle>
        <v-toggle
          label="Dark mode"
          supporting="Switch to a darker color scheme for reduced eye strain"
        ></v-toggle>
      </div>
    `,
  }),
};

// --- Disabled ---
export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <v-toggle label="Disabled off" [disabled]="true"></v-toggle>
        <v-toggle label="Disabled with text" supporting="This setting is managed by your admin" [disabled]="true"></v-toggle>
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
            <v-toggle
              label="Two-factor authentication"
              supporting="Add an extra layer of security to your account"
            ></v-toggle>
            <p class="dnd-caption">Use a clear label and supporting text to explain what the toggle controls and its effect.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-toggle label="Enable"></v-toggle>
            <p class="dnd-caption">Don't use vague labels without context -- the user should know what is being toggled.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
