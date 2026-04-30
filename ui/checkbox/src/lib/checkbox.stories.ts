import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VCheckbox } from './checkbox.component';

const meta: Meta<VCheckbox> = {
  title: 'Form Controls/Checkbox',
  component: VCheckbox,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [FormsModule] })],
  argTypes: {
    label: {
      control: 'text',
      description: 'Display label next to the checkbox.',
    },
    supporting: {
      control: 'text',
      description: 'Supporting/helper text below the label.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the checkbox control.',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled.',
    },
  },
};

export default meta;
type Story = StoryObj<VCheckbox>;

// ── Default ───────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    supporting: '',
    size: 'md',
    indeterminate: false,
    disabled: false,
  },
};

// ── Sizes ─────────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div>
          <p style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:var(--ds-text-faint);margin-bottom:8px;">Small (sm)</p>
          <v-checkbox label="Small checkbox" size="sm"></v-checkbox>
        </div>
        <div>
          <p style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:var(--ds-text-faint);margin-bottom:8px;">Medium (md) — default</p>
          <v-checkbox label="Medium checkbox" size="md"></v-checkbox>
        </div>
      </div>
    `,
  }),
};

// ── With Supporting Text ──────────────────────────────────────────────────────
export const WithSupporting: Story = {
  args: {
    label: 'Email notifications',
    supporting: 'Receive email updates about your account activity.',
    size: 'md',
    indeterminate: false,
    disabled: false,
  },
};

// ── Indeterminate ─────────────────────────────────────────────────────────────
export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    size: 'md',
    indeterminate: true,
    disabled: false,
  },
};

// ── Disabled ──────────────────────────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    size: 'md',
    indeterminate: false,
    disabled: true,
  },
};

// ── Checkbox Group ────────────────────────────────────────────────────────────
export const CheckboxGroup: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:6px;">
        <span style="font-size:13px;font-weight:600;color:var(--color-text-primary,#29294c)">Notification preferences</span>
        <span style="font-size:12px;color:var(--color-text-muted,#707087);margin-bottom:8px;">Choose which notifications you'd like to receive.</span>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <v-checkbox label="Email notifications" supporting="Get updates about your account via email."></v-checkbox>
          <v-checkbox label="SMS alerts" supporting="Receive critical security alerts via SMS."></v-checkbox>
          <v-checkbox label="Weekly digest" supporting="A summary of activity sent every Monday."></v-checkbox>
          <v-checkbox label="Marketing emails" supporting="Product news, tips, and offers." [disabled]="true"></v-checkbox>
        </div>
      </div>
    `,
  }),
};

// ── Do & Don't ────────────────────────────────────────────────────────────────
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
            <div style="display:flex;flex-direction:column;gap:8px;">
              <v-checkbox label="Email notifications" supporting="Get updates about your account"></v-checkbox>
              <v-checkbox label="SMS alerts" supporting="Receive critical security alerts"></v-checkbox>
              <v-checkbox label="Weekly digest" supporting="A summary of activity each Monday"></v-checkbox>
            </div>
            <p class="dnd-caption">Use checkboxes for independent multi-select options where zero or more can be chosen simultaneously.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-checkbox label="Enable dark mode"></v-checkbox>
            <p class="dnd-caption">Don't use a checkbox as an on/off toggle for a single setting — use the Toggle component instead, which better communicates an immediate binary state change.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
