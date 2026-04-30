import type { Meta, StoryObj } from '@storybook/angular';
import { VPopover } from './popover.component';

const btnStyle = 'padding:8px 16px;border:1px solid #d0d5dd;border-radius:8px;background:#fff;cursor:pointer;font-size:14px;color:#344054;';

const meta: Meta<VPopover> = {
  title: 'Feedback/Popover',
  component: VPopover,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Popover header title',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
      description: 'Placement relative to the trigger',
    },
    offset: {
      control: 'number',
      description: 'Gap between trigger and panel (px)',
    },
    showArrow: {
      control: 'boolean',
      description: 'Show the arrow pointer',
    },
    closeOnOutsideClick: {
      control: 'boolean',
      description: 'Close when user clicks outside',
    },
  },
};
export default meta;
type Story = StoryObj<VPopover>;

// --- Default ---
export const Default: Story = {
  args: {
    title: '',
    placement: 'bottom',
    offset: 8,
    showArrow: true,
    closeOnOutsideClick: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex;align-items:center;justify-content:center;min-height:280px;">
        <v-popover [title]="title" [placement]="placement" [offset]="offset" [showArrow]="showArrow" [closeOnOutsideClick]="closeOnOutsideClick">
          <button trigger style="${btnStyle}">Click to open</button>
          <div style="padding:4px;font-size:14px;color:#344054;max-width:240px;">
            This is a basic popover. Click the trigger or anywhere outside to dismiss.
          </div>
        </v-popover>
      </div>
    `,
  }),
};

// --- Placements ---
export const Placements: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:center;justify-content:center;min-height:300px;">
        <v-popover placement="top" [showArrow]="true">
          <button trigger style="${btnStyle}">Top</button>
          <div style="padding:4px;font-size:13px;color:#344054;">Popover on top</div>
        </v-popover>

        <v-popover placement="bottom" [showArrow]="true">
          <button trigger style="${btnStyle}">Bottom</button>
          <div style="padding:4px;font-size:13px;color:#344054;">Popover on bottom</div>
        </v-popover>

        <v-popover placement="left" [showArrow]="true">
          <button trigger style="${btnStyle}">Left</button>
          <div style="padding:4px;font-size:13px;color:#344054;">Popover on left</div>
        </v-popover>

        <v-popover placement="right" [showArrow]="true">
          <button trigger style="${btnStyle}">Right</button>
          <div style="padding:4px;font-size:13px;color:#344054;">Popover on right</div>
        </v-popover>
      </div>
    `,
  }),
};

// --- With Title ---
export const WithTitle: Story = {
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;justify-content:center;min-height:280px;">
        <v-popover title="Team Members" placement="bottom" [showArrow]="true">
          <button trigger style="${btnStyle}">Show team</button>
          <div style="font-size:14px;color:#344054;">
            <div style="padding:6px 0;border-bottom:1px solid #f2f4f7;">Alice Johnson</div>
            <div style="padding:6px 0;border-bottom:1px solid #f2f4f7;">Bob Smith</div>
            <div style="padding:6px 0;">Carol Williams</div>
          </div>
        </v-popover>
      </div>
    `,
  }),
};

// --- No Arrow ---
export const NoArrow: Story = {
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;justify-content:center;min-height:280px;">
        <v-popover placement="bottom" [showArrow]="false">
          <button trigger style="${btnStyle}">No arrow</button>
          <div style="padding:4px;font-size:14px;color:#344054;max-width:240px;">
            This popover has no arrow pointer, giving it a cleaner look for certain use cases.
          </div>
        </v-popover>
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
            <div style="display:flex;justify-content:center;min-height:120px;align-items:flex-start;padding-top:16px;">
              <v-popover title="Quick Actions" placement="bottom" [showArrow]="true">
                <button trigger style="${btnStyle}">Actions</button>
                <div style="font-size:14px;color:#344054;">
                  <div style="padding:6px 0;cursor:pointer;">Edit profile</div>
                  <div style="padding:6px 0;cursor:pointer;">Manage team</div>
                  <div style="padding:6px 0;cursor:pointer;">Settings</div>
                </div>
              </v-popover>
            </div>
            <p class="dnd-caption">Use popovers for contextual actions, details, or compact menus that relate to a specific trigger element.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="display:flex;justify-content:center;min-height:120px;align-items:flex-start;padding-top:16px;">
              <v-popover placement="bottom" [showArrow]="true">
                <button trigger style="${btnStyle}">Info</button>
                <div style="font-size:14px;color:#344054;max-width:300px;">
                  Welcome to our platform! Here you will find all the tools you need to manage your team, track progress, set goals, review performance, run surveys, configure notifications, generate reports, and much more. We recommend starting with the onboarding wizard to set up your workspace.
                </div>
              </v-popover>
            </div>
            <p class="dnd-caption">Don't put extensive content in a popover -- use a modal, drawer, or dedicated page for long-form information.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
