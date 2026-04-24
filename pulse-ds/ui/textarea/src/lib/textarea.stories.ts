import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VcTextarea } from './textarea.component';

const meta: Meta<VcTextarea> = {
  title: 'Form Controls/Textarea',
  component: VcTextarea,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [FormsModule] })],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text above the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    hintText: {
      control: 'text',
      description: 'Hint text below the textarea',
    },
    errorText: {
      control: 'text',
      description: 'Error message text',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    value: {
      control: 'text',
      description: 'Current text value',
    },
    minLength: {
      control: 'number',
      description: 'Minimum character length',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    resize: {
      control: 'boolean',
      description: 'Whether the textarea is resizable',
    },
    textareaStyle: {
      control: 'text',
      description: 'Inline style string for the textarea element',
    },
  },
};

export default meta;
type Story = StoryObj<VcTextarea>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    disabled: false,
    required: false,
    resize: true,
  },
};

export const WithHintText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    hintText: 'Maximum 500 characters',
    disabled: false,
  },
};

export const WithMaxLength: Story = {
  args: {
    label: 'Comment',
    placeholder: 'Write a comment...',
    maxLength: 200,
    disabled: false,
  },
};

export const Required: Story = {
  args: {
    label: 'Feedback',
    placeholder: 'Your feedback is required',
    required: true,
    disabled: false,
  },
};

export const NoResize: Story = {
  args: {
    label: 'Fixed textarea',
    placeholder: 'This textarea cannot be resized',
    resize: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled textarea',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};
