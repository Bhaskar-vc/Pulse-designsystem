import type { Meta, StoryObj } from '@storybook/angular';
import { VcDivider } from './divider.component';

const meta: Meta<VcDivider> = {
  title: 'Layout/Divider',
  component: VcDivider,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider line',
    },
    dashed: {
      control: 'boolean',
      description: 'Whether the divider uses a dashed line',
    },
    title: {
      control: 'text',
      description: 'Optional title text displayed within the divider',
    },
    orientation: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Position of the title text (left, center, or right)',
    },
  },
};
export default meta;
type Story = StoryObj<VcDivider>;

// --- Default (solid horizontal) ---
export const Default: Story = {
  args: {
    type: 'horizontal',
    dashed: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 100%; padding: 20px 0;">
        <vc-divider [type]="type" [dashed]="dashed"></vc-divider>
      </div>
    `,
  }),
};

// --- Dashed ---
export const Dashed: Story = {
  args: {
    type: 'horizontal',
    dashed: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 100%; padding: 20px 0;">
        <vc-divider [type]="type" [dashed]="dashed"></vc-divider>
      </div>
    `,
  }),
};

// --- With Title (center) ---
export const WithTitleCenter: Story = {
  args: {
    title: 'Section Title',
    orientation: 'center',
    dashed: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 100%; padding: 20px 0;">
        <vc-divider [title]="title" [orientation]="orientation" [dashed]="dashed"></vc-divider>
      </div>
    `,
  }),
};

// --- With Title (left) ---
export const WithTitleLeft: Story = {
  args: {
    title: 'Section Title',
    orientation: 'left',
    dashed: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 100%; padding: 20px 0;">
        <vc-divider [title]="title" [orientation]="orientation" [dashed]="dashed"></vc-divider>
      </div>
    `,
  }),
};

// --- With Title (right) ---
export const WithTitleRight: Story = {
  args: {
    title: 'Section Title',
    orientation: 'right',
    dashed: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 100%; padding: 20px 0;">
        <vc-divider [title]="title" [orientation]="orientation" [dashed]="dashed"></vc-divider>
      </div>
    `,
  }),
};

// --- Dashed with Title ---
export const DashedWithTitle: Story = {
  args: {
    title: 'Dashed Title',
    orientation: 'center',
    dashed: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 100%; padding: 20px 0;">
        <vc-divider [title]="title" [orientation]="orientation" [dashed]="dashed"></vc-divider>
      </div>
    `,
  }),
};

// --- All Variations ---
export const AllVariations: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 100%; padding: 20px 0;">
        <div>
          <p style="margin: 0 0 8px; font-weight: 600;">Solid</p>
          <vc-divider></vc-divider>
        </div>
        <div>
          <p style="margin: 0 0 8px; font-weight: 600;">Dashed</p>
          <vc-divider [dashed]="true"></vc-divider>
        </div>
        <div>
          <p style="margin: 0 0 8px; font-weight: 600;">Title (left)</p>
          <vc-divider title="Left" orientation="left"></vc-divider>
        </div>
        <div>
          <p style="margin: 0 0 8px; font-weight: 600;">Title (center)</p>
          <vc-divider title="Center" orientation="center"></vc-divider>
        </div>
        <div>
          <p style="margin: 0 0 8px; font-weight: 600;">Title (right)</p>
          <vc-divider title="Right" orientation="right"></vc-divider>
        </div>
        <div>
          <p style="margin: 0 0 8px; font-weight: 600;">Dashed + Title</p>
          <vc-divider title="Dashed" orientation="center" [dashed]="true"></vc-divider>
        </div>
      </div>
    `,
  }),
};
