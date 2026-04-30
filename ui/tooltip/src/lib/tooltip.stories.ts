import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VTooltip } from './tooltip.component';
import { VTooltipTrigger } from './tooltip-trigger.component';
import { VTooltipContent } from './tooltip-content.component';

const btnStyle = 'padding:8px 16px;border:1px solid #d0d5dd;border-radius:8px;background:#fff;cursor:pointer;font-size:14px;color:#344054;';

const meta: Meta<VTooltip> = {
  title: 'Feedback/Tooltip',
  component: VTooltip,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VTooltipTrigger, VTooltipContent],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'dark', 'light'],
      description: 'Color theme of the tooltip',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Placement relative to the trigger',
    },
    offset: {
      control: 'number',
      description: 'Gap between trigger and tooltip (px)',
    },
    openDelay: {
      control: 'number',
      description: 'Delay before showing the tooltip (ms)',
    },
    closeDelay: {
      control: 'number',
      description: 'Delay before hiding the tooltip (ms)',
    },
    customClass: {
      control: 'text',
      description: 'Additional CSS class for the tooltip',
    },
  },
};
export default meta;
type Story = StoryObj<VTooltip>;

// --- Default ---
export const Default: Story = {
  args: {
    color: 'default',
    placement: 'top',
    offset: 8,
    openDelay: 0,
    closeDelay: 0,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex;align-items:center;justify-content:center;min-height:200px;">
        <v-tooltip [color]="color" [placement]="placement" [offset]="offset" [openDelay]="openDelay" [closeDelay]="closeDelay">
          <v-tooltip-trigger>
            <button style="${btnStyle}">Hover me</button>
          </v-tooltip-trigger>
          <v-tooltip-content>
            This is a tooltip
          </v-tooltip-content>
        </v-tooltip>
      </div>
    `,
  }),
};

// --- Placements ---
export const Placements: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:center;justify-content:center;min-height:200px;">
        <v-tooltip placement="top">
          <v-tooltip-trigger>
            <button style="${btnStyle}">Top</button>
          </v-tooltip-trigger>
          <v-tooltip-content>Tooltip on top</v-tooltip-content>
        </v-tooltip>

        <v-tooltip placement="bottom">
          <v-tooltip-trigger>
            <button style="${btnStyle}">Bottom</button>
          </v-tooltip-trigger>
          <v-tooltip-content>Tooltip on bottom</v-tooltip-content>
        </v-tooltip>

        <v-tooltip placement="left">
          <v-tooltip-trigger>
            <button style="${btnStyle}">Left</button>
          </v-tooltip-trigger>
          <v-tooltip-content>Tooltip on left</v-tooltip-content>
        </v-tooltip>

        <v-tooltip placement="right">
          <v-tooltip-trigger>
            <button style="${btnStyle}">Right</button>
          </v-tooltip-trigger>
          <v-tooltip-content>Tooltip on right</v-tooltip-content>
        </v-tooltip>
      </div>
    `,
  }),
};

// --- Colors ---
export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:center;justify-content:center;min-height:200px;">
        <v-tooltip color="default" placement="top">
          <v-tooltip-trigger>
            <button style="${btnStyle}">Default</button>
          </v-tooltip-trigger>
          <v-tooltip-content>Default color tooltip</v-tooltip-content>
        </v-tooltip>

        <v-tooltip color="dark" placement="top">
          <v-tooltip-trigger>
            <button style="${btnStyle}">Dark</button>
          </v-tooltip-trigger>
          <v-tooltip-content>Dark color tooltip</v-tooltip-content>
        </v-tooltip>

        <v-tooltip color="light" placement="top">
          <v-tooltip-trigger>
            <button style="${btnStyle}">Light</button>
          </v-tooltip-trigger>
          <v-tooltip-content>Light color tooltip</v-tooltip-content>
        </v-tooltip>
      </div>
    `,
  }),
};

// --- With Delay ---
export const WithDelay: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:center;justify-content:center;min-height:200px;">
        <v-tooltip placement="top" [openDelay]="500">
          <v-tooltip-trigger>
            <button style="${btnStyle}">500ms open delay</button>
          </v-tooltip-trigger>
          <v-tooltip-content>Appeared after 500ms</v-tooltip-content>
        </v-tooltip>

        <v-tooltip placement="top" [closeDelay]="1000">
          <v-tooltip-trigger>
            <button style="${btnStyle}">1s close delay</button>
          </v-tooltip-trigger>
          <v-tooltip-content>Stays for 1 second after leaving</v-tooltip-content>
        </v-tooltip>
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
            <div style="display:flex;justify-content:center;min-height:80px;align-items:center;">
              <v-tooltip placement="top">
                <v-tooltip-trigger>
                  <button style="${btnStyle}">Export</button>
                </v-tooltip-trigger>
                <v-tooltip-content>Download report as CSV</v-tooltip-content>
              </v-tooltip>
            </div>
            <p class="dnd-caption">Use tooltips to provide brief, helpful context that clarifies what an element does.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="display:flex;justify-content:center;min-height:80px;align-items:center;">
              <v-tooltip placement="top">
                <v-tooltip-trigger>
                  <button style="${btnStyle}">Export</button>
                </v-tooltip-trigger>
                <v-tooltip-content>This button will export the data in the table below into a CSV format which you can then open in Excel or Google Sheets to further analyze and share with your team members.</v-tooltip-content>
              </v-tooltip>
            </div>
            <p class="dnd-caption">Don't overload tooltips with long text -- keep them short and scannable. Use a popover or help page for detailed content.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
