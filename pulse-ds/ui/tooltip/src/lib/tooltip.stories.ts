import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VTooltip } from './tooltip.component';
import { VTooltipTrigger } from './tooltip-trigger.component';
import { VTooltipContent } from './tooltip-content.component';
import { VTooltipService } from './tooltip.service';

const meta: Meta<VTooltip> = {
  title: 'Feedback/Tooltip',
  component: VTooltip,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VTooltipTrigger, VTooltipContent, OverlayModule, BrowserAnimationsModule],
      providers: [VTooltipService],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'info', 'danger', 'neutral'],
      description: 'Tooltip color theme',
    },
    placement: {
      control: 'select',
      options: [
        'top-start', 'top', 'top-end',
        'bottom-start', 'bottom', 'bottom-end',
        'left-start', 'left', 'left-end',
        'right-start', 'right', 'right-end',
      ],
      description: 'Tooltip placement relative to trigger',
    },
    offset: {
      control: 'number',
      description: 'Offset distance from trigger in pixels',
    },
    openDelay: {
      control: 'number',
      description: 'Delay before showing tooltip (ms)',
    },
    closeDelay: {
      control: 'number',
      description: 'Delay before hiding tooltip (ms)',
    },
    customClass: {
      control: 'text',
      description: 'Custom CSS class for tooltip',
    },
  },
};

export default meta;
type Story = StoryObj<VTooltip>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 80px; text-align: center;">
        <v-tooltip [color]="color" [placement]="placement" [offset]="offset">
          <v-tooltip-trigger>
            <button style="padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">
              Hover me
            </button>
          </v-tooltip-trigger>
          <v-tooltip-content>
            This is a tooltip
          </v-tooltip-content>
        </v-tooltip>
      </div>
    `,
  }),
  args: {
    color: 'default',
    placement: 'top',
    offset: 8,
    openDelay: 0,
    closeDelay: 0,
  },
};

export const Placements: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 100px 60px; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center;">
          <v-tooltip placement="top-start">
            <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">top-start</button></v-tooltip-trigger>
            <v-tooltip-content>Top Start</v-tooltip-content>
          </v-tooltip>
        </div>
        <div style="text-align: center;">
          <v-tooltip placement="top">
            <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">top</button></v-tooltip-trigger>
            <v-tooltip-content>Top</v-tooltip-content>
          </v-tooltip>
        </div>
        <div style="text-align: center;">
          <v-tooltip placement="top-end">
            <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">top-end</button></v-tooltip-trigger>
            <v-tooltip-content>Top End</v-tooltip-content>
          </v-tooltip>
        </div>
        <div style="text-align: center;">
          <v-tooltip placement="left">
            <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">left</button></v-tooltip-trigger>
            <v-tooltip-content>Left</v-tooltip-content>
          </v-tooltip>
        </div>
        <div></div>
        <div style="text-align: center;">
          <v-tooltip placement="right">
            <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">right</button></v-tooltip-trigger>
            <v-tooltip-content>Right</v-tooltip-content>
          </v-tooltip>
        </div>
        <div style="text-align: center;">
          <v-tooltip placement="bottom-start">
            <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">bottom-start</button></v-tooltip-trigger>
            <v-tooltip-content>Bottom Start</v-tooltip-content>
          </v-tooltip>
        </div>
        <div style="text-align: center;">
          <v-tooltip placement="bottom">
            <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">bottom</button></v-tooltip-trigger>
            <v-tooltip-content>Bottom</v-tooltip-content>
          </v-tooltip>
        </div>
        <div style="text-align: center;">
          <v-tooltip placement="bottom-end">
            <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">bottom-end</button></v-tooltip-trigger>
            <v-tooltip-content>Bottom End</v-tooltip-content>
          </v-tooltip>
        </div>
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; padding: 80px 40px; flex-wrap: wrap;">
        <v-tooltip color="default" placement="top">
          <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">Default</button></v-tooltip-trigger>
          <v-tooltip-content>Default tooltip</v-tooltip-content>
        </v-tooltip>
        <v-tooltip color="primary" placement="top">
          <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">Primary</button></v-tooltip-trigger>
          <v-tooltip-content>Primary tooltip</v-tooltip-content>
        </v-tooltip>
        <v-tooltip color="success" placement="top">
          <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">Success</button></v-tooltip-trigger>
          <v-tooltip-content>Success tooltip</v-tooltip-content>
        </v-tooltip>
        <v-tooltip color="danger" placement="top">
          <v-tooltip-trigger><button style="padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">Danger</button></v-tooltip-trigger>
          <v-tooltip-content>Danger tooltip</v-tooltip-content>
        </v-tooltip>
      </div>
    `,
  }),
};

export const WithDelay: Story = {
  render: () => ({
    template: `
      <div style="padding: 80px; text-align: center;">
        <v-tooltip placement="top" [openDelay]="300" [closeDelay]="200">
          <v-tooltip-trigger>
            <button style="padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">
              Hover me (300ms delay)
            </button>
          </v-tooltip-trigger>
          <v-tooltip-content>
            This tooltip has open/close delays
          </v-tooltip-content>
        </v-tooltip>
      </div>
    `,
  }),
};
