import type { Meta, StoryObj } from '@storybook/angular';
import { VPagination } from './pagination.component';

const meta: Meta<VPagination> = {
  title: 'Data Display/Pagination',
  component: VPagination,
  tags: ['autodocs'],
  argTypes: {
    total: {
      control: 'number',
      description: 'Total number of items across all pages',
    },
    page: {
      control: 'number',
      description: 'Current active page (1-based)',
    },
    pageSize: {
      control: 'number',
      description: 'Number of items displayed per page',
    },
    maxVisible: {
      control: 'number',
      description: 'Maximum number of page buttons visible at once (excluding prev/next)',
    },
  },
};
export default meta;
type Story = StoryObj<VPagination>;

// --- Default ---
export const Default: Story = {
  args: {
    total: 100,
    page: 1,
    pageSize: 10,
    maxVisible: 7,
  },
};

// --- Few Pages ---
export const FewPages: Story = {
  args: {
    total: 30,
    page: 1,
    pageSize: 10,
    maxVisible: 7,
  },
};

// --- Many Pages ---
export const ManyPages: Story = {
  args: {
    total: 500,
    page: 1,
    pageSize: 10,
    maxVisible: 7,
  },
};

// --- Custom Page Size ---
export const CustomPageSize: Story = {
  args: {
    total: 100,
    page: 1,
    pageSize: 25,
    maxVisible: 7,
  },
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
            <v-pagination [total]="100" [page]="3" [pageSize]="10" [maxVisible]="7"></v-pagination>
            <p class="dnd-caption">Show a reasonable number of visible page buttons and keep the page size appropriate for your data density.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-pagination [total]="5" [page]="1" [pageSize]="1" [maxVisible]="7"></v-pagination>
            <p class="dnd-caption">Don't use pagination for very small data sets where only a few items exist — display them all at once instead.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
