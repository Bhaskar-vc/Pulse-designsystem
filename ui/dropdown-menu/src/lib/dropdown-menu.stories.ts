import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VDropdownMenu } from './dropdown-menu.component';
import { VDropdownMenuTrigger } from './dropdown-menu-trigger.component';
import { VDropdownMenuContent } from './dropdown-menu-content.component';
import { VDropdownMenuItem } from './dropdown-menu-item.component';
import { VDropdownMenuDivider } from './dropdown-menu-divider.component';
import { VDropdownMenuLabel } from './dropdown-menu-label.component';

const meta: Meta<VDropdownMenu> = {
  title: 'Form Controls/Dropdown Menu',
  component: VDropdownMenu,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        VDropdownMenuTrigger,
        VDropdownMenuContent,
        VDropdownMenuItem,
        VDropdownMenuDivider,
        VDropdownMenuLabel,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;
type Story = StoryObj<VDropdownMenu>;

// --- Default ---
export const Default: Story = {
  render: () => ({
    template: `
      <div style="padding: 40px;">
        <v-dropdown-menu>
          <v-dropdown-menu-trigger>
            <button style="padding: 8px 16px; border: 1px solid #d0d5dd; border-radius: 8px; background: white; cursor: pointer; font-size: 14px;">
              Open Menu
            </button>
          </v-dropdown-menu-trigger>
          <v-dropdown-menu-content>
            <v-dropdown-menu-label>Actions</v-dropdown-menu-label>
            <v-dropdown-menu-item>Edit</v-dropdown-menu-item>
            <v-dropdown-menu-item>Duplicate</v-dropdown-menu-item>
            <v-dropdown-menu-item>Copy link</v-dropdown-menu-item>
            <v-dropdown-menu-divider></v-dropdown-menu-divider>
            <v-dropdown-menu-item>Archive</v-dropdown-menu-item>
            <v-dropdown-menu-item variant="destructive">Delete</v-dropdown-menu-item>
          </v-dropdown-menu-content>
        </v-dropdown-menu>
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
            <v-dropdown-menu>
              <v-dropdown-menu-trigger>
                <button style="padding: 8px 16px; border: 1px solid #d0d5dd; border-radius: 8px; background: white; cursor: pointer; font-size: 14px;">
                  Actions
                </button>
              </v-dropdown-menu-trigger>
              <v-dropdown-menu-content>
                <v-dropdown-menu-label>File</v-dropdown-menu-label>
                <v-dropdown-menu-item>New document</v-dropdown-menu-item>
                <v-dropdown-menu-item>Open existing</v-dropdown-menu-item>
                <v-dropdown-menu-divider></v-dropdown-menu-divider>
                <v-dropdown-menu-item variant="destructive">Delete</v-dropdown-menu-item>
              </v-dropdown-menu-content>
            </v-dropdown-menu>
            <p class="dnd-caption">Group related actions together and use labels and dividers to organize the menu logically.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-dropdown-menu>
              <v-dropdown-menu-trigger>
                <button style="padding: 8px 16px; border: 1px solid #d0d5dd; border-radius: 8px; background: white; cursor: pointer; font-size: 14px;">
                  Menu
                </button>
              </v-dropdown-menu-trigger>
              <v-dropdown-menu-content>
                <v-dropdown-menu-item>Action 1</v-dropdown-menu-item>
                <v-dropdown-menu-item>Action 2</v-dropdown-menu-item>
                <v-dropdown-menu-item>Action 3</v-dropdown-menu-item>
                <v-dropdown-menu-item>Action 4</v-dropdown-menu-item>
                <v-dropdown-menu-item>Action 5</v-dropdown-menu-item>
                <v-dropdown-menu-item>Action 6</v-dropdown-menu-item>
                <v-dropdown-menu-item>Action 7</v-dropdown-menu-item>
              </v-dropdown-menu-content>
            </v-dropdown-menu>
            <p class="dnd-caption">Don't overload a menu with too many ungrouped items -- it becomes hard to scan and navigate.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
