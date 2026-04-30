import type { Meta, StoryObj } from '@storybook/angular';
import { VSpinner } from './spinner.component';

const meta: Meta<VSpinner> = {
  title: 'Feedback/Spinner',
  component: VSpinner,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Color of the spinner',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'md', 'lg'],
      description: 'Size of the spinner',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme variant',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
};
export default meta;
type Story = StoryObj<VSpinner>;

// --- Default ---
export const Default: Story = {
  args: {
    color: 'primary',
    size: 'default',
    theme: 'light',
    ariaLabel: 'Loading',
  },
  render: (args) => ({
    props: args,
    template: `<v-spinner [color]="color" [size]="size" [theme]="theme" [ariaLabel]="ariaLabel"></v-spinner>`,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:center;">
        <div style="text-align:center;">
          <v-spinner size="xs"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">XS</div>
        </div>
        <div style="text-align:center;">
          <v-spinner size="sm"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">SM</div>
        </div>
        <div style="text-align:center;">
          <v-spinner size="default"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">Default</div>
        </div>
        <div style="text-align:center;">
          <v-spinner size="md"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">MD</div>
        </div>
        <div style="text-align:center;">
          <v-spinner size="lg"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">LG</div>
        </div>
      </div>
    `,
  }),
};

// --- Colors ---
export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:center;">
        <div style="text-align:center;">
          <v-spinner color="primary" size="md"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">Primary</div>
        </div>
        <div style="text-align:center;">
          <v-spinner color="success" size="md"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">Success</div>
        </div>
        <div style="text-align:center;">
          <v-spinner color="warning" size="md"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">Warning</div>
        </div>
        <div style="text-align:center;">
          <v-spinner color="danger" size="md"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">Danger</div>
        </div>
        <div style="text-align:center;">
          <v-spinner color="info" size="md"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">Info</div>
        </div>
        <div style="text-align:center;">
          <v-spinner color="neutral" size="md"></v-spinner>
          <div style="font-size:12px;color:#667085;margin-top:8px;">Neutral</div>
        </div>
      </div>
    `,
  }),
};

// --- Dark Theme ---
export const DarkTheme: Story = {
  render: () => ({
    template: `
      <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:center;background:#1d2939;padding:32px;border-radius:12px;">
        <div style="text-align:center;">
          <v-spinner color="primary" size="md" theme="dark"></v-spinner>
          <div style="font-size:12px;color:#98a2b3;margin-top:8px;">Primary</div>
        </div>
        <div style="text-align:center;">
          <v-spinner color="success" size="md" theme="dark"></v-spinner>
          <div style="font-size:12px;color:#98a2b3;margin-top:8px;">Success</div>
        </div>
        <div style="text-align:center;">
          <v-spinner color="warning" size="md" theme="dark"></v-spinner>
          <div style="font-size:12px;color:#98a2b3;margin-top:8px;">Warning</div>
        </div>
        <div style="text-align:center;">
          <v-spinner color="danger" size="md" theme="dark"></v-spinner>
          <div style="font-size:12px;color:#98a2b3;margin-top:8px;">Danger</div>
        </div>
        <div style="text-align:center;">
          <v-spinner color="neutral" size="md" theme="dark"></v-spinner>
          <div style="font-size:12px;color:#98a2b3;margin-top:8px;">Neutral</div>
        </div>
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
            <div style="display:flex;align-items:center;gap:8px;">
              <v-spinner size="sm" color="primary"></v-spinner>
              <span style="font-size:14px;color:#344054;">Loading results...</span>
            </div>
            <p class="dnd-caption">Pair a spinner with a descriptive label so users know what is loading.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="display:flex;align-items:center;">
              <v-spinner size="lg" color="primary"></v-spinner>
            </div>
            <p class="dnd-caption">Don't show a spinner without context -- users won't know what they are waiting for or how long it will take.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
