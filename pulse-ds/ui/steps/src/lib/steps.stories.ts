import type { Meta, StoryObj } from '@storybook/angular';
import { VSteps } from './steps.component';
import { StepDef } from './steps.types';

const sampleSteps: StepDef[] = [
  { title: 'Account Setup', desc: 'Create your account credentials' },
  { title: 'Personal Info', desc: 'Tell us about yourself' },
  { title: 'Preferences', desc: 'Customize your experience' },
  { title: 'Complete', desc: 'Review and finish' },
];

const meta: Meta<VSteps> = {
  title: 'Data Display/Steps',
  component: VSteps,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      control: 'object',
      description: 'Step definitions (title, desc, state)',
    },
    activeStep: {
      control: { type: 'number', min: -1, max: 3 },
      description: 'Active step index (0-based); auto-sets step states',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'dot'],
      description: 'Visual size variant',
    },
    vertical: {
      control: 'boolean',
      description: 'Vertical orientation',
    },
  },
};

export default meta;
type Story = StoryObj<VSteps>;

export const Default: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 1,
    size: 'md',
    vertical: false,
  },
};

export const FirstStep: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 0,
    size: 'md',
    vertical: false,
  },
};

export const LastStep: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 3,
    size: 'md',
    vertical: false,
  },
};

export const Small: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 2,
    size: 'sm',
    vertical: false,
  },
};

export const Large: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 1,
    size: 'lg',
    vertical: false,
  },
};

export const Dot: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 2,
    size: 'dot',
    vertical: false,
  },
};

export const Vertical: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 1,
    size: 'md',
    vertical: true,
  },
};

export const WithExplicitStates: Story = {
  args: {
    steps: [
      { title: 'Account Setup', desc: 'Create your account', state: 'done' },
      { title: 'Personal Info', desc: 'Your profile', state: 'done' },
      { title: 'Preferences', desc: 'Customize settings', state: 'error' },
      { title: 'Complete', desc: 'Review and finish', state: 'pending' },
    ],
    activeStep: -1,
    size: 'md',
    vertical: false,
  },
};
