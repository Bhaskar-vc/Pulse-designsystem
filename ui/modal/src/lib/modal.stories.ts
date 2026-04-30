import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VModal } from './modal.component';

const btnOutline = 'padding:8px 16px;border:1px solid #d0d5dd;border-radius:8px;background:#fff;cursor:pointer;font-size:14px;color:#344054;';
const btnPrimary = 'padding:8px 16px;border:none;border-radius:8px;background:#7f56d9;color:#fff;cursor:pointer;font-size:14px;';
const btnDanger = 'padding:8px 16px;border:none;border-radius:8px;background:#d92d20;color:#fff;cursor:pointer;font-size:14px;';

const meta: Meta<VModal> = {
  title: 'Feedback/Modal',
  component: VModal,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VModal, BrowserAnimationsModule],
    }),
  ],
  parameters: {
    docs: { story: { height: '480px' } },
  },
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
      description: 'Modal body text',
    },
    size: {
      control: 'select',
      options: ['default', 'wide'],
      description: 'Size variant',
    },
    intent: {
      control: 'select',
      options: ['none', 'success', 'warning', 'error', 'info'],
      description: 'Featured icon intent',
    },
    layout: {
      control: 'select',
      options: ['stacked', 'horizontal'],
      description: 'Layout of the modal content',
    },
    variant: {
      control: 'select',
      options: ['modal', 'drawer'],
      description: 'Modal or drawer variant',
    },
    centered: {
      control: 'boolean',
      description: 'Center icon and text layout',
    },
    showClose: {
      control: 'boolean',
      description: 'Show close button in header',
    },
    actionsAlign: {
      control: 'select',
      options: ['between', 'right', 'center', 'stacked'],
      description: 'Actions alignment',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Close when clicking the backdrop',
    },
    contained: {
      control: 'boolean',
      description: 'Contain overlay within parent (for Storybook)',
    },
  },
};
export default meta;
type Story = StoryObj<VModal>;

// --- Default (Success) ---
export const Default: Story = {
  render: (_args, { viewMode }) => {
    if (viewMode === 'docs') {
      return {
        template: `
          <v-modal
            [isOpen]="true"
            [contained]="true"
            intent="success"
            title="Changes saved"
            body="Your profile information has been updated successfully."
            actionsAlign="right"
          >
            <div modalActions>
              <button style="${btnOutline}" (click)="null">Close</button>
              <button style="${btnPrimary}">Continue</button>
            </div>
          </v-modal>
        `,
      };
    }
    return {
      props: { open: false },
      template: `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:360px;">
          <button (click)="open = true" style="${btnPrimary}">Open modal</button>
        </div>
        <v-modal
          [isOpen]="open"
          intent="success"
          title="Changes saved"
          body="Your profile information has been updated successfully."
          actionsAlign="right"
          (closed)="open = false"
        >
          <div modalActions>
            <button style="${btnOutline}" (click)="open = false">Close</button>
            <button style="${btnPrimary}" (click)="open = false">Continue</button>
          </div>
        </v-modal>
      `,
    };
  },
};

// --- Warning ---
export const Warning: Story = {
  render: (_args, { viewMode }) => {
    if (viewMode === 'docs') {
      return {
        template: `
          <v-modal
            [isOpen]="true"
            [contained]="true"
            intent="warning"
            title="Unsaved changes"
            body="You have unsaved changes. Are you sure you want to leave this page? All unsaved progress will be lost."
            actionsAlign="right"
          >
            <div modalActions>
              <button style="${btnOutline}">Stay on page</button>
              <button style="${btnPrimary}">Leave anyway</button>
            </div>
          </v-modal>
        `,
      };
    }
    return {
      props: { open: false },
      template: `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:360px;">
          <button (click)="open = true" style="${btnPrimary}">Open Warning Modal</button>
        </div>
        <v-modal
          [isOpen]="open"
          intent="warning"
          title="Unsaved changes"
          body="You have unsaved changes. Are you sure you want to leave this page? All unsaved progress will be lost."
          actionsAlign="right"
          (closed)="open = false"
        >
          <div modalActions>
            <button style="${btnOutline}" (click)="open = false">Stay on page</button>
            <button style="${btnPrimary}" (click)="open = false">Leave anyway</button>
          </div>
        </v-modal>
      `,
    };
  },
};

// --- Destructive ---
export const Destructive: Story = {
  render: (_args, { viewMode }) => {
    if (viewMode === 'docs') {
      return {
        template: `
          <v-modal
            [isOpen]="true"
            [contained]="true"
            intent="error"
            title="Delete account"
            body="This action is permanent and cannot be undone. All your data, projects, and settings will be permanently removed."
            actionsAlign="right"
          >
            <div modalActions>
              <button style="${btnOutline}">Cancel</button>
              <button style="${btnDanger}">Delete account</button>
            </div>
          </v-modal>
        `,
      };
    }
    return {
      props: { open: false },
      template: `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:360px;">
          <button (click)="open = true" style="${btnDanger}">Open Destructive Modal</button>
        </div>
        <v-modal
          [isOpen]="open"
          intent="error"
          title="Delete account"
          body="This action is permanent and cannot be undone. All your data, projects, and settings will be permanently removed."
          actionsAlign="right"
          (closed)="open = false"
        >
          <div modalActions>
            <button style="${btnOutline}" (click)="open = false">Cancel</button>
            <button style="${btnDanger}" (click)="open = false">Delete account</button>
          </div>
        </v-modal>
      `,
    };
  },
};

// --- Info ---
export const Info: Story = {
  render: (_args, { viewMode }) => {
    if (viewMode === 'docs') {
      return {
        template: `
          <v-modal
            [isOpen]="true"
            [contained]="true"
            intent="info"
            title="New feature available"
            body="We have released a new analytics dashboard. Visit the settings page to enable it for your workspace."
            actionsAlign="right"
          >
            <div modalActions>
              <button style="${btnOutline}">Maybe later</button>
              <button style="${btnPrimary}">Learn more</button>
            </div>
          </v-modal>
        `,
      };
    }
    return {
      props: { open: false },
      template: `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:360px;">
          <button (click)="open = true" style="${btnPrimary}">Open Info Modal</button>
        </div>
        <v-modal
          [isOpen]="open"
          intent="info"
          title="New feature available"
          body="We have released a new analytics dashboard. Visit the settings page to enable it for your workspace."
          actionsAlign="right"
          (closed)="open = false"
        >
          <div modalActions>
            <button style="${btnOutline}" (click)="open = false">Maybe later</button>
            <button style="${btnPrimary}" (click)="open = false">Learn more</button>
          </div>
        </v-modal>
      `,
    };
  },
};

// --- Centered ---
export const Centered: Story = {
  render: (_args, { viewMode }) => {
    if (viewMode === 'docs') {
      return {
        template: `
          <v-modal
            [isOpen]="true"
            [contained]="true"
            intent="success"
            [centered]="true"
            actionsAlign="stacked"
            title="Payment successful"
            body="Your payment of $49.00 has been processed. A confirmation email has been sent to your inbox."
          >
            <div modalActions>
              <button style="${btnPrimary}width:100%;">Go to dashboard</button>
              <button style="${btnOutline}width:100%;">View receipt</button>
            </div>
          </v-modal>
        `,
      };
    }
    return {
      props: { open: false },
      template: `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:360px;">
          <button (click)="open = true" style="${btnPrimary}">Open Centered Modal</button>
        </div>
        <v-modal
          [isOpen]="open"
          intent="success"
          [centered]="true"
          actionsAlign="stacked"
          title="Payment successful"
          body="Your payment of $49.00 has been processed. A confirmation email has been sent to your inbox."
          (closed)="open = false"
        >
          <div modalActions>
            <button style="${btnPrimary}width:100%;" (click)="open = false">Go to dashboard</button>
            <button style="${btnOutline}width:100%;" (click)="open = false">View receipt</button>
          </div>
        </v-modal>
      `,
    };
  },
};

// --- Horizontal ---
export const Horizontal: Story = {
  render: (_args, { viewMode }) => {
    if (viewMode === 'docs') {
      return {
        template: `
          <v-modal
            [isOpen]="true"
            [contained]="true"
            intent="warning"
            layout="horizontal"
            title="Archive project?"
            body="Archived projects can be restored later from the settings page."
            actionsAlign="right"
          >
            <div modalActions>
              <button style="${btnOutline}">Cancel</button>
              <button style="${btnPrimary}">Archive</button>
            </div>
          </v-modal>
        `,
      };
    }
    return {
      props: { open: false },
      template: `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:360px;">
          <button (click)="open = true" style="${btnPrimary}">Open Horizontal Modal</button>
        </div>
        <v-modal
          [isOpen]="open"
          intent="warning"
          layout="horizontal"
          title="Archive project?"
          body="Archived projects can be restored later from the settings page."
          actionsAlign="right"
          (closed)="open = false"
        >
          <div modalActions>
            <button style="${btnOutline}" (click)="open = false">Cancel</button>
            <button style="${btnPrimary}" (click)="open = false">Archive</button>
          </div>
        </v-modal>
      `,
    };
  },
};

// --- Form Modal ---
export const FormModal: Story = {
  render: (_args, { viewMode }) => {
    const formContent = `
      <div modalBody>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;flex-direction:column;gap:4px;">
            <label style="font-size:14px;font-weight:500;color:#344054;">Full Name</label>
            <input type="text" placeholder="John Doe" style="padding:8px 12px;border:1px solid #d0d5dd;border-radius:8px;font-size:14px;outline:none;" />
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;">
            <label style="font-size:14px;font-weight:500;color:#344054;">Email</label>
            <input type="email" placeholder="john@example.com" style="padding:8px 12px;border:1px solid #d0d5dd;border-radius:8px;font-size:14px;outline:none;" />
          </div>
          <div style="display:flex;flex-direction:column;gap:4px;">
            <label style="font-size:14px;font-weight:500;color:#344054;">Role</label>
            <select style="padding:8px 12px;border:1px solid #d0d5dd;border-radius:8px;font-size:14px;outline:none;">
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
        </div>
      </div>
    `;
    if (viewMode === 'docs') {
      return {
        template: `
          <v-modal
            [isOpen]="true"
            [contained]="true"
            size="wide"
            intent="none"
            title="Invite team member"
            actionsAlign="right"
          >
            ${formContent}
            <div modalActions>
              <button style="${btnOutline}">Cancel</button>
              <button style="${btnPrimary}">Send invite</button>
            </div>
          </v-modal>
        `,
      };
    }
    return {
      props: { open: false },
      template: `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:360px;">
          <button (click)="open = true" style="${btnPrimary}">Open Form Modal</button>
        </div>
        <v-modal
          [isOpen]="open"
          size="wide"
          intent="none"
          title="Invite team member"
          actionsAlign="right"
          (closed)="open = false"
        >
          ${formContent}
          <div modalActions>
            <button style="${btnOutline}" (click)="open = false">Cancel</button>
            <button style="${btnPrimary}" (click)="open = false">Send invite</button>
          </div>
        </v-modal>
      `,
    };
  },
};

// --- Wide ---
export const Wide: Story = {
  render: (_args, { viewMode }) => {
    if (viewMode === 'docs') {
      return {
        template: `
          <v-modal
            [isOpen]="true"
            [contained]="true"
            size="wide"
            intent="none"
            title="Terms of Service"
            body="Please read and accept the terms of service to continue using the platform. By clicking Accept you agree to all outlined policies."
            actionsAlign="right"
          >
            <div modalActions>
              <button style="${btnOutline}">Decline</button>
              <button style="${btnPrimary}">Accept</button>
            </div>
          </v-modal>
        `,
      };
    }
    return {
      props: { open: false },
      template: `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:360px;">
          <button (click)="open = true" style="${btnPrimary}">Open Wide Modal</button>
        </div>
        <v-modal
          [isOpen]="open"
          size="wide"
          intent="none"
          title="Terms of Service"
          body="Please read and accept the terms of service to continue using the platform. By clicking Accept you agree to all outlined policies."
          actionsAlign="right"
          (closed)="open = false"
        >
          <div modalActions>
            <button style="${btnOutline}" (click)="open = false">Decline</button>
            <button style="${btnPrimary}" (click)="open = false">Accept</button>
          </div>
        </v-modal>
      `,
    };
  },
};

// --- No Icon ---
export const NoIcon: Story = {
  render: (_args, { viewMode }) => {
    if (viewMode === 'docs') {
      return {
        template: `
          <v-modal
            [isOpen]="true"
            [contained]="true"
            intent="none"
            title="Confirm action"
            body="Are you sure you want to proceed with this action?"
            actionsAlign="right"
          >
            <div modalActions>
              <button style="${btnOutline}">Cancel</button>
              <button style="${btnPrimary}">Confirm</button>
            </div>
          </v-modal>
        `,
      };
    }
    return {
      props: { open: false },
      template: `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:360px;">
          <button (click)="open = true" style="${btnPrimary}">Open No-Icon Modal</button>
        </div>
        <v-modal
          [isOpen]="open"
          intent="none"
          title="Confirm action"
          body="Are you sure you want to proceed with this action?"
          actionsAlign="right"
          (closed)="open = false"
        >
          <div modalActions>
            <button style="${btnOutline}" (click)="open = false">Cancel</button>
            <button style="${btnPrimary}" (click)="open = false">Confirm</button>
          </div>
        </v-modal>
      `,
    };
  },
};

// --- Drawer ---
export const Drawer: Story = {
  render: (_args, { viewMode }) => {
    if (viewMode === 'docs') {
      return {
        template: `
          <v-modal
            [isOpen]="true"
            [contained]="true"
            variant="drawer"
            intent="none"
            title="Notification settings"
            body="Configure how and when you receive notifications from the platform."
            actionsAlign="right"
          >
            <div modalActions>
              <button style="${btnOutline}">Cancel</button>
              <button style="${btnPrimary}">Save settings</button>
            </div>
          </v-modal>
        `,
      };
    }
    return {
      props: { open: false },
      template: `
        <div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:360px;">
          <button (click)="open = true" style="${btnPrimary}">Open Drawer</button>
        </div>
        <v-modal
          [isOpen]="open"
          variant="drawer"
          intent="none"
          title="Notification settings"
          body="Configure how and when you receive notifications from the platform."
          actionsAlign="right"
          (closed)="open = false"
        >
          <div modalActions>
            <button style="${btnOutline}" (click)="open = false">Cancel</button>
            <button style="${btnPrimary}" (click)="open = false">Save settings</button>
          </div>
        </v-modal>
      `,
    };
  },
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
            <v-modal
              [isOpen]="true"
              [contained]="true"
              intent="error"
              title="Delete project?"
              body="This will permanently delete the project and all its data. This action cannot be undone."
              actionsAlign="right"
            >
              <div modalActions>
                <button style="${btnOutline}">Cancel</button>
                <button style="${btnDanger}">Delete project</button>
              </div>
            </v-modal>
            <p class="dnd-caption">Use a clear title that describes the action, explain the consequences, and provide distinct action buttons.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-modal
              [isOpen]="true"
              [contained]="true"
              intent="none"
              title="Are you sure?"
              body="Click OK to continue."
              actionsAlign="right"
            >
              <div modalActions>
                <button style="${btnOutline}">No</button>
                <button style="${btnPrimary}">OK</button>
              </div>
            </v-modal>
            <p class="dnd-caption">Don't use vague titles like "Are you sure?" or ambiguous button labels like "OK" -- users need to understand what will happen.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
