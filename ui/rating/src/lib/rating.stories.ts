import type { Meta, StoryObj } from '@storybook/angular';
import { VRating } from './rating.component';

const meta: Meta<VRating> = {
  title: 'Form Controls/Rating',
  component: VRating,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      description: 'Rating value (supports 0.5 increments)',
    },
    max: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Total number of stars',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the rating stars',
    },
    color: {
      control: 'select',
      options: ['yellow', 'purple', 'gray'],
      description: 'Fill color of the stars',
    },
    interactive: {
      control: 'boolean',
      description: 'Allow user to click to set a rating',
    },
    count: {
      control: 'number',
      description: 'Optional review count shown in parentheses',
    },
    showValue: {
      control: 'boolean',
      description: 'Show the numeric value after the stars',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
};
export default meta;
type Story = StoryObj<VRating>;

// --- Default ---
export const Default: Story = {
  args: {
    value: 3,
    max: 5,
    size: 'md',
    color: 'yellow',
    interactive: false,
    showValue: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-rating
        [value]="value"
        [max]="max"
        [size]="size"
        [color]="color"
        [interactive]="interactive"
        [showValue]="showValue"
        [ariaLabel]="ariaLabel"
      ></v-rating>
    `,
  }),
};

// --- Interactive ---
export const Interactive: Story = {
  render: () => ({
    template: `
      <v-rating [value]="0" [interactive]="true" ariaLabel="Rate this item"></v-rating>
    `,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 40px; font-size: 13px; color: #667085;">SM</span>
          <v-rating [value]="3.5" size="sm"></v-rating>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 40px; font-size: 13px; color: #667085;">MD</span>
          <v-rating [value]="3.5" size="md"></v-rating>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 40px; font-size: 13px; color: #667085;">LG</span>
          <v-rating [value]="3.5" size="lg"></v-rating>
        </div>
      </div>
    `,
  }),
};

// --- Colors ---
export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 60px; font-size: 13px; color: #667085;">Yellow</span>
          <v-rating [value]="4" color="yellow"></v-rating>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 60px; font-size: 13px; color: #667085;">Purple</span>
          <v-rating [value]="4" color="purple"></v-rating>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 60px; font-size: 13px; color: #667085;">Gray</span>
          <v-rating [value]="4" color="gray"></v-rating>
        </div>
      </div>
    `,
  }),
};

// --- With Count ---
export const WithCount: Story = {
  render: () => ({
    template: `
      <v-rating [value]="4.2" [count]="128" [showValue]="true"></v-rating>
    `,
  }),
};

// --- Show Value ---
export const ShowValue: Story = {
  render: () => ({
    template: `
      <v-rating [value]="3.5" [showValue]="true"></v-rating>
    `,
  }),
};

// --- Read Only ---
export const ReadOnly: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <v-rating [value]="5" [showValue]="true"></v-rating>
        <v-rating [value]="3.5" [showValue]="true"></v-rating>
        <v-rating [value]="1" [showValue]="true"></v-rating>
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
            <v-rating [value]="4.2" [showValue]="true" [count]="56" ariaLabel="Product rating"></v-rating>
            <p class="dnd-caption">Show the numeric value and review count alongside stars to give users full context.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-rating [value]="4" [interactive]="true" size="sm"></v-rating>
            <p class="dnd-caption">Don't use a small interactive rating without any numeric context -- users may struggle to understand the precise value.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
