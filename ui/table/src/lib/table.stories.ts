import type { Meta, StoryObj } from '@storybook/angular';
import { VTable } from './table.component';
import { TableColumn } from './table.types';

const sampleColumns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
];

const sampleRows: Record<string, unknown>[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Carol Lee', email: 'carol@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'David Park', email: 'david@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Eva Chen', email: 'eva@example.com', role: 'Admin', status: 'Pending' },
];

const numericColumns: TableColumn[] = [
  { key: 'product', label: 'Product' },
  { key: 'price', label: 'Price', numeric: true, sortable: true },
  { key: 'qty', label: 'Quantity', numeric: true, sortable: true },
];

const numericRows: Record<string, unknown>[] = [
  { id: 1, product: 'Widget A', price: '$12.99', qty: 150 },
  { id: 2, product: 'Widget B', price: '$24.50', qty: 89 },
  { id: 3, product: 'Gadget C', price: '$7.25', qty: 320 },
  { id: 4, product: 'Gadget D', price: '$34.00', qty: 45 },
  { id: 5, product: 'Accessory E', price: '$5.99', qty: 600 },
];

const meta: Meta<VTable> = {
  title: 'Data Display/Table',
  component: VTable,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'object',
      description: 'Array of column definitions (key, label, sortable, numeric, width)',
    },
    rows: {
      control: 'object',
      description: 'Array of row data objects',
    },
    variant: {
      control: 'select',
      options: ['default', 'striped', 'bordered', 'compact'],
      description: 'Visual style variant of the table',
    },
    selectable: {
      control: 'boolean',
      description: 'Show checkbox column for row selection',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the table element',
    },
  },
};
export default meta;
type Story = StoryObj<VTable>;

// --- Default ---
export const Default: Story = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    variant: 'default',
    selectable: false,
    ariaLabel: 'User data table',
  },
};

// --- Striped ---
export const Striped: Story = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    variant: 'striped',
    ariaLabel: 'Striped user table',
  },
};

// --- Bordered ---
export const Bordered: Story = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    variant: 'bordered',
    ariaLabel: 'Bordered user table',
  },
};

// --- Compact ---
export const Compact: Story = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    variant: 'compact',
    ariaLabel: 'Compact user table',
  },
};

// --- Selectable ---
export const Selectable: Story = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    variant: 'default',
    selectable: true,
    ariaLabel: 'Selectable user table',
  },
};

// --- With Numeric Column ---
export const WithNumericColumn: Story = {
  args: {
    columns: numericColumns,
    rows: numericRows,
    variant: 'default',
    ariaLabel: 'Product inventory table',
  },
};

// --- Do and Don't ---
export const DoAndDont: Story = {
  render: () => ({
    props: {
      goodColumns: [
        { key: 'name', label: 'Name', sortable: true },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
      ],
      goodRows: [
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
      ],
      badColumns: [
        { key: 'col1', label: 'Col 1' },
        { key: 'col2', label: 'Col 2' },
        { key: 'col3', label: 'Col 3' },
        { key: 'col4', label: 'Col 4' },
        { key: 'col5', label: 'Col 5' },
        { key: 'col6', label: 'Col 6' },
        { key: 'col7', label: 'Col 7' },
        { key: 'col8', label: 'Col 8' },
      ],
      badRows: [
        { col1: 'a', col2: 'b', col3: 'c', col4: 'd', col5: 'e', col6: 'f', col7: 'g', col8: 'h' },
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
            <v-table [columns]="goodColumns" [rows]="goodRows" ariaLabel="Good example table"></v-table>
            <p class="dnd-caption">Use clear, descriptive column headers and keep the number of columns manageable for readability.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-table [columns]="badColumns" [rows]="badRows" ariaLabel="Bad example table"></v-table>
            <p class="dnd-caption">Don't use cryptic column headers like "Col 1" or pack too many columns — the table becomes hard to scan.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
