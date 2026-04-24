import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VcFileUpload } from './file-upload.component';

const meta: Meta<VcFileUpload> = {
  title: 'Form Controls/File Upload',
  component: VcFileUpload,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [VcFileUpload] })],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'image', 'drag-drop'],
      description: 'Upload component type',
    },
    label: {
      control: 'text',
      description: 'Upload button label',
    },
    name: {
      control: 'text',
      description: 'File input name attribute',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types',
    },
    dropAreaHintText: {
      control: 'text',
      description: 'Hint text shown in the drop area',
    },
    dropAreaWidth: {
      control: 'number',
      description: 'Width of the drop area in pixels',
    },
    dropAreaHeight: {
      control: 'number',
      description: 'Height of the drop area in pixels',
    },
    showOnlyDropArea: {
      control: 'boolean',
      description: 'Show only the drop area',
    },
    showUploadStatusIcon: {
      control: 'boolean',
      description: 'Show upload status icon',
    },
    uploadButtonStyle: {
      control: 'text',
      description: 'Inline style for the upload button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the upload is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<VcFileUpload>;

export const Default: Story = {
  args: {
    type: 'default',
    label: 'Upload',
    multiple: false,
    accept: '',
    disabled: false,
    showUploadStatusIcon: true,
  },
};

export const ImageUpload: Story = {
  args: {
    type: 'image',
    label: 'Upload Image',
    multiple: false,
    accept: 'image/*',
    disabled: false,
    showUploadStatusIcon: true,
  },
};

export const DragAndDrop: Story = {
  args: {
    type: 'drag-drop',
    label: 'Upload',
    multiple: true,
    accept: '',
    dropAreaHintText: 'Drag and drop files here or click to browse',
    dropAreaWidth: 384,
    showOnlyDropArea: true,
    showUploadStatusIcon: true,
    disabled: false,
  },
};

export const MultipleFiles: Story = {
  args: {
    type: 'default',
    label: 'Upload Files',
    multiple: true,
    accept: '',
    disabled: false,
    showUploadStatusIcon: true,
  },
};

export const AcceptPDFOnly: Story = {
  args: {
    type: 'default',
    label: 'Upload PDF',
    multiple: false,
    accept: '.pdf',
    disabled: false,
    showUploadStatusIcon: true,
  },
};

export const DragDropCustomSize: Story = {
  args: {
    type: 'drag-drop',
    label: 'Upload',
    multiple: false,
    accept: 'image/*',
    dropAreaHintText: 'Drop your image here',
    dropAreaWidth: 500,
    dropAreaHeight: 200,
    showOnlyDropArea: true,
    showUploadStatusIcon: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    type: 'default',
    label: 'Upload',
    multiple: false,
    accept: '',
    disabled: true,
    showUploadStatusIcon: true,
  },
};
