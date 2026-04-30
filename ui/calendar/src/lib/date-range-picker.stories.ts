import type { Meta, StoryObj } from '@storybook/angular';
import { VDateRangePicker } from './date-range-picker.component';

const meta: Meta<VDateRangePicker> = {
  title: 'Form Controls/Date Range Picker',
  component: VDateRangePicker,
  tags: ['autodocs'],
  argTypes: {
    activePreset: {
      control: 'select',
      options: [null, 'Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'This month', 'Last month'],
      description: 'Initially active preset label.',
    },
  },
};

export default meta;
type Story = StoryObj<VDateRangePicker>;

// ── Default ──────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    rangeStart: null,
    rangeEnd: null,
    activePreset: null,
  },
};

// ── With Active Preset ───────────────────────────────────────────────────────
export const WithActivePreset: Story = {
  args: {
    activePreset: 'Last 7 days',
  },
};

// ── Do & Don't ───────────────────────────────────────────────────────────────
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
            <p style="font-size:13px;color:var(--ds-text-body);margin:0;">Provide quick presets (Last 7 days, This month, etc.) alongside the calendar so users can pick common ranges with one click.</p>
            <p class="dnd-caption">Presets reduce friction for the most common date-range selections.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <p style="font-size:13px;color:var(--ds-text-faint);background:var(--ds-danger-subtle);border:1px solid var(--ds-danger-border);border-radius:8px;padding:12px 16px;margin:0;">
              Don't force users to manually click two dates without any visual feedback — always highlight the in-progress range so users know which dates are selected.
            </p>
            <p class="dnd-caption">Without range highlighting, users lose track of their selection on large calendars.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
