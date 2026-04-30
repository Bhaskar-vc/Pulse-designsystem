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
      options: ['line', 'pills', 'enclosed'],
      description: 'Visual variant of the tabs',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the tab items',
    },
    vertical: {
      control: 'boolean',
      description: 'Vertical layout',
    },
    activeIndex: {
      control: 'number',
      description: 'Index of the initially active tab',
    },
  },
};
export default meta;
type Story = StoryObj<VTabs>;

// --- Default ---
export const Default: Story = {
  args: {
    variant: 'line',
    size: 'md',
    vertical: false,
    activeIndex: 0,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-tabs [variant]="variant" [size]="size" [vertical]="vertical" [activeIndex]="activeIndex">
        <v-tab-item label="Overview">
          <p style="color:#344054;">This is the overview panel. It provides a high-level summary of the current state of your project.</p>
        </v-tab-item>
        <v-tab-item label="Activity">
          <p style="color:#344054;">Recent activity feed showing the latest updates, changes, and events in your workspace.</p>
        </v-tab-item>
        <v-tab-item label="Settings">
          <p style="color:#344054;">Configure project settings, permissions, and preferences from this panel.</p>
        </v-tab-item>
      </v-tabs>
    `,
  }),
};

// --- Variants ---
export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;">
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Line</p>
          <v-tabs variant="line">
            <v-tab-item label="Tab One"><p style="color:#344054;">Line variant content</p></v-tab-item>
            <v-tab-item label="Tab Two"><p style="color:#344054;">Second tab content</p></v-tab-item>
            <v-tab-item label="Tab Three"><p style="color:#344054;">Third tab content</p></v-tab-item>
          </v-tabs>
        </div>
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Pills</p>
          <v-tabs variant="pills">
            <v-tab-item label="Tab One"><p style="color:#344054;">Pills variant content</p></v-tab-item>
            <v-tab-item label="Tab Two"><p style="color:#344054;">Second tab content</p></v-tab-item>
            <v-tab-item label="Tab Three"><p style="color:#344054;">Third tab content</p></v-tab-item>
          </v-tabs>
        </div>
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Enclosed</p>
          <v-tabs variant="enclosed">
            <v-tab-item label="Tab One"><p style="color:#344054;">Enclosed variant content</p></v-tab-item>
            <v-tab-item label="Tab Two"><p style="color:#344054;">Second tab content</p></v-tab-item>
            <v-tab-item label="Tab Three"><p style="color:#344054;">Third tab content</p></v-tab-item>
          </v-tabs>
        </div>
      </div>
    `,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;">
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Small</p>
          <v-tabs size="sm">
            <v-tab-item label="Overview"><p style="color:#344054;">Small size tab</p></v-tab-item>
            <v-tab-item label="Details"><p style="color:#344054;">Details content</p></v-tab-item>
          </v-tabs>
        </div>
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Medium (default)</p>
          <v-tabs size="md">
            <v-tab-item label="Overview"><p style="color:#344054;">Medium size tab</p></v-tab-item>
            <v-tab-item label="Details"><p style="color:#344054;">Details content</p></v-tab-item>
          </v-tabs>
        </div>
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Large</p>
          <v-tabs size="lg">
            <v-tab-item label="Overview"><p style="color:#344054;">Large size tab</p></v-tab-item>
            <v-tab-item label="Details"><p style="color:#344054;">Details content</p></v-tab-item>
          </v-tabs>
        </div>
      </div>
    `,
  }),
};

// --- Vertical ---
export const Vertical: Story = {
  render: () => ({
    template: `
      <v-tabs [vertical]="true" variant="line">
        <v-tab-item label="General">
          <p style="color:#344054;">General settings and preferences for your account.</p>
        </v-tab-item>
        <v-tab-item label="Notifications">
          <p style="color:#344054;">Configure notification preferences and alert channels.</p>
        </v-tab-item>
        <v-tab-item label="Security">
          <p style="color:#344054;">Manage passwords, two-factor authentication, and sessions.</p>
        </v-tab-item>
      </v-tabs>
    `,
  }),
};

// --- With Counts ---
export const WithCounts: Story = {
  render: () => ({
    template: `
      <v-tabs variant="line">
        <v-tab-item label="All" count="128">
          <p style="color:#344054;">Showing all 128 items.</p>
        </v-tab-item>
        <v-tab-item label="Active" count="96">
          <p style="color:#344054;">Showing 96 active items.</p>
        </v-tab-item>
        <v-tab-item label="Archived" count="32">
          <p style="color:#344054;">Showing 32 archived items.</p>
        </v-tab-item>
      </v-tabs>
    `,
  }),
};

// --- With Disabled ---
export const WithDisabled: Story = {
  render: () => ({
    template: `
      <v-tabs variant="line">
        <v-tab-item label="Overview">
          <p style="color:#344054;">Overview content is available.</p>
        </v-tab-item>
        <v-tab-item label="Analytics" [disabled]="true">
          <p style="color:#344054;">This tab is disabled.</p>
        </v-tab-item>
        <v-tab-item label="Settings">
          <p style="color:#344054;">Settings panel content.</p>
        </v-tab-item>
      </v-tabs>
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
            <v-tabs variant="line">
              <v-tab-item label="Overview"><p style="color:#344054;">Summary of the project.</p></v-tab-item>
              <v-tab-item label="Members"><p style="color:#344054;">Team member list.</p></v-tab-item>
              <v-tab-item label="Settings"><p style="color:#344054;">Project settings.</p></v-tab-item>
            </v-tabs>
            <p class="dnd-caption">Use short, descriptive labels that clearly convey the content of each tab panel.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-tabs variant="line">
              <v-tab-item label="Tab 1"><p style="color:#344054;">Content.</p></v-tab-item>
              <v-tab-item label="Tab 2"><p style="color:#344054;">Content.</p></v-tab-item>
              <v-tab-item label="Tab 3"><p style="color:#344054;">Content.</p></v-tab-item>
              <v-tab-item label="Tab 4"><p style="color:#344054;">Content.</p></v-tab-item>
              <v-tab-item label="Tab 5"><p style="color:#344054;">Content.</p></v-tab-item>
              <v-tab-item label="Tab 6"><p style="color:#344054;">Content.</p></v-tab-item>
              <v-tab-item label="Tab 7"><p style="color:#344054;">Content.</p></v-tab-item>
            </v-tabs>
            <p class="dnd-caption">Don't use generic labels like "Tab 1" or create too many tabs -- group related content and use meaningful names.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
