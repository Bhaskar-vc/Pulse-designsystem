import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VCheckbox } from './checkbox.component';

const meta: Meta<VCheckbox> = {
  title: 'Form Controls/Checkbox',
  component: VCheckbox,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [FormsModule] })],
  argTypes: {
    label: {
      control: 'text',
      description: 'Display label next to the checkbox',
    },
    supporting: {
      control: 'text',
      description: 'Supporting/helper text below the label',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the checkbox control',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<VCheckbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    supporting: '',
    size: 'md',
    indeterminate: false,
    disabled: false,
  },
};

export const WithSupporting: Story = {
  args: {
    label: 'Email notifications',
    supporting: 'Receive email updates about your account activity',
    size: 'md',
    indeterminate: false,
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    label: 'Small checkbox',
    size: 'sm',
    indeterminate: false,
    disabled: false,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    size: 'md',
    indeterminate: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    size: 'md',
    indeterminate: false,
    disabled: true,
  },
};
