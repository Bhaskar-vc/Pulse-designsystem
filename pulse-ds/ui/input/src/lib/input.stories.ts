import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VInput } from './input.component';

const meta: Meta<VInput> = {
  title: 'Form Controls/Input',
  component: VInput,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [FormsModule] })],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url', 'textarea'],
      description: 'Input type',
    },
    label: {
      control: 'text',
      description: 'Label above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    hint: {
      control: 'text',
      description: 'Hint text below input',
    },
    error: {
      control: 'text',
      description: 'Error message (shown instead of hint, colors input red)',
    },
    prefixText: {
      control: 'text',
      description: 'Prefix text badge',
    },
    prefixIcon: {
      control: 'text',
      description: 'Prefix icon HTML string',
    },
    suffixText: {
      control: 'text',
      description: 'Suffix text badge',
    },
    leadingIcon: {
      control: 'text',
      description: 'Leading icon HTML string',
    },
    trailingIcon: {
      control: 'text',
      description: 'Trailing icon HTML string',
    },
    maxLength: {
      control: 'number',
      description: 'Max character length',
    },
    rows: {
      control: 'number',
      description: 'Textarea rows (only used when type is textarea)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether input is disabled',
    },
    readonly: {
      control: 'boolean',
      description: 'Whether input is readonly',
    },
  },
};

export default meta;
type Story = StoryObj<VInput>;

export const Default: Story = {
  args: {
    type: 'text',
    label: 'Full name',
    placeholder: 'Enter your name',
    hint: '',
    error: '',
    disabled: false,
    readonly: false,
  },
};

export const WithHint: Story = {
  args: {
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
    hint: 'We will never share your email',
    error: '',
    disabled: false,
  },
};

export const WithError: Story = {
  args: {
    type: 'text',
    label: 'Username',
    placeholder: 'Enter username',
    hint: '',
    error: 'Username is already taken',
    disabled: false,
  },
};

export const WithPrefixText: Story = {
  args: {
    type: 'url',
    label: 'Website',
    placeholder: 'example.com',
    prefixText: 'https://',
    disabled: false,
  },
};

export const WithSuffixText: Story = {
  args: {
    type: 'number',
    label: 'Weight',
    placeholder: '0',
    suffixText: 'kg',
    disabled: false,
  },
};

export const WithMaxLength: Story = {
  args: {
    type: 'text',
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    maxLength: 120,
    disabled: false,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    label: 'Disabled field',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};

export const Readonly: Story = {
  args: {
    type: 'text',
    label: 'Read only field',
    placeholder: '',
    readonly: true,
    disabled: false,
  },
};
