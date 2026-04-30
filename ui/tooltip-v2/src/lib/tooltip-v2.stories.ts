import type { Meta, StoryObj } from '@storybook/angular';
import { VcTooltipV2 } from './vc-tooltip-v2.component';

const btnStyle = 'padding:8px 16px;border:1px solid #d0d5dd;border-radius:8px;background:#fff;cursor:pointer;font-size:14px;color:#344054;';

const meta: Meta<VcTooltipV2> = {
  title: 'Feedback/Tooltip V2',
  component: VcTooltipV2,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: 'select',
      options: ['hover', 'click'],
      description: 'How the tooltip is triggered',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Placement relative to the trigger',
    },
  },
};
export default meta;
type Story = StoryObj<VcTooltipV2>;

// --- Default ---
export const Default: Story = {
  args: {
    trigger: 'hover',
    placement: 'bottom',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex;align-items:center;justify-content:center;min-height:200px;">
        <vc-tooltip-v2 [trigger]="trigger" [placement]="placement">
          <ng-template #tooltipTrigger>
            <button style="${btnStyle}">Hover me</button>
          </ng-template>
          <ng-template #tooltipContent>
            <span style="font-size:13px;color:#344054;">This is a tooltip</span>
          </ng-template>
        </vc-tooltip-v2>
      </div>
    `,
  }),
};

// --- Placements ---
export const Placements: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:center;justify-content:center;min-height:200px;">
        <vc-tooltip-v2 trigger="hover" placement="top">
          <ng-template #tooltipTrigger>
            <button style="${btnStyle}">Top</button>
          </ng-template>
          <ng-template #tooltipContent>
            <span style="font-size:13px;">Tooltip on top</span>
          </ng-template>
        </vc-tooltip-v2>

        <vc-tooltip-v2 trigger="hover" placement="bottom">
          <ng-template #tooltipTrigger>
            <button style="${btnStyle}">Bottom</button>
          </ng-template>
          <ng-template #tooltipContent>
            <span style="font-size:13px;">Tooltip on bottom</span>
          </ng-template>
        </vc-tooltip-v2>

        <vc-tooltip-v2 trigger="hover" placement="left">
          <ng-template #tooltipTrigger>
            <button style="${btnStyle}">Left</button>
          </ng-template>
          <ng-template #tooltipContent>
            <span style="font-size:13px;">Tooltip on left</span>
          </ng-template>
        </vc-tooltip-v2>

        <vc-tooltip-v2 trigger="hover" placement="right">
          <ng-template #tooltipTrigger>
            <button style="${btnStyle}">Right</button>
          </ng-template>
          <ng-template #tooltipContent>
            <span style="font-size:13px;">Tooltip on right</span>
          </ng-template>
        </vc-tooltip-v2>
      </div>
    `,
  }),
};

// --- Click Trigger ---
export const ClickTrigger: Story = {
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;justify-content:center;min-height:200px;">
        <vc-tooltip-v2 trigger="click" placement="bottom">
          <ng-template #tooltipTrigger>
            <button style="${btnStyle}">Click me</button>
          </ng-template>
          <ng-template #tooltipContent>
            <span style="font-size:13px;">This tooltip was triggered by a click. Click outside to dismiss.</span>
          </ng-template>
        </vc-tooltip-v2>
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
              <vc-tooltip-v2 trigger="hover" placement="top">
                <ng-template #tooltipTrigger>
                  <button style="${btnStyle}">Archive</button>
                </ng-template>
                <ng-template #tooltipContent>
                  <span style="font-size:13px;">Move to archive</span>
                </ng-template>
              </vc-tooltip-v2>
            </div>
            <p class="dnd-caption">Use tooltips to add short, supplementary context to interactive elements.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="display:flex;justify-content:center;min-height:80px;align-items:center;">
              <vc-tooltip-v2 trigger="hover" placement="top">
                <ng-template #tooltipTrigger>
                  <span style="color:#344054;font-size:14px;">Terms of Service</span>
                </ng-template>
                <ng-template #tooltipContent>
                  <span style="font-size:13px;">By using this platform you agree to be bound by our Terms of Service which include data handling policies, acceptable use requirements, payment terms, and liability limitations as outlined in our legal documentation.</span>
                </ng-template>
              </vc-tooltip-v2>
            </div>
            <p class="dnd-caption">Don't put essential or lengthy content inside a tooltip -- use inline text or a dedicated page instead.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
