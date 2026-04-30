import type { Meta, StoryObj } from '@storybook/angular';
import { VcInputField } from './input-field.component';

const meta: Meta<VcInputField> = {
  title: 'Form Controls/Input Field',
  component: VcInputField,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder text inside the field.' },
    label: { control: 'text', description: 'Label shown above the field.' },
    hintText: { control: 'text', description: 'Hint text below the field.' },
    readOnly: { control: 'boolean', description: 'Whether the field is read-only.' },
    errorText: { control: 'text', description: 'Error message text.' },
    showErrorText: { control: 'boolean', description: 'Whether to show the error text.' },
    required: { control: 'boolean', description: 'Whether the field is required.' },
    disabled: { control: 'boolean', description: 'Whether the field is disabled.' },
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'password', 'tel', 'url'],
      description: 'HTML input type.',
    },
    hideArrowButton: { control: 'boolean', description: 'Hide number input arrows (type=number).' },
  },
};

export default meta;
type Story = StoryObj<VcInputField>;

// ── Default ───────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
    disabled: false,
    required: false,
    readOnly: false,
    showErrorText: true,
  },
};

// ── With Label ────────────────────────────────────────────────────────────────
export const WithLabel: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Jane Appleseed',
    type: 'text',
  },
};

// ── With Hint ─────────────────────────────────────────────────────────────────
export const WithHint: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@company.com',
    hintText: 'We will only use this for important notifications.',
    type: 'email',
  },
};

// ── Error State ───────────────────────────────────────────────────────────────
export const ErrorState: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@company.com',
    type: 'email',
    required: true,
    customValidation: 'invalid',
    errorText: 'Please enter a valid email address.',
    showErrorText: true,
  },
};

// ── Disabled ──────────────────────────────────────────────────────────────────
export const Disabled: Story = {
  args: {
    label: 'Email address',
    placeholder: 'olivia@untitledui.com',
    disabled: true,
  },
};

// ── Required ──────────────────────────────────────────────────────────────────
export const Required: Story = {
  args: {
    label: 'Work email',
    placeholder: 'you@company.com',
    required: true,
    hintText: 'Required for account verification.',
    type: 'email',
  },
};

// ── Password Type ─────────────────────────────────────────────────────────────
export const PasswordType: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    hintText: 'Must be at least 8 characters.',
  },
};

// ── Number Type ───────────────────────────────────────────────────────────────
export const NumberType: Story = {
  args: {
    label: 'Quantity',
    placeholder: '0',
    type: 'number',
    min: 0,
    max: 100,
    hintText: 'Enter a value between 0 and 100.',
  },
};

// ── Number Without Arrows ─────────────────────────────────────────────────────
export const NumberWithoutArrows: Story = {
  args: {
    label: 'Amount',
    placeholder: '0.00',
    type: 'number',
    hideArrowButton: true,
  },
};

// ── Read Only ─────────────────────────────────────────────────────────────────
export const ReadOnly: Story = {
  args: {
    label: 'Account ID',
    value: 'ACC-00421',
    readOnly: true,
    hintText: 'This value cannot be changed.',
  },
};

// ── All States ────────────────────────────────────────────────────────────────
export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;">

        <div style="background:var(--ds-bg);border:1px solid var(--ds-border);border-radius:10px;padding:20px 16px 16px;">
          <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--ds-text-faint);margin-bottom:14px;">Default</p>
          <vc-input-field label="Name" placeholder="Enter your name"></vc-input-field>
        </div>

        <div style="background:var(--ds-bg);border:1px solid var(--ds-border);border-radius:10px;padding:20px 16px 16px;">
          <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--ds-text-faint);margin-bottom:14px;">With Hint</p>
          <vc-input-field label="Email" placeholder="you@company.com" hintText="We'll keep this private."></vc-input-field>
        </div>

        <div style="background:var(--ds-bg);border:1px solid var(--ds-border);border-radius:10px;padding:20px 16px 16px;">
          <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--ds-text-faint);margin-bottom:14px;">Disabled</p>
          <vc-input-field label="Email" placeholder="olivia@untitledui.com" [disabled]="true"></vc-input-field>
        </div>

        <div style="background:var(--ds-bg);border:1px solid var(--ds-border);border-radius:10px;padding:20px 16px 16px;">
          <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--ds-text-faint);margin-bottom:14px;">Error</p>
          <vc-input-field label="Email" placeholder="you@company.com" customValidation="invalid" errorText="Invalid email address." [showErrorText]="true"></vc-input-field>
        </div>

        <div style="background:var(--ds-bg);border:1px solid var(--ds-border);border-radius:10px;padding:20px 16px 16px;">
          <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--ds-text-faint);margin-bottom:14px;">Required</p>
          <vc-input-field label="Full name" placeholder="Jane Appleseed" [required]="true"></vc-input-field>
        </div>

        <div style="background:var(--ds-bg);border:1px solid var(--ds-border);border-radius:10px;padding:20px 16px 16px;">
          <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--ds-text-faint);margin-bottom:14px;">Password</p>
          <vc-input-field label="Password" placeholder="Enter password" type="password"></vc-input-field>
        </div>

      </div>
    `,
  }),
};

// ── Do & Don't ────────────────────────────────────────────────────────────────
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
            <vc-input-field label="Work email" placeholder="jane@acme.com" type="email" hintText="We'll use this to send you updates."></vc-input-field>
            <p class="dnd-caption">Always provide a label and meaningful placeholder to help users understand what is expected.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <p style="font-size:13px;color:var(--ds-text-secondary);background:var(--ds-danger-subtle);border:1px solid var(--ds-danger-border);border-radius:8px;padding:12px 16px;margin:0;">
              Don't omit the label or use vague placeholders like "Enter value" -- users need clear context to fill in the right data.
            </p>
            <p class="dnd-caption">A label-less field with a generic placeholder creates confusion and reduces form completion rates.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
