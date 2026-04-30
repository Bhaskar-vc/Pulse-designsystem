import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VButtonGroup } from './button-group.component';
import { VButton } from '@pulse-ds/ui/button';

const meta: Meta<VButtonGroup> = {
  title: 'Layout/Button Group',
  component: VButtonGroup,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VButton],
    }),
  ],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class(es) applied to the group wrapper',
    },
  },
};
export default meta;
type Story = StoryObj<VButtonGroup>;

// --- Default (outlined joined style) ---
export const Default: Story = {
  args: { className: '' },
  render: (args) => ({
    props: args,
    template: `
      <v-button-group [className]="className">
        <v-button variant="outlined" color="secondary">Left</v-button>
        <v-button variant="outlined" color="secondary">Center</v-button>
        <v-button variant="outlined" color="secondary">Right</v-button>
      </v-button-group>
    `,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <v-button-group>
          <v-button size="xs" variant="outlined" color="secondary">Extra Small</v-button>
          <v-button size="xs" variant="outlined" color="secondary">Group</v-button>
        </v-button-group>
        <v-button-group>
          <v-button size="sm" variant="outlined" color="secondary">Small</v-button>
          <v-button size="sm" variant="outlined" color="secondary">Group</v-button>
        </v-button-group>
        <v-button-group>
          <v-button size="default" variant="outlined" color="secondary">Default</v-button>
          <v-button size="default" variant="outlined" color="secondary">Group</v-button>
        </v-button-group>
        <v-button-group>
          <v-button size="lg" variant="outlined" color="secondary">Large</v-button>
          <v-button size="lg" variant="outlined" color="secondary">Group</v-button>
        </v-button-group>
      </div>
    `,
  }),
};

// --- With Icons ---
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <v-button-group>
          <v-button variant="outlined" color="secondary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="margin-right:6px;"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Previous
          </v-button>
          <v-button variant="outlined" color="secondary">
            Next
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="margin-left:6px;"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </v-button>
        </v-button-group>

        <v-button-group>
          <v-button variant="outlined" color="secondary" [iconOnly]="true" ariaLabel="Bold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </v-button>
          <v-button variant="outlined" color="secondary" [iconOnly]="true" ariaLabel="Italic">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><line x1="19" y1="4" x2="10" y2="4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="14" y1="20" x2="5" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="15" y1="4" x2="9" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </v-button>
          <v-button variant="outlined" color="secondary" [iconOnly]="true" ariaLabel="Underline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="4" y1="21" x2="20" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </v-button>
        </v-button-group>
      </div>
    `,
  }),
};

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
            <v-button-group>
              <v-button variant="outlined" color="secondary">Day</v-button>
              <v-button variant="outlined" color="secondary">Week</v-button>
              <v-button variant="outlined" color="secondary">Month</v-button>
            </v-button-group>
            <p class="dnd-caption">Group closely related actions that operate on the same object — like switching a view mode.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-button-group>
              <v-button variant="solid" color="primary">Save</v-button>
              <v-button variant="solid" color="secondary">Export CSV</v-button>
              <v-button variant="solid" color="danger">Delete account</v-button>
            </v-button-group>
            <p class="dnd-caption">Don't mix unrelated or destructive actions in the same group — it creates confusion and increases the risk of accidental destructive clicks.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
