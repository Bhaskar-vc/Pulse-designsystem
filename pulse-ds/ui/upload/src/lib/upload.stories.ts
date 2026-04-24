import type { Meta, StoryObj } from '@storybook/angular';
import { VUpload } from './upload.component';

const meta: Meta<VUpload> = {
  title: 'Form Controls/Upload',
  component: VUpload,
  tags: ['autodocs'],
  argTypes: {
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g. "image/*,.pdf")',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    maxSizeMB: {
      control: 'number',
      description: 'Max file size in MB',
    },
    subtext: {
      control: 'text',
      description: 'Subtext shown in the drop zone',
    },
    hasError: {
      control: 'boolean',
      description: 'Error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message',
    },
  },
};

export default meta;
type Story = StoryObj<VUpload>;

export const Default: Story = {
  args: {
    accept: '',
    multiple: false,
    maxSizeMB: 10,
    subtext: 'SVG, PNG, JPG or PDF (max. 10 MB)',
    hasError: false,
    errorMessage: '',
  },
};

export const ImagesOnly: Story = {
  args: {
    accept: 'image/*',
    multiple: false,
    maxSizeMB: 5,
    subtext: 'PNG, JPG or SVG (max. 5 MB)',
    hasError: false,
    errorMessage: '',
  },
};

export const MultipleFiles: Story = {
  args: {
    accept: '',
    multiple: true,
    maxSizeMB: 20,
    subtext: 'Upload multiple files (max. 20 MB each)',
    hasError: false,
    errorMessage: '',
  },
};

export const PDFOnly: Story = {
  args: {
    accept: '.pdf',
    multiple: false,
    maxSizeMB: 25,
    subtext: 'PDF files only (max. 25 MB)',
    hasError: false,
    errorMessage: '',
  },
};

export const WithError: Story = {
  args: {
    accept: 'image/*',
    multiple: false,
    maxSizeMB: 5,
    subtext: 'PNG, JPG or SVG (max. 5 MB)',
    hasError: true,
    errorMessage: 'File size exceeds the maximum limit',
  },
};
