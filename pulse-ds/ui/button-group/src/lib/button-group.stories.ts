import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VcButtonGroup } from './button-group.component';
import { VButton } from '@pulse-ds/ui/button';

const meta: Meta<VcButtonGroup> = {
  title: 'Layout/ButtonGroup',
  component: VcButtonGroup,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VButton],
    }),
  ],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class(es) applied to the group wrapper',
    },
  },
};
export default meta;
type Story = StoryObj<VcButtonGroup>;

// --- Default ---
export const Default: Story = {
  args: {
    className: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <vc-button-group [className]="className">
        <v-button variant="outlined" color="secondary">Left</v-button>
        <v-button variant="outlined" color="secondary">Center</v-button>
        <v-button variant="outlined" color="secondary">Right</v-button>
      </vc-button-group>
    `,
  }),
};

// --- Solid Buttons ---
export const SolidGroup: Story = {
  render: () => ({
    template: `
      <vc-button-group>
        <v-button color="primary">Save</v-button>
        <v-button color="secondary">Cancel</v-button>
        <v-button color="danger">Delete</v-button>
      </vc-button-group>
    `,
  }),
};

// --- Mixed Variants ---
export const MixedVariants: Story = {
  render: () => ({
    template: `
      <vc-button-group>
        <v-button variant="solid" color="primary">Primary</v-button>
        <v-button variant="outlined" color="primary">Outlined</v-button>
        <v-button variant="ghost" color="primary">Ghost</v-button>
      </vc-button-group>
    `,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <vc-button-group>
          <v-button size="sm" variant="outlined" color="secondary">Small</v-button>
          <v-button size="sm" variant="outlined" color="secondary">Group</v-button>
        </vc-button-group>
        <vc-button-group>
          <v-button size="default" variant="outlined" color="secondary">Default</v-button>
          <v-button size="default" variant="outlined" color="secondary">Group</v-button>
        </vc-button-group>
        <vc-button-group>
          <v-button size="lg" variant="outlined" color="secondary">Large</v-button>
          <v-button size="lg" variant="outlined" color="secondary">Group</v-button>
        </vc-button-group>
      </div>
    `,
  }),
};
