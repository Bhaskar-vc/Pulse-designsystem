import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { VcStepper } from './stepper.component';
import { VcStep } from './step.component';
import { VcStepLabel } from './step-label.directive';
import { VcStepContent } from './step-content.directive';
import { VcStepperNext, VcStepperPrevious } from './stepper-button';
import { VcStepHeader } from './step-header.component';
import { CdkStepperModule } from '@angular/cdk/stepper';

const meta: Meta<VcStepper> = {
  title: 'Feedback/Stepper',
  component: VcStepper,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({ providers: [provideAnimations()] }),
    moduleMetadata({
      imports: [
        VcStep,
        VcStepLabel,
        VcStepContent,
        VcStepperNext,
        VcStepperPrevious,
        VcStepHeader,
        CdkStepperModule,
      ],
    }),
  ],
  argTypes: {
    linearMode: {
      control: 'boolean',
      description: 'Enforce linear step progression',
    },
    stepperPosition: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Position of the step headers',
    },
  },
};

export default meta;
type Story = StoryObj<VcStepper>;

export const Horizontal: Story = {
  render: (args) => ({
    props: args,
    template: `
      <vc-stepper [linear]="linearMode">
        <vc-step>
          <ng-template vcStepLabel>Account Setup</ng-template>
          <div style="padding: 24px 0;">
            <p>Create your account with email and password.</p>
            <button vcStepperNext style="margin-top: 12px; padding: 6px 16px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer;">Next</button>
          </div>
        </vc-step>
        <vc-step>
          <ng-template vcStepLabel>Personal Info</ng-template>
          <div style="padding: 24px 0;">
            <p>Tell us about yourself.</p>
            <div style="display: flex; gap: 8px; margin-top: 12px;">
              <button vcStepperPrevious style="padding: 6px 16px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; background: white;">Back</button>
              <button vcStepperNext style="padding: 6px 16px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer;">Next</button>
            </div>
          </div>
        </vc-step>
        <vc-step>
          <ng-template vcStepLabel>Complete</ng-template>
          <div style="padding: 24px 0;">
            <p>Review and finish your registration.</p>
            <button vcStepperPrevious style="margin-top: 12px; padding: 6px 16px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; background: white;">Back</button>
          </div>
        </vc-step>
      </vc-stepper>
    `,
  }),
  args: {
    linearMode: true,
    stepperPosition: 'top',
  },
};

export const Vertical: Story = {
  render: (args) => ({
    props: args,
    template: `
      <vc-vertical-stepper [linear]="linearMode">
        <vc-step>
          <ng-template vcStepLabel>Step 1: Upload</ng-template>
          <div style="padding: 16px 0;">
            <p>Upload your files to get started.</p>
            <button vcStepperNext style="margin-top: 8px; padding: 6px 16px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer;">Continue</button>
          </div>
        </vc-step>
        <vc-step>
          <ng-template vcStepLabel>Step 2: Configure</ng-template>
          <div style="padding: 16px 0;">
            <p>Set up your preferences.</p>
            <div style="display: flex; gap: 8px; margin-top: 8px;">
              <button vcStepperPrevious style="padding: 6px 16px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; background: white;">Back</button>
              <button vcStepperNext style="padding: 6px 16px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer;">Continue</button>
            </div>
          </div>
        </vc-step>
        <vc-step>
          <ng-template vcStepLabel>Step 3: Review</ng-template>
          <div style="padding: 16px 0;">
            <p>Review everything and submit.</p>
            <button vcStepperPrevious style="margin-top: 8px; padding: 6px 16px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; background: white;">Back</button>
          </div>
        </vc-step>
      </vc-vertical-stepper>
    `,
  }),
  args: {
    linearMode: true,
  },
};

export const NonLinear: Story = {
  render: () => ({
    template: `
      <vc-stepper [linear]="false">
        <vc-step>
          <ng-template vcStepLabel>Details</ng-template>
          <div style="padding: 24px 0;">
            <p>Enter basic details. You can navigate freely between steps.</p>
            <button vcStepperNext style="margin-top: 12px; padding: 6px 16px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer;">Next</button>
          </div>
        </vc-step>
        <vc-step>
          <ng-template vcStepLabel>Preferences</ng-template>
          <div style="padding: 24px 0;">
            <p>Customize your preferences.</p>
            <div style="display: flex; gap: 8px; margin-top: 12px;">
              <button vcStepperPrevious style="padding: 6px 16px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; background: white;">Back</button>
              <button vcStepperNext style="padding: 6px 16px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer;">Next</button>
            </div>
          </div>
        </vc-step>
        <vc-step>
          <ng-template vcStepLabel>Summary</ng-template>
          <div style="padding: 24px 0;">
            <p>All done! Review your choices.</p>
            <button vcStepperPrevious style="margin-top: 12px; padding: 6px 16px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; background: white;">Back</button>
          </div>
        </vc-step>
      </vc-stepper>
    `,
  }),
};
