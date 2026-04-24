import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VTabs } from './tabs.component';
import { VTabItem } from './tab-item.component';

const meta: Meta<VTabs> = {
  title: 'Navigation/Tabs',
  component: VTabs,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VTabItem],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['line'],
      description: 'Visual variant of the tabs.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tab labels.',
    },
    vertical: {
      control: 'boolean',
      description: 'Whether to render tabs vertically.',
    },
    activeIndex: {
      control: 'number',
      description: 'Index of the initially active tab (0-based).',
    },
  },
};

export default meta;
type Story = StoryObj<VTabs>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <v-tabs [variant]="variant" [size]="size" [vertical]="vertical" [activeIndex]="activeIndex">
        <v-tab-item label="Overview">Overview content goes here.</v-tab-item>
        <v-tab-item label="Analytics" count="12">Analytics content goes here.</v-tab-item>
        <v-tab-item label="Reports">Reports content goes here.</v-tab-item>
        <v-tab-item label="Disabled" [disabled]="true">This tab is disabled.</v-tab-item>
      </v-tabs>
    `,
  }),
  args: {
    variant: 'line',
    size: 'md',
    vertical: false,
    activeIndex: 0,
  },
};

export const Small: Story = {
  render: (args) => ({
    props: args,
    template: `
      <v-tabs variant="line" size="sm" [activeIndex]="0">
        <v-tab-item label="Tab One">Small tab content one.</v-tab-item>
        <v-tab-item label="Tab Two">Small tab content two.</v-tab-item>
      </v-tabs>
    `,
  }),
};

export const Large: Story = {
  render: (args) => ({
    props: args,
    template: `
      <v-tabs variant="line" size="lg" [activeIndex]="0">
        <v-tab-item label="Tab One">Large tab content one.</v-tab-item>
        <v-tab-item label="Tab Two">Large tab content two.</v-tab-item>
      </v-tabs>
    `,
  }),
};

export const Vertical: Story = {
  render: (args) => ({
    props: args,
    template: `
      <v-tabs variant="line" size="md" [vertical]="true" [activeIndex]="0">
        <v-tab-item label="Profile">Profile content.</v-tab-item>
        <v-tab-item label="Settings">Settings content.</v-tab-item>
        <v-tab-item label="Notifications" count="5">Notifications content.</v-tab-item>
      </v-tabs>
    `,
  }),
};

export const WithCounts: Story = {
  render: (args) => ({
    props: args,
    template: `
      <v-tabs variant="line" size="md" [activeIndex]="0">
        <v-tab-item label="All" count="48">All items listed here.</v-tab-item>
        <v-tab-item label="Active" count="32">Active items listed here.</v-tab-item>
        <v-tab-item label="Archived" count="16">Archived items listed here.</v-tab-item>
      </v-tabs>
    `,
  }),
};
