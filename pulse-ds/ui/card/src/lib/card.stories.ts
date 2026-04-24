import type { Meta, StoryObj } from '@storybook/angular';
import { VCard } from './card.component';

const meta: Meta<VCard> = {
  title: 'Layout/Card',
  component: VCard,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the card',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the card is in a selected state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card shows pointer cursor and hover effect',
    },
    flat: {
      control: 'boolean',
      description: 'Remove box shadow from the card',
    },
    horizontal: {
      control: 'boolean',
      description: 'Use a horizontal card layout',
    },
  },
};
export default meta;
type Story = StoryObj<VCard>;

// --- Default ---
export const Default: Story = {
  args: {
    size: 'md',
    selected: false,
    disabled: false,
    clickable: false,
    flat: false,
    horizontal: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-card [size]="size" [selected]="selected" [disabled]="disabled" [clickable]="clickable" [flat]="flat" [horizontal]="horizontal">
        <p style="margin: 0;">This is a card with some content inside.</p>
      </v-card>
    `,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: start;">
        <v-card size="sm"><p style="margin: 0;">Small card</p></v-card>
        <v-card size="md"><p style="margin: 0;">Medium card</p></v-card>
        <v-card size="lg"><p style="margin: 0;">Large card</p></v-card>
      </div>
    `,
  }),
};

// --- Selected ---
export const Selected: Story = {
  args: {
    selected: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-card [selected]="selected">
        <p style="margin: 0;">This card is selected.</p>
      </v-card>
    `,
  }),
};

// --- Disabled ---
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-card [disabled]="disabled">
        <p style="margin: 0;">This card is disabled.</p>
      </v-card>
    `,
  }),
};

// --- Clickable ---
export const Clickable: Story = {
  render: () => ({
    template: `
      <v-card [clickable]="true" (cardClick)="onClick()">
        <p style="margin: 0;">Click me! I have a hover effect and pointer cursor.</p>
      </v-card>
    `,
    props: {
      onClick: () => console.log('Card clicked'),
    },
  }),
};

// --- Flat ---
export const Flat: Story = {
  args: {
    flat: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-card [flat]="flat">
        <p style="margin: 0;">Flat card without box shadow.</p>
      </v-card>
    `,
  }),
};

// --- Horizontal ---
export const Horizontal: Story = {
  args: {
    horizontal: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-card [horizontal]="horizontal">
        <p style="margin: 0;">Horizontal card layout.</p>
      </v-card>
    `,
  }),
};

// --- All States ---
export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <v-card><p style="margin: 0;">Default card</p></v-card>
        <v-card [selected]="true"><p style="margin: 0;">Selected card</p></v-card>
        <v-card [disabled]="true"><p style="margin: 0;">Disabled card</p></v-card>
        <v-card [clickable]="true"><p style="margin: 0;">Clickable card</p></v-card>
        <v-card [flat]="true"><p style="margin: 0;">Flat card</p></v-card>
        <v-card [horizontal]="true"><p style="margin: 0;">Horizontal card</p></v-card>
      </div>
    `,
  }),
};
