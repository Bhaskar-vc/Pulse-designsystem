import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { VRadio } from './radio.component';
import { VRadioGroup } from './radio-group.component';

const meta: Meta<VRadioGroup> = {
  title: 'Form Controls/Radio',
  component: VRadioGroup,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormsModule, VRadio, VRadioGroup],
    }),
  ],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of radio items',
    },
    name: {
      control: 'text',
      description: 'The name attribute for grouping radios',
    },
  },
};

export default meta;
type Story = StoryObj<VRadioGroup>;

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    name: 'plan',
  },
  render: (args) => ({
    props: args,
    template: `
      <v-radio-group [orientation]="orientation" [name]="name">
        <v-radio label="Free plan" value="free" supporting="Up to 5 users"></v-radio>
        <v-radio label="Pro plan" value="pro" supporting="Up to 50 users"></v-radio>
        <v-radio label="Enterprise" value="enterprise" supporting="Unlimited users"></v-radio>
      </v-radio-group>
    `,
  }),
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    name: 'size',
  },
  render: (args) => ({
    props: args,
    template: `
      <v-radio-group [orientation]="orientation" [name]="name">
        <v-radio label="Small" value="sm"></v-radio>
        <v-radio label="Medium" value="md"></v-radio>
        <v-radio label="Large" value="lg"></v-radio>
      </v-radio-group>
    `,
  }),
};

export const SmallSize: Story = {
  args: {
    orientation: 'vertical',
    name: 'color',
  },
  render: (args) => ({
    props: args,
    template: `
      <v-radio-group [orientation]="orientation" [name]="name">
        <v-radio label="Red" value="red" size="sm"></v-radio>
        <v-radio label="Blue" value="blue" size="sm"></v-radio>
        <v-radio label="Green" value="green" size="sm"></v-radio>
      </v-radio-group>
    `,
  }),
};

export const WithDisabledOption: Story = {
  args: {
    orientation: 'vertical',
    name: 'option',
  },
  render: (args) => ({
    props: args,
    template: `
      <v-radio-group [orientation]="orientation" [name]="name">
        <v-radio label="Option A" value="a"></v-radio>
        <v-radio label="Option B (disabled)" value="b" disabled></v-radio>
        <v-radio label="Option C" value="c"></v-radio>
      </v-radio-group>
    `,
  }),
};

export const SingleRadio: Story = {
  render: () => ({
    template: `
      <v-radio label="Standalone radio" value="single" supporting="This is a single radio button" size="md"></v-radio>
    `,
  }),
};
