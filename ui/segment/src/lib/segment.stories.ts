import type { Meta, StoryObj } from '@storybook/angular';
import { VSegment } from './segment.component';
import { SegmentSize } from './segment.enums';

const sampleItems = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
];

const meta: Meta<VSegment> = {
  title: 'Form Controls/Segment',
  component: VSegment,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of segment options with value and label',
    },
    value: {
      control: 'text',
      description: 'Currently selected segment value',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the segmented control',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the segment group',
    },
  },
};
export default meta;
type Story = StoryObj<VSegment>;

// --- Default ---
export const Default: Story = {
  args: {
    items: sampleItems,
    value: 'weekly',
    size: SegmentSize.MD,
    ariaLabel: 'Frequency',
  },
  render: (args) => ({
    props: args,
    template: `
      <v-segment
        [items]="items"
        [value]="value"
        [size]="size"
        [ariaLabel]="ariaLabel"
      ></v-segment>
    `,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    props: { items: sampleItems },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 40px; font-size: 13px; color: #667085;">SM</span>
          <v-segment [items]="items" value="daily" size="sm"></v-segment>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 40px; font-size: 13px; color: #667085;">MD</span>
          <v-segment [items]="items" value="weekly" size="md"></v-segment>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="width: 40px; font-size: 13px; color: #667085;">LG</span>
          <v-segment [items]="items" value="monthly" size="lg"></v-segment>
        </div>
      </div>
    `,
  }),
};

// --- Do and Don't ---
export const DoAndDont: Story = {
  render: () => ({
    props: {
      goodItems: [
        { value: 'list', label: 'List' },
        { value: 'grid', label: 'Grid' },
        { value: 'board', label: 'Board' },
      ],
      badItems: [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
        { value: 'd', label: 'D' },
        { value: 'e', label: 'E' },
        { value: 'f', label: 'F' },
        { value: 'g', label: 'G' },
      ],
    },
    template: `
      <div class="dnd-wrap">
        <div class="dnd-do">
          <div class="dnd-do-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Do
          </div>
          <div class="dnd-do-body">
            <v-segment [items]="goodItems" value="list" ariaLabel="View mode"></v-segment>
            <p class="dnd-caption">Keep the number of segments small (2-5) with clear, concise labels.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-segment [items]="badItems" value="a"></v-segment>
            <p class="dnd-caption">Don't use too many segments with cryptic single-letter labels -- use a dropdown instead for long lists.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
