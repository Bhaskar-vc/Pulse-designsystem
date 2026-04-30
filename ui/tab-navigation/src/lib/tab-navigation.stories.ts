import type { Meta, StoryObj } from '@storybook/angular';
import { VcTabNavigation } from './tab-navigation.component';

const sampleTabs = [
  { label: 'Dashboard' },
  { label: 'Reports' },
  { label: 'Team' },
  { label: 'Settings' },
];

const meta: Meta<VcTabNavigation> = {
  title: 'Navigation/Tab Navigation',
  component: VcTabNavigation,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab menu items with label',
    },
    activeTab: {
      control: 'object',
      description: 'Currently active tab item',
    },
    labelSize: {
      control: 'select',
      options: ['sm', 'default'],
      description: 'Size of the tab labels',
    },
  },
};
export default meta;
type Story = StoryObj<VcTabNavigation>;

// --- Default ---
export const Default: Story = {
  args: {
    tabs: sampleTabs,
    activeTab: sampleTabs[0],
    labelSize: 'default',
  },
  render: (args) => ({
    props: args,
    template: `
      <vc-tab-nav
        [tabs]="tabs"
        [activeTab]="activeTab"
        [labelSize]="labelSize"
      ></vc-tab-nav>
    `,
  }),
};

// --- Small Size ---
export const SmallSize: Story = {
  render: () => ({
    props: {
      tabs: sampleTabs,
      activeTab: sampleTabs[1],
    },
    template: `
      <vc-tab-nav
        [tabs]="tabs"
        [activeTab]="activeTab"
        labelSize="sm"
      ></vc-tab-nav>
    `,
  }),
};

// --- Do and Don't ---
export const DoAndDont: Story = {
  render: () => ({
    props: {
      goodTabs: [
        { label: 'Overview' },
        { label: 'Analytics' },
        { label: 'Members' },
        { label: 'Settings' },
      ],
      goodActive: { label: 'Overview' },
      badTabs: [
        { label: 'A' },
        { label: 'B' },
        { label: 'C' },
        { label: 'D' },
        { label: 'E' },
        { label: 'F' },
        { label: 'G' },
        { label: 'H' },
        { label: 'I' },
        { label: 'J' },
      ],
      badActive: { label: 'A' },
    },
    template: `
      <div class="dnd-wrap">
        <div class="dnd-do">
          <div class="dnd-do-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Do
          </div>
          <div class="dnd-do-body">
            <vc-tab-nav [tabs]="goodTabs" [activeTab]="goodActive"></vc-tab-nav>
            <p class="dnd-caption">Use clear, descriptive labels and keep the number of tabs manageable for quick navigation.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <vc-tab-nav [tabs]="badTabs" [activeTab]="badActive"></vc-tab-nav>
            <p class="dnd-caption">Don't use single-letter labels or create an excessive number of tabs -- users cannot tell what each tab contains.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
