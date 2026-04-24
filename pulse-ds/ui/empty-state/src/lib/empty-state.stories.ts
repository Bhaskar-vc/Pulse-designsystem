import type { Meta, StoryObj } from '@storybook/angular';
import { VEmptyState } from './empty-state.component';

const meta: Meta<VEmptyState> = {
  title: 'Feedback/EmptyState',
  component: VEmptyState,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    containerStyle: {
      control: 'boolean',
      description: 'Wrap in bordered container box',
    },
    hasIllustration: {
      control: 'boolean',
      description: 'Show illustration slot',
    },
  },
};

export default meta;
type Story = StoryObj<VEmptyState>;

export const Default: Story = {
  args: {
    title: 'No results found',
    description: 'Try adjusting your search or filter to find what you are looking for.',
    size: 'md',
    containerStyle: false,
    hasIllustration: true,
  },
};

export const Small: Story = {
  args: {
    title: 'No items',
    description: 'Nothing to display here.',
    size: 'sm',
    containerStyle: false,
    hasIllustration: true,
  },
};

export const Large: Story = {
  args: {
    title: 'No data available',
    description: 'There is no data to display at the moment. Please check back later or try a different query.',
    size: 'lg',
    containerStyle: false,
    hasIllustration: true,
  },
};

export const WithContainer: Story = {
  args: {
    title: 'Empty inbox',
    description: 'You have no new messages.',
    size: 'md',
    containerStyle: true,
    hasIllustration: true,
  },
};

export const NoIllustration: Story = {
  args: {
    title: 'No notifications',
    description: 'You are all caught up.',
    size: 'md',
    containerStyle: false,
    hasIllustration: false,
  },
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <v-empty-state title="Small" description="Small empty state" size="sm"></v-empty-state>
        <v-empty-state title="Medium" description="Medium empty state (default)" size="md"></v-empty-state>
        <v-empty-state title="Large" description="Large empty state for prominent displays" size="lg"></v-empty-state>
      </div>
    `,
  }),
};
