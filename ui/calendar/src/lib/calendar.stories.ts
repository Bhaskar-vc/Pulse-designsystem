import type { Meta, StoryObj } from '@storybook/angular';
import { VCalendar } from './calendar.component';

const meta: Meta<VCalendar> = {
  title: 'Form Controls/Calendar',
  component: VCalendar,
  tags: ['autodocs'],
  argTypes: {
    rangeMode: {
      control: 'boolean',
      description: 'Enable date range selection mode',
    },
    showFooter: {
      control: 'boolean',
      description: 'Show Cancel and Apply footer buttons',
    },
  },
};
export default meta;
type Story = StoryObj<VCalendar>;

// --- Default ---
export const Default: Story = {
  args: {
    rangeMode: false,
    showFooter: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 360px;">
        <v-calendar
          [rangeMode]="rangeMode"
          [showFooter]="showFooter"
        ></v-calendar>
      </div>
    `,
  }),
};

// --- Range Mode ---
export const RangeMode: Story = {
  render: () => ({
    template: `
      <div style="max-width: 360px;">
        <v-calendar [rangeMode]="true"></v-calendar>
      </div>
    `,
  }),
};

// --- With Footer ---
export const WithFooter: Story = {
  render: () => ({
    template: `
      <div style="max-width: 360px;">
        <v-calendar [showFooter]="true"></v-calendar>
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
            <div style="max-width: 320px;">
              <v-calendar [rangeMode]="true" [showFooter]="true"></v-calendar>
            </div>
            <p class="dnd-caption">Use range mode with footer buttons when users need to select and confirm a date range before applying.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="max-width: 320px;">
              <v-calendar [rangeMode]="true" [showFooter]="false"></v-calendar>
            </div>
            <p class="dnd-caption">Don't use range mode without footer buttons -- users may not realize when their selection is final, leading to accidental changes.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
