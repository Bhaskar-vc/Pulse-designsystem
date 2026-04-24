import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VCalendar } from './calendar.component';

const meta: Meta<VCalendar> = {
  title: 'Form Controls/Calendar',
  component: VCalendar,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [FormsModule] })],
  argTypes: {
    value: {
      control: 'date',
      description: 'Selected date (single mode)',
    },
    rangeMode: {
      control: 'boolean',
      description: 'Enable date range selection',
    },
    rangeStart: {
      control: 'date',
      description: 'Range start date',
    },
    rangeEnd: {
      control: 'date',
      description: 'Range end date',
    },
    minDate: {
      control: 'date',
      description: 'Minimum selectable date',
    },
    maxDate: {
      control: 'date',
      description: 'Maximum selectable date',
    },
    showFooter: {
      control: 'boolean',
      description: 'Show Cancel / Apply footer buttons',
    },
  },
};

export default meta;
type Story = StoryObj<VCalendar>;

export const Default: Story = {
  args: {
    rangeMode: false,
    showFooter: false,
  },
};

export const WithSelectedDate: Story = {
  args: {
    value: new Date(),
    rangeMode: false,
    showFooter: false,
  },
};

export const WithFooter: Story = {
  args: {
    rangeMode: false,
    showFooter: true,
  },
};

export const RangeMode: Story = {
  args: {
    rangeMode: true,
    showFooter: false,
  },
};

export const RangeModeWithFooter: Story = {
  args: {
    rangeMode: true,
    showFooter: true,
  },
};

export const WithMinMaxDates: Story = {
  args: {
    rangeMode: false,
    showFooter: false,
    minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 2, 0),
  },
};
