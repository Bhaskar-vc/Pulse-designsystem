import type { Meta, StoryObj } from '@storybook/angular';
import { VcTabNavigation } from './tab-navigation.component';
import { VcMenuItem } from './menuitem';

const sampleTabs: VcMenuItem[] = [
  { label: 'Dashboard' },
  { label: 'Analytics' },
  { label: 'Reports' },
  { label: 'Settings' },
];

const tabsWithIcons: VcMenuItem[] = [
  { label: 'Home', iconLeft: 'icon-home' },
  { label: 'Users', iconLeft: 'icon-users' },
  { label: 'Settings', iconLeft: 'icon-settings' },
];

const meta: Meta<VcTabNavigation> = {
  title: 'Navigation/TabNavigation',
  component: VcTabNavigation,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of VcMenuItem objects defining each tab.',
    },
    activeTab: {
      control: 'object',
      description: 'The currently active tab item.',
    },
    labelSize: {
      control: 'select',
      options: ['sm', 'default'],
      description: 'Size of the tab labels.',
    },
  },
};

export default meta;
type Story = StoryObj<VcTabNavigation>;

export const Default: Story = {
  args: {
    tabs: sampleTabs,
    activeTab: sampleTabs[0],
    labelSize: 'default',
  },
};

export const SmallLabels: Story = {
  args: {
    tabs: sampleTabs,
    activeTab: sampleTabs[1],
    labelSize: 'sm',
  },
};

export const WithIcons: Story = {
  args: {
    tabs: tabsWithIcons,
    activeTab: tabsWithIcons[0],
    labelSize: 'default',
  },
};
