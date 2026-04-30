import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VcStepper } from './stepper.component';
import { VcStep } from './step.component';
import { VcStepLabel } from './step-label.directive';
import { VcStepContent } from './step-content.directive';

const meta: Meta<VcStepper> = {
  title: 'Form Controls/Stepper',
  component: VcStepper,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VcStep, VcStepLabel, VcStepContent],
    }),
  ],
  argTypes: {
    linearMode: {
      control: 'boolean',
      description: 'Whether the stepper enforces linear progression',
    },
    stepperPosition: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Position of the step header relative to content',
    },
  },
};
export default meta;
type Story = StoryObj<VcStepper>;

// --- Default (Horizontal) ---
export const Default: Story = {
  args: {
    linearMode: true,
    stepperPosition: 'top',
  },
  render: (args) => ({
    props: args,
    template: `
      <vc-horizontal-stepper [linearMode]="linearMode" [stepperPosition]="stepperPosition">
        <vc-step label="Personal Info">
          <div style="padding: 16px;">
            <p style="margin: 0 0 12px; font-size: 14px;">Enter your name and email address.</p>
          </div>
        </vc-step>
        <vc-step label="Address">
          <div style="padding: 16px;">
            <p style="margin: 0 0 12px; font-size: 14px;">Provide your mailing address.</p>
          </div>
        </vc-step>
        <vc-step label="Review">
          <div style="padding: 16px;">
            <p style="margin: 0 0 12px; font-size: 14px;">Review your information before submitting.</p>
          </div>
        </vc-step>
      </vc-horizontal-stepper>
    `,
  }),
};

// --- Vertical ---
export const Vertical: Story = {
  render: () => ({
    template: `
      <vc-vertical-stepper [linearMode]="true">
        <vc-step label="Account Setup">
          <div style="padding: 16px;">
            <p style="margin: 0; font-size: 14px;">Create your account credentials.</p>
          </div>
        </vc-step>
        <vc-step label="Profile Details">
          <div style="padding: 16px;">
            <p style="margin: 0; font-size: 14px;">Complete your profile information.</p>
          </div>
        </vc-step>
        <vc-step label="Preferences">
          <div style="padding: 16px;">
            <p style="margin: 0; font-size: 14px;">Set your notification and display preferences.</p>
          </div>
        </vc-step>
      </vc-vertical-stepper>
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
            <vc-horizontal-stepper [linearMode]="true">
              <vc-step label="Select Plan">
                <div style="padding: 12px;">
                  <p style="margin: 0; font-size: 14px;">Choose your subscription plan.</p>
                </div>
              </vc-step>
              <vc-step label="Payment">
                <div style="padding: 12px;">
                  <p style="margin: 0; font-size: 14px;">Enter billing details.</p>
                </div>
              </vc-step>
              <vc-step label="Confirm">
                <div style="padding: 12px;">
                  <p style="margin: 0; font-size: 14px;">Review and confirm your order.</p>
                </div>
              </vc-step>
            </vc-horizontal-stepper>
            <p class="dnd-caption">Break long forms into logical steps with clear, descriptive labels so users understand the progress.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <vc-horizontal-stepper [linearMode]="false">
              <vc-step label="Step 1">
                <div style="padding: 12px;">
                  <p style="margin: 0; font-size: 14px;">Content.</p>
                </div>
              </vc-step>
              <vc-step label="Step 2">
                <div style="padding: 12px;">
                  <p style="margin: 0; font-size: 14px;">Content.</p>
                </div>
              </vc-step>
              <vc-step label="Step 3">
                <div style="padding: 12px;">
                  <p style="margin: 0; font-size: 14px;">Content.</p>
                </div>
              </vc-step>
              <vc-step label="Step 4">
                <div style="padding: 12px;">
                  <p style="margin: 0; font-size: 14px;">Content.</p>
                </div>
              </vc-step>
              <vc-step label="Step 5">
                <div style="padding: 12px;">
                  <p style="margin: 0; font-size: 14px;">Content.</p>
                </div>
              </vc-step>
              <vc-step label="Step 6">
                <div style="padding: 12px;">
                  <p style="margin: 0; font-size: 14px;">Content.</p>
                </div>
              </vc-step>
            </vc-horizontal-stepper>
            <p class="dnd-caption">Don't use generic step labels or too many steps -- users lose track of progress and context.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
