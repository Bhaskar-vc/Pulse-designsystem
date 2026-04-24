import type { Meta, StoryObj } from '@storybook/angular';
import { VModal } from './modal.component';

const meta: Meta<VModal> = {
  title: 'Feedback/Modal',
  component: VModal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls modal visibility',
    },
    title: {
      control: 'text',
      description: 'Modal title text',
    },
    body: {
      control: 'text',
      description: 'Modal body text (use [modalBody] slot for richer content)',
    },
    size: {
      control: 'select',
      options: ['default', 'wide'],
      description: 'Size variant',
    },
    centered: {
      control: 'boolean',
      description: 'Center icon + text layout',
    },
    showClose: {
      control: 'boolean',
      description: 'Show X close button in header',
    },
    actionsAlign: {
      control: 'select',
      options: ['between', 'right', 'center', 'stacked'],
      description: 'Actions alignment',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Close when clicking backdrop',
    },
  },
};

export default meta;
type Story = StoryObj<VModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    body: 'This is the modal body content. You can add any text or description here.',
    size: 'default',
    centered: false,
    showClose: true,
    actionsAlign: 'between',
    closeOnBackdrop: true,
  },
};

export const Wide: Story = {
  args: {
    isOpen: true,
    title: 'Wide Modal',
    body: 'This modal uses the wide size variant for displaying more content.',
    size: 'wide',
    showClose: true,
    actionsAlign: 'between',
  },
};

export const Centered: Story = {
  args: {
    isOpen: true,
    title: 'Are you sure?',
    body: 'This action cannot be undone. Please confirm you want to proceed.',
    centered: true,
    showClose: true,
    actionsAlign: 'center',
  },
};

export const ActionsRight: Story = {
  args: {
    isOpen: true,
    title: 'Save Changes',
    body: 'You have unsaved changes. Would you like to save before leaving?',
    showClose: true,
    actionsAlign: 'right',
  },
};

export const ActionsStacked: Story = {
  args: {
    isOpen: true,
    title: 'Choose an option',
    body: 'Select one of the actions below to continue.',
    showClose: true,
    actionsAlign: 'stacked',
  },
};

export const NoCloseButton: Story = {
  args: {
    isOpen: true,
    title: 'Required Action',
    body: 'You must complete this step before continuing.',
    showClose: false,
    closeOnBackdrop: false,
  },
};
