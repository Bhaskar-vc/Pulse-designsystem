import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VRating } from './rating.component';

const meta: Meta<VRating> = {
  title: 'Form Controls/Rating',
  component: VRating,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [FormsModule] })],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 10, step: 0.5 },
      description: 'Rating value (0 to max, supports .5 increments)',
    },
    max: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Total number of stars',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    color: {
      control: 'select',
      options: ['yellow', 'purple', 'gray'],
      description: 'Star fill color',
    },
    interactive: {
      control: 'boolean',
      description: 'Allow user interaction',
    },
    count: {
      control: 'number',
      description: 'Optional review count shown in parentheses',
    },
    showValue: {
      control: 'boolean',
      description: 'Show numeric value after stars',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label',
    },
  },
};

export default meta;
type Story = StoryObj<VRating>;

export const Default: Story = {
  args: {
    value: 3.5,
    max: 5,
    size: 'md',
    color: 'yellow',
    interactive: false,
    count: null,
    showValue: false,
  },
};

export const Interactive: Story = {
  args: {
    value: 0,
    max: 5,
    size: 'md',
    color: 'yellow',
    interactive: true,
    showValue: true,
  },
};

export const WithCount: Story = {
  args: {
    value: 4.2,
    max: 5,
    size: 'md',
    color: 'yellow',
    interactive: false,
    count: 128,
    showValue: true,
  },
};

export const Small: Story = {
  args: {
    value: 4,
    max: 5,
    size: 'sm',
    color: 'yellow',
    interactive: false,
  },
};

export const Large: Story = {
  args: {
    value: 4,
    max: 5,
    size: 'lg',
    color: 'yellow',
    interactive: false,
  },
};

export const PurpleColor: Story = {
  args: {
    value: 3,
    max: 5,
    size: 'md',
    color: 'purple',
    interactive: false,
  },
};

export const GrayColor: Story = {
  args: {
    value: 2.5,
    max: 5,
    size: 'md',
    color: 'gray',
    interactive: false,
  },
};

export const HalfStars: Story = {
  args: {
    value: 2.5,
    max: 5,
    size: 'lg',
    color: 'yellow',
    interactive: false,
    showValue: true,
  },
};

export const TenStars: Story = {
  args: {
    value: 7,
    max: 10,
    size: 'md',
    color: 'yellow',
    interactive: true,
    showValue: true,
  },
};
