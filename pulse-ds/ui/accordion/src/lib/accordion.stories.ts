import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VAccordion } from './accordion.component';
import { VAccordionItem } from './accordion-item.component';

const meta: Meta<VAccordion> = {
  title: 'Navigation/Accordion',
  component: VAccordion,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VAccordionItem],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered'],
      description: 'Visual variant of the accordion container.',
    },
    allowMultiple: {
      control: 'boolean',
      description: 'Whether multiple items can be open at the same time.',
    },
  },
};

export default meta;
type Story = StoryObj<VAccordion>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <v-accordion [variant]="variant" [allowMultiple]="allowMultiple">
        <v-accordion-item title="What is Pulse Design System?">
          Pulse is a design system built for Vantage Circle products, providing
          reusable Angular components with consistent styling and behavior.
        </v-accordion-item>
        <v-accordion-item title="How do I install it?">
          You can install Pulse DS via npm and import the components you need
          into your Angular modules or standalone components.
        </v-accordion-item>
        <v-accordion-item title="Can I customize the theme?">
          Yes, Pulse DS uses CSS custom properties (design tokens) that you
          can override to match your brand.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
  args: {
    variant: 'default',
    allowMultiple: false,
  },
};

export const Bordered: Story = {
  render: (args) => ({
    props: args,
    template: `
      <v-accordion variant="bordered" [allowMultiple]="false">
        <v-accordion-item title="Section One">
          Content for section one.
        </v-accordion-item>
        <v-accordion-item title="Section Two">
          Content for section two.
        </v-accordion-item>
        <v-accordion-item title="Section Three">
          Content for section three.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
};

export const AllowMultiple: Story = {
  render: (args) => ({
    props: args,
    template: `
      <v-accordion variant="default" [allowMultiple]="true">
        <v-accordion-item title="First Item">
          First item content. Multiple items can be open simultaneously.
        </v-accordion-item>
        <v-accordion-item title="Second Item">
          Second item content.
        </v-accordion-item>
        <v-accordion-item title="Third Item">
          Third item content.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
};

export const WithBadges: Story = {
  render: (args) => ({
    props: args,
    template: `
      <v-accordion variant="default" [allowMultiple]="false">
        <v-accordion-item title="Completed Tasks" badge="12" badgeType="success">
          All 12 tasks have been completed successfully.
        </v-accordion-item>
        <v-accordion-item title="Pending Review" badge="3" badgeType="warning">
          3 items are awaiting review.
        </v-accordion-item>
        <v-accordion-item title="All Items" badge="15">
          Complete list of all items.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
};

export const WithDisabledItem: Story = {
  render: (args) => ({
    props: args,
    template: `
      <v-accordion variant="default" [allowMultiple]="false">
        <v-accordion-item title="Available Section">
          This section is interactive.
        </v-accordion-item>
        <v-accordion-item title="Locked Section" [disabled]="true">
          This content is not accessible.
        </v-accordion-item>
        <v-accordion-item title="Another Available Section">
          This section is also interactive.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
};
