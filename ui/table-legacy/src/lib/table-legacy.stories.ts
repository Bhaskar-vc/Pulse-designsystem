import type { Meta, StoryObj } from '@storybook/angular';
import { VcLegacyTable } from './table.component';

const sampleColumns = ['Name', 'Email', 'Role', 'Status'];

const sampleData = [
  { Name: 'Alice Johnson', Email: 'alice@example.com', Role: 'Admin', Status: 'Active' },
  { Name: 'Bob Smith', Email: 'bob@example.com', Role: 'Editor', Status: 'Active' },
  { Name: 'Carol White', Email: 'carol@example.com', Role: 'Viewer', Status: 'Inactive' },
  { Name: 'Dan Brown', Email: 'dan@example.com', Role: 'Editor', Status: 'Active' },
  { Name: 'Eve Davis', Email: 'eve@example.com', Role: 'Admin', Status: 'Pending' },
];

const meta: Meta<VcLegacyTable> = {
  title: 'Data Display/Table Legacy',
  component: VcLegacyTable,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object', description: 'Row data as array of objects.' },
    columns: { control: 'object', description: 'Column header labels.' },
    header: { control: 'boolean', description: 'Show table header bar.' },
    heading: { control: 'text', description: 'Heading text in the header bar.' },
    headingTag: { control: 'boolean', description: 'Show a tag next to the heading.' },
    headingTagText: { control: 'text', description: 'Tag text in the header bar.' },
    striped: { control: 'boolean', description: 'Alternate row striping.' },
    maxHeight: { control: 'number', description: 'Max height (px) for scrollable table.' },
    shadow: { control: 'boolean', description: 'Drop shadow around the table.' },
    sortingEnabled: { control: 'boolean', description: 'Enable column sorting.' },
    fixFirstColumn: { control: 'boolean', description: 'Freeze the first column on horizontal scroll.' },
  },
};

export default meta;
type Story = StoryObj<VcLegacyTable>;

// ── Default ──────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    header: false,
    striped: false,
    shadow: true,
    sortingEnabled: false,
  },
};

// ── With Header ──────────────────────────────────────────────────────────────
export const WithHeader: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    header: true,
    heading: 'Team Members',
    headingTag: true,
    headingTagText: '5 members',
    shadow: true,
  },
};

// ── Striped ──────────────────────────────────────────────────────────────────
export const Striped: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    striped: true,
    shadow: true,
  },
};

// ── Sortable ─────────────────────────────────────────────────────────────────
export const Sortable: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    sortingEnabled: true,
    shadow: true,
  },
};

// ── Scrollable ───────────────────────────────────────────────────────────────
export const Scrollable: Story = {
  args: {
    data: [
      ...sampleData,
      { Name: 'Frank Lee', Email: 'frank@example.com', Role: 'Viewer', Status: 'Active' },
      { Name: 'Grace Hopper', Email: 'grace@example.com', Role: 'Admin', Status: 'Active' },
      { Name: 'Hank Green', Email: 'hank@example.com', Role: 'Editor', Status: 'Pending' },
    ],
    columns: sampleColumns,
    maxHeight: 200,
    shadow: true,
  },
};

// ── Do & Don't ───────────────────────────────────────────────────────────────
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
            <p style="font-size:13px;color:var(--ds-text-body);margin:0;">Use the newer <code>v-table</code> component for new projects — it supports column definitions, selection, and variant styling out of the box.</p>
            <p class="dnd-caption">Prefer the modern Table component for greenfield work and migrate legacy usages incrementally.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <p style="font-size:13px;color:var(--ds-text-faint);background:var(--ds-danger-subtle);border:1px solid var(--ds-danger-border);border-radius:8px;padding:12px 16px;margin:0;">
              Don't use the legacy table for new features — it lacks built-in selection, typed column definitions, and variant support.
            </p>
            <p class="dnd-caption">Reserve this component for existing pages that haven't migrated yet.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
