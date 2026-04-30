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
      description: 'Maximum file size in megabytes',
    },
    subtext: {
      control: 'text',
      description: 'Subtext shown in the drop zone',
    },
    hasError: {
      control: 'boolean',
      description: 'Whether the upload area is in an error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message shown when hasError is true',
    },
  },
};
export default meta;
type Story = StoryObj<VUpload>;

// --- Default ---
export const Default: Story = {
  args: {
    accept: '',
    multiple: false,
    maxSizeMB: 10,
    subtext: 'SVG, PNG, JPG or PDF (max. 10 MB)',
    hasError: false,
    errorMessage: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="max-width: 480px;">
        <v-upload
          [accept]="accept"
          [multiple]="multiple"
          [maxSizeMB]="maxSizeMB"
          [subtext]="subtext"
          [hasError]="hasError"
          [errorMessage]="errorMessage"
        ></v-upload>
      </div>
    `,
  }),
};

// --- Multiple ---
export const Multiple: Story = {
  render: () => ({
    template: `
      <div style="max-width: 480px;">
        <v-upload
          [multiple]="true"
          subtext="Upload multiple files at once (max. 10 MB each)"
        ></v-upload>
      </div>
    `,
  }),
};

// --- With Error ---
export const WithError: Story = {
  render: () => ({
    template: `
      <div style="max-width: 480px;">
        <v-upload
          [hasError]="true"
          errorMessage="File size exceeds the 10 MB limit"
          subtext="SVG, PNG, JPG or PDF (max. 10 MB)"
        ></v-upload>
      </div>
    `,
  }),
};

// --- Custom Accept ---
export const CustomAccept: Story = {
  render: () => ({
    template: `
      <div style="max-width: 480px;">
        <v-upload
          accept=".pdf,.doc,.docx"
          subtext="PDF or Word documents only (max. 10 MB)"
        ></v-upload>
      </div>
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
            <div style="max-width: 360px;">
              <v-upload
                accept="image/*"
                subtext="PNG, JPG or SVG (max. 5 MB)"
                [maxSizeMB]="5"
              ></v-upload>
            </div>
            <p class="dnd-caption">Clearly communicate accepted file types and size limits in the subtext.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="max-width: 360px;">
              <v-upload subtext="Upload a file"></v-upload>
            </div>
            <p class="dnd-caption">Don't omit file type and size constraints -- users need to know what they can upload before selecting a file.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
