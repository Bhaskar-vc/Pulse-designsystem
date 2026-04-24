import type { Meta, StoryObj } from '@storybook/angular';
import { VcTooltipV2 } from './vc-tooltip-v2.component';

const meta: Meta<VcTooltipV2> = {
  title: 'Feedback/TooltipV2',
  component: VcTooltipV2,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: 'select',
      options: ['hover', 'click'],
      description: 'Trigger mode: hover or click',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip placement relative to trigger',
    },
  },
};

export default meta;
type Story = StoryObj<VcTooltipV2>;

export const HoverTop: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 100px; text-align: center;">
        <vc-tooltip-v2 [trigger]="trigger" [placement]="placement">
          <ng-template #tooltipTrigger>
            <button style="padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">
              Hover me
            </button>
          </ng-template>
          <ng-template #tooltipContent>
            <div style="padding: 8px 12px; background: #1f2937; color: white; border-radius: 6px; font-size: 13px;">
              Tooltip content on top
            </div>
          </ng-template>
        </vc-tooltip-v2>
      </div>
    `,
  }),
  args: {
    trigger: 'hover',
    placement: 'top',
  },
};

export const ClickTrigger: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 100px; text-align: center;">
        <vc-tooltip-v2 trigger="click" [placement]="placement">
          <ng-template #tooltipTrigger>
            <button style="padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">
              Click me
            </button>
          </ng-template>
          <ng-template #tooltipContent>
            <div style="padding: 8px 12px; background: #1f2937; color: white; border-radius: 6px; font-size: 13px;">
              Click-triggered tooltip
            </div>
          </ng-template>
        </vc-tooltip-v2>
      </div>
    `,
  }),
  args: {
    trigger: 'click',
    placement: 'bottom',
  },
};

export const AllPlacements: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 40px; padding: 120px 60px; flex-wrap: wrap; justify-content: center;">
        <vc-tooltip-v2 trigger="hover" placement="top">
          <ng-template #tooltipTrigger>
            <button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">Top</button>
          </ng-template>
          <ng-template #tooltipContent>
            <div style="padding: 6px 10px; background: #1f2937; color: white; border-radius: 6px; font-size: 13px;">Top</div>
          </ng-template>
        </vc-tooltip-v2>

        <vc-tooltip-v2 trigger="hover" placement="bottom">
          <ng-template #tooltipTrigger>
            <button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">Bottom</button>
          </ng-template>
          <ng-template #tooltipContent>
            <div style="padding: 6px 10px; background: #1f2937; color: white; border-radius: 6px; font-size: 13px;">Bottom</div>
          </ng-template>
        </vc-tooltip-v2>

        <vc-tooltip-v2 trigger="hover" placement="left">
          <ng-template #tooltipTrigger>
            <button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">Left</button>
          </ng-template>
          <ng-template #tooltipContent>
            <div style="padding: 6px 10px; background: #1f2937; color: white; border-radius: 6px; font-size: 13px;">Left</div>
          </ng-template>
        </vc-tooltip-v2>

        <vc-tooltip-v2 trigger="hover" placement="right">
          <ng-template #tooltipTrigger>
            <button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">Right</button>
          </ng-template>
          <ng-template #tooltipContent>
            <div style="padding: 6px 10px; background: #1f2937; color: white; border-radius: 6px; font-size: 13px;">Right</div>
          </ng-template>
        </vc-tooltip-v2>
      </div>
    `,
  }),
};
