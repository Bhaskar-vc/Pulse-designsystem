import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VToggle } from './toggle.component';

const meta: Meta<VToggle> = {
  title: 'Form Controls/Toggle',
  component: VToggle,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [FormsModule] })],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label displayed next to the toggle',
    },
    supporting: {
      control: 'text',
      description: 'Supporting text below the label',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Toggle size',
    },
    color: {
      control: 'select',
      options: ['success', 'primary', 'secondary'],
      description: 'Toggle color when on',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<VToggle>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
    supporting: '',
    size: 'md',
    color: 'success',
    disabled: false,
  },
};

export const WithSupporting: Story = {
  args: {
    label: 'Dark mode',
    supporting: 'Switch between light and dark themes',
    size: 'md',
    color: 'success',
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    label: 'Small toggle',
    size: 'sm',
    color: 'success',
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    label: 'Large toggle',
    size: 'lg',
    color: 'success',
    disabled: false,
  },
};

export const PrimaryColor: Story = {
  args: {
    label: 'Primary color',
    size: 'md',
    color: 'primary',
    disabled: false,
  },
};

export const SecondaryColor: Story = {
  args: {
    label: 'Secondary color',
    size: 'md',
    color: 'secondary',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    size: 'md',
    color: 'success',
    disabled: true,
  },
};
