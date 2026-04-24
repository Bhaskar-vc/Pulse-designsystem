import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VcInputField } from './input-field.component';

const meta: Meta<VcInputField> = {
  title: 'Form Controls/Input Field',
  component: VcInputField,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [FormsModule] })],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    hintText: {
      control: 'text',
      description: 'Hint text below the input',
    },
    errorText: {
      control: 'text',
      description: 'Error message text',
    },
    showErrorText: {
      control: 'boolean',
      description: 'Whether to show error text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'password', 'tel', 'url'],
      description: 'Input type attribute',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the field is read only',
    },
    hideArrowButton: {
      control: 'boolean',
      description: 'Hide arrow buttons for number inputs',
    },
    customValidation: {
      control: 'select',
      options: [undefined, 'valid', 'invalid'],
      description: 'Custom validation state override',
    },
    min: {
      control: 'number',
      description: 'Minimum value (for number inputs)',
    },
    max: {
      control: 'number',
      description: 'Maximum value (for number inputs)',
    },
    minLength: {
      control: 'number',
      description: 'Minimum character length',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    iconLeft: {
      control: 'text',
      description: 'Left icon (string class name or TemplateRef)',
    },
    iconRight: {
      control: 'text',
      description: 'Right icon (string class name or TemplateRef)',
    },
    componentStyle: {
      control: 'text',
      description: 'Inline style string for the host element',
    },
  },
};

export default meta;
type Story = StoryObj<VcInputField>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    disabled: false,
    readOnly: false,
    required: false,
  },
};

export const WithHintText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    hintText: 'Must be at least 3 characters',
    type: 'text',
    disabled: false,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    errorText: 'Please enter a valid email address',
    showErrorText: true,
    customValidation: 'invalid',
    type: 'email',
    disabled: false,
  },
};

export const Required: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Enter your full name',
    type: 'text',
    required: true,
    disabled: false,
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Quantity',
    placeholder: '0',
    type: 'number',
    min: 0,
    max: 100,
    disabled: false,
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    placeholder: 'Cannot edit',
    type: 'text',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read only field',
    placeholder: '',
    type: 'text',
    readOnly: true,
    disabled: false,
  },
};
