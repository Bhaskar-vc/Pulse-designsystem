import type { Meta, StoryObj } from '@storybook/angular';
import { VSteps } from './steps.component';
import { StepDef } from './steps.types';

const sampleSteps: StepDef[] = [
  { title: 'Account', desc: 'Create account' },
  { title: 'Profile', desc: 'Set up profile' },
  { title: 'Review', desc: 'Review details' },
  { title: 'Complete', desc: 'All done' },
];

const meta: Meta<VSteps> = {
  title: 'Data Display/Steps',
  component: VSteps,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      control: 'object',
      description: 'Array of step definitions ({ title, desc?, state? })',
    },
    activeStep: {
      control: 'number',
      description: 'Index of the currently active step (0-based). Steps before this are marked done.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'dot'],
      description: 'Visual size of the step indicators',
    },
    vertical: {
      control: 'boolean',
      description: 'Display steps in a vertical orientation (classic variant only)',
    },
    variant: {
      control: 'select',
      options: ['classic', 'pill'],
      description: 'Component style: numbered circles (classic) or compact pills (pill)',
    },
    theme: {
      control: 'select',
      options: ['default', 'light', 'dark'],
      description: 'Color theme (pill variant)',
    },
    separator: {
      control: 'select',
      options: ['line', 'arrow'],
      description: 'Connector style between steps (pill variant)',
    },
  },
};
export default meta;
type Story = StoryObj<VSteps>;

// --- Default ---
export const Default: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 1,
    size: 'md',
    vertical: false,
    variant: 'classic',
    theme: 'default',
    separator: 'line',
  },
};

// --- Vertical ---
export const Vertical: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 2,
    variant: 'classic',
    vertical: true,
  },
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    props: {
      steps: sampleSteps,
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <p style="margin: 0 0 8px; font-weight: 600; font-size: 13px; color: #555;">Small</p>
          <v-steps [steps]="steps" [activeStep]="1" size="sm"></v-steps>
        </div>
        <div>
          <p style="margin: 0 0 8px; font-weight: 600; font-size: 13px; color: #555;">Medium (default)</p>
          <v-steps [steps]="steps" [activeStep]="1" size="md"></v-steps>
        </div>
        <div>
          <p style="margin: 0 0 8px; font-weight: 600; font-size: 13px; color: #555;">Large</p>
          <v-steps [steps]="steps" [activeStep]="1" size="lg"></v-steps>
        </div>
      </div>
    `,
  }),
};

// --- Variants ---
export const Variants: Story = {
  render: () => ({
    props: {
      steps: sampleSteps,
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <p style="margin: 0 0 8px; font-weight: 600; font-size: 13px; color: #555;">Classic</p>
          <v-steps [steps]="steps" [activeStep]="2" variant="classic"></v-steps>
        </div>
        <div>
          <p style="margin: 0 0 8px; font-weight: 600; font-size: 13px; color: #555;">Pill</p>
          <v-steps [steps]="steps" [activeStep]="2" variant="pill"></v-steps>
        </div>
      </div>
    `,
  }),
};

// --- Separators ---
export const Separators: Story = {
  render: () => ({
    props: {
      steps: sampleSteps,
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <p style="margin: 0 0 8px; font-weight: 600; font-size: 13px; color: #555;">Line separator</p>
          <v-steps [steps]="steps" [activeStep]="1" variant="pill" separator="line"></v-steps>
        </div>
        <div>
          <p style="margin: 0 0 8px; font-weight: 600; font-size: 13px; color: #555;">Arrow separator</p>
          <v-steps [steps]="steps" [activeStep]="1" variant="pill" separator="arrow"></v-steps>
        </div>
      </div>
    `,
  }),
};

// --- Do and Don't ---
export const DoAndDont: Story = {
  render: () => ({
    props: {
      goodSteps: [
        { title: 'Shipping', desc: 'Enter address' },
        { title: 'Payment', desc: 'Add card details' },
        { title: 'Confirm', desc: 'Review order' },
      ],
      badSteps: [
        { title: 'Step 1' },
        { title: 'Step 2' },
        { title: 'Step 3' },
        { title: 'Step 4' },
        { title: 'Step 5' },
        { title: 'Step 6' },
        { title: 'Step 7' },
        { title: 'Step 8' },
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
            <v-steps [steps]="goodSteps" [activeStep]="1" variant="classic"></v-steps>
            <p class="dnd-caption">Use clear, descriptive step labels with concise descriptions. Keep the number of steps manageable (3-5).</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-steps [steps]="badSteps" [activeStep]="3" variant="classic"></v-steps>
            <p class="dnd-caption">Don't use generic labels like "Step 1" or include too many steps — it overwhelms users and hides meaningful progress.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
