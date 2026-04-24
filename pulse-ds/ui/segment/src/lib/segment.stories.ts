import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VSegment } from './segment.component';
import { SegmentItem } from './segment.types';

const basicItems: SegmentItem[] = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' },
];

const viewItems: SegmentItem[] = [
  { value: 'grid', label: 'Grid' },
  { value: 'list', label: 'List' },
  { value: 'table', label: 'Table' },
];

const withDisabledItems: SegmentItem[] = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'archived', label: 'Archived', disabled: true },
];

const meta: Meta<VSegment> = {
  title: 'Form Controls/Segment',
  component: VSegment,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [FormsModule] })],
  argTypes: {
    items: {
      control: 'object',
      description: 'Option items to display',
    },
    value: {
      control: 'text',
      description: 'Currently selected value',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible group label',
    },
  },
};

export default meta;
type Story = StoryObj<VSegment>;

export const Default: Story = {
  args: {
    items: basicItems,
    value: 'week',
    size: 'md',
    ariaLabel: 'Time period',
  },
};

export const Small: Story = {
  args: {
    items: viewItems,
    value: 'grid',
    size: 'sm',
    ariaLabel: 'View mode',
  },
};

export const Large: Story = {
  args: {
    items: viewItems,
    value: 'list',
    size: 'lg',
    ariaLabel: 'View mode',
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: withDisabledItems,
    value: 'active',
    size: 'md',
    ariaLabel: 'Status filter',
  },
};

export const NoSelection: Story = {
  args: {
    items: basicItems,
    value: '',
    size: 'md',
    ariaLabel: 'Time period',
  },
};
