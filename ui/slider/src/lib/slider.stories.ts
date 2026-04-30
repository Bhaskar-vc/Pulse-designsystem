import type { Meta, StoryObj } from '@storybook/angular';
import { VSlider } from './slider.component';

const meta: Meta<VSlider> = {
  title: 'Form Controls/Slider',
  component: VSlider,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed above the slider',
    },
    hint: {
      control: 'text',
      description: 'Hint text displayed below the slider',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to show the current value',
    },
    valueSuffix: {
      control: 'text',
      description: 'Suffix appended to the value display (e.g. %, px)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Slider track and thumb size',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning'],
      description: 'Thumb and fill color',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
  },
};
export default meta;
type Story = StoryObj<VSlider>;

// --- Default ---
export const Default: Story = {
  args: {
    label: '',
    hint: '',
    min: 0,
    max: 100,
    step: 1,
    showValue: true,
    valueSuffix: '',
    size: 'md',
    color: 'primary',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 400px;">
        <v-slider
          [label]="label"
          [hint]="hint"
          [min]="min"
          [max]="max"
          [step]="step"
          [showValue]="showValue"
          [valueSuffix]="valueSuffix"
          [size]="size"
          [color]="color"
          [disabled]="disabled"
        ></v-slider>
      </div>
    `,
  }),
};

// --- With Label ---
export const WithLabel: Story = {
  render: () => ({
    template: `
      <div style="max-width: 400px;">
        <v-slider
          label="Volume"
          hint="Adjust the playback volume"
          [showValue]="true"
          valueSuffix="%"
        ></v-slider>
      </div>
    `,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <v-slider label="Small" size="sm" [showValue]="true"></v-slider>
        <v-slider label="Medium" size="md" [showValue]="true"></v-slider>
        <v-slider label="Large" size="lg" [showValue]="true"></v-slider>
      </div>
    `,
  }),
};

// --- Colors ---
export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <v-slider label="Primary" color="primary" [showValue]="true"></v-slider>
        <v-slider label="Success" color="success" [showValue]="true"></v-slider>
        <v-slider label="Warning" color="warning" [showValue]="true"></v-slider>
        <v-slider label="Error" color="error" [showValue]="true"></v-slider>
      </div>
    `,
  }),
};

// --- Custom Range ---
export const CustomRange: Story = {
  render: () => ({
    template: `
      <div style="max-width: 400px;">
        <v-slider
          label="Budget"
          hint="Set your maximum budget"
          [min]="0"
          [max]="1000"
          [step]="50"
          [showValue]="true"
          valueSuffix="$"
        ></v-slider>
      </div>
    `,
  }),
};

// --- Disabled ---
export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="max-width: 400px;">
        <v-slider
          label="Brightness"
          [disabled]="true"
          [showValue]="true"
          valueSuffix="%"
        ></v-slider>
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
              <v-slider
                label="Opacity"
                [min]="0"
                [max]="100"
                [step]="1"
                [showValue]="true"
                valueSuffix="%"
              ></v-slider>
            </div>
            <p class="dnd-caption">Provide a label, show the current value, and use an appropriate step size for the range.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="max-width: 320px;">
              <v-slider [showValue]="false" [min]="0" [max]="1000" [step]="1"></v-slider>
            </div>
            <p class="dnd-caption">Don't hide the value on a large range with fine steps -- users can't tell what they've selected.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
