import type { Meta, StoryObj } from '@storybook/angular';
import { VPagination } from './pagination.component';

const meta: Meta<VPagination> = {
  title: 'Navigation/Pagination',
  component: VPagination,
  tags: ['autodocs'],
  argTypes: {
    total: {
      control: 'number',
      description: 'Total number of items across all pages.',
    },
    page: {
      control: 'number',
      description: 'Current active page (1-based).',
    },
    pageSize: {
      control: 'number',
      description: 'Number of items displayed per page.',
    },
    maxVisible: {
      control: 'number',
      description: 'Maximum number of page buttons visible (excluding prev/next).',
    },
  },
};

export default meta;
type Story = StoryObj<VPagination>;

export const Default: Story = {
  args: {
    total: 100,
    page: 1,
    pageSize: 10,
    maxVisible: 7,
  },
};

export const MiddlePage: Story = {
  args: {
    total: 200,
    page: 10,
    pageSize: 10,
    maxVisible: 7,
  },
};

export const FewPages: Story = {
  args: {
    total: 30,
    page: 2,
    pageSize: 10,
    maxVisible: 7,
  },
};

export const LargeDataset: Story = {
  args: {
    total: 500,
    page: 25,
    pageSize: 10,
    maxVisible: 7,
  },
};

export const CustomPageSize: Story = {
  args: {
    total: 120,
    page: 3,
    pageSize: 25,
    maxVisible: 5,
  },
};
