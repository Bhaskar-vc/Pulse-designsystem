import type { Meta, StoryObj } from '@storybook/angular';
import { VStat } from './stat.component';

const meta: Meta<VStat> = {
  title: 'Data Display/Stat',
  component: VStat,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Row label displayed above the primary value',
    },
    value: {
      control: 'text',
      description: 'Primary metric — the large number or text',
    },
    desc: {
      control: 'text',
      description: 'Supporting description text below the value',
    },
    trend: {
      control: 'text',
      description: 'Trend indicator text (e.g. "+12.5%")',
    },
    trendDir: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
      description: 'Direction of the trend arrow',
    },
    iconColor: {
      control: 'select',
      options: ['none', 'purple', 'green', 'blue', 'orange', 'red'],
      description: 'Background color of the icon area',
    },
    centered: {
      control: 'boolean',
      description: 'Center-align all content within the stat card',
    },
  },
};
export default meta;
type Story = StoryObj<VStat>;

// --- Default ---
export const Default: Story = {
  args: {
    title: 'Total Revenue',
    value: '$48,295',
    desc: 'Compared to last quarter',
    trend: '+12.5%',
    trendDir: 'up',
    iconColor: 'none',
    centered: false,
  },
};

// --- Trend Directions ---
export const TrendDirections: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <v-stat title="Revenue" value="$48,295" trend="+12.5%" trendDir="up" desc="vs last quarter"></v-stat>
        <v-stat title="Churn Rate" value="3.2%" trend="-0.8%" trendDir="down" desc="vs last month"></v-stat>
        <v-stat title="Active Users" value="1,024" trend="0%" trendDir="neutral" desc="no change"></v-stat>
      </div>
    `,
  }),
};

// --- Icon Colors ---
export const IconColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <v-stat title="Downloads" value="8,420" iconColor="purple"></v-stat>
        <v-stat title="Signups" value="1,230" iconColor="green"></v-stat>
        <v-stat title="Page Views" value="54K" iconColor="blue"></v-stat>
        <v-stat title="Warnings" value="12" iconColor="orange"></v-stat>
        <v-stat title="Errors" value="3" iconColor="red"></v-stat>
      </div>
    `,
  }),
};

// --- Centered ---
export const Centered: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; flex-wrap: wrap;">
        <v-stat title="Total Orders" value="1,482" trend="+8.3%" trendDir="up" [centered]="true"></v-stat>
        <v-stat title="Avg. Rating" value="4.7" trend="+0.2" trendDir="up" [centered]="true"></v-stat>
        <v-stat title="Bounce Rate" value="32%" trend="-4.1%" trendDir="down" [centered]="true"></v-stat>
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
            <div style="display:flex;gap:24px;flex-wrap:wrap;">
              <v-stat title="Monthly Revenue" value="$48,295" trend="+12.5%" trendDir="up" desc="vs last month"></v-stat>
            </div>
            <p class="dnd-caption">Include a descriptive title, a clear value, and trend context so users can interpret the metric at a glance.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="display:flex;gap:24px;flex-wrap:wrap;">
              <v-stat value="48295"></v-stat>
            </div>
            <p class="dnd-caption">Don't display a raw number without a title or context — users won't know what the value represents or whether it's good or bad.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
