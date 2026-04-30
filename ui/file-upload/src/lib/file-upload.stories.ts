import type { Meta, StoryObj } from '@storybook/angular';
import { VcFileUpload } from './file-upload.component';

const meta: Meta<VcFileUpload> = {
  title: 'Form Controls/File Upload',
  component: VcFileUpload,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'image', 'drag-drop'],
      description: 'Upload mode: button, image preview, or drag-and-drop area',
    },
    label: {
      control: 'text',
      description: 'Label text for the upload button',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the file input',
    },
    multiple: {
      control: 'boolean',
      description: 'Whether to allow multiple file selection',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g. "image/*,.pdf")',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the upload control is disabled',
    },
    dropAreaHintText: {
      control: 'text',
      description: 'Hint text displayed in the drag-and-drop area',
    },
    dropAreaWidth: {
      control: 'number',
      description: 'Width of the drag-and-drop area in pixels',
    },
    dropAreaHeight: {
      control: 'number',
      description: 'Height of the drag-and-drop area in pixels',
    },
    showOnlyDropArea: {
      control: 'boolean',
      description: 'Show only the drop area without the upload button',
    },
    showUploadStatusIcon: {
      control: 'boolean',
      description: 'Show status icons for uploaded files',
    },
  },
};
export default meta;
type Story = StoryObj<VcFileUpload>;

// --- Default ---
export const Default: Story = {
  args: {
    type: 'default',
    label: 'Upload',
    multiple: false,
    accept: '',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <vc-file-upload
        [type]="type"
        [label]="label"
        [multiple]="multiple"
        [accept]="accept"
        [disabled]="disabled"
      ></vc-file-upload>
    `,
  }),
};

// --- Drag and Drop ---
export const DragAndDrop: Story = {
  render: () => ({
    template: `
      <vc-file-upload
        type="drag-drop"
        dropAreaHintText="Drag and drop your files here, or click to browse"
        [dropAreaWidth]="400"
        [dropAreaHeight]="200"
        [showOnlyDropArea]="true"
      ></vc-file-upload>
    `,
  }),
};

// --- Image Upload ---
export const ImageUpload: Story = {
  render: () => ({
    template: `
      <vc-file-upload
        type="image"
        label="Upload Image"
        accept="image/*"
      ></vc-file-upload>
    `,
  }),
};

// --- Multiple ---
export const Multiple: Story = {
  render: () => ({
    template: `
      <vc-file-upload
        type="default"
        label="Upload Files"
        [multiple]="true"
        [showUploadStatusIcon]="true"
      ></vc-file-upload>
    `,
  }),
};

// --- Disabled ---
export const Disabled: Story = {
  render: () => ({
    template: `
      <vc-file-upload
        type="default"
        label="Upload"
        [disabled]="true"
      ></vc-file-upload>
    `,
  }),
};

// --- Do and Don't ---
export const DoAndDont: Story = {
  render: () => ({
    template: `
      <div class="dnd-wrap">
        <div class="dnd-do">
          <div class="dnd-do-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Do
          </div>
          <div class="dnd-do-body">
            <vc-file-upload
              type="drag-drop"
              dropAreaHintText="Drop your CSV or Excel file here"
              accept=".csv,.xlsx,.xls"
              [dropAreaWidth]="320"
              [dropAreaHeight]="140"
              [showOnlyDropArea]="true"
            ></vc-file-upload>
            <p class="dnd-caption">Specify accepted file types and provide helpful hint text so users know what to upload.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <vc-file-upload
              type="default"
              label="Upload"
            ></vc-file-upload>
            <p class="dnd-caption">Don't use a generic upload button without specifying accepted types or providing guidance.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
