import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VAccordion } from './accordion.component';
import { VAccordionItem } from './accordion-item.component';
import { VAccordionStatusItem } from './accordion-status-item.component';

// --- Icon SVGs ---
const clockIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M10 6v4l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const listIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 5h10M6 10h10M6 15h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="3" cy="5" r="1" fill="currentColor"/><circle cx="3" cy="10" r="1" fill="currentColor"/><circle cx="3" cy="15" r="1" fill="currentColor"/></svg>`;
const settingsIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M10 1v2M10 17v2M18.36 5.64l-1.73 1M3.37 13.36l-1.73 1M19 10h-2M3 10H1M18.36 14.36l-1.73-1M3.37 6.64l-1.73-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;

const meta: Meta<VAccordion> = {
  title: 'Navigation/Accordion',
  component: VAccordion,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VAccordionItem, VAccordionStatusItem],
    }),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'flush', 'status', 'status-gap'],
      description: 'Visual variant of the accordion',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Height size of the accordion items',
    },
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple items to be open simultaneously',
    },
  },
};
export default meta;
type Story = StoryObj<VAccordion>;

// --- Default ---
export const Default: Story = {
  args: {
    variant: 'flush',
    size: 'md',
    allowMultiple: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-accordion [variant]="variant" [size]="size" [allowMultiple]="allowMultiple">
        <v-accordion-item title="What is Pulse Design System?">
          Pulse is a comprehensive design system built for Angular that provides consistent, reusable UI components for enterprise dashboards and applications.
        </v-accordion-item>
        <v-accordion-item title="How do I install components?">
          Components are available as standalone Angular modules. Import the component you need directly into your module or standalone component imports array.
        </v-accordion-item>
        <v-accordion-item title="Is Pulse compatible with Angular 17+?">
          Yes, Pulse Design System is fully compatible with Angular 17 and later versions, leveraging standalone components and modern Angular features.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
};

// --- Status Bordered ---
export const StatusBordered: Story = {
  render: () => ({
    template: `
      <v-accordion variant="status">
        <v-accordion-status-item
          title="Set up your profile"
          subtitle="Complete your personal information"
          statusLabel="Completed"
        >
          <p style="color:#344054;margin:0;">Your profile has been set up with all required information. You can update it anytime from the settings page.</p>
          <div statusFooter style="padding:12px 16px;border-top:1px solid #f2f4f7;display:flex;gap:8px;">
            <button style="padding:6px 12px;border:1px solid #d0d5dd;border-radius:6px;background:#fff;font-size:13px;cursor:pointer;">Edit profile</button>
          </div>
        </v-accordion-status-item>
        <v-accordion-status-item
          title="Invite team members"
          subtitle="Add colleagues to collaborate"
          statusLabel="In progress"
        >
          <p style="color:#344054;margin:0;">You have invited 3 of 10 team members. Continue inviting to unlock team features.</p>
        </v-accordion-status-item>
        <v-accordion-status-item
          title="Configure integrations"
          subtitle="Connect your tools and services"
          statusLabel="Pending"
          [disabled]="true"
        >
          <p style="color:#344054;margin:0;">Integration setup will be available after completing the previous steps.</p>
        </v-accordion-status-item>
      </v-accordion>
    `,
  }),
};

// --- Status Gap ---
export const StatusGap: Story = {
  render: () => ({
    template: `
      <v-accordion variant="status-gap">
        <v-accordion-status-item
          title="Account verification"
          subtitle="Verify your email address"
          statusLabel="Completed"
        >
          <p style="color:#344054;margin:0;">Your email has been verified successfully.</p>
        </v-accordion-status-item>
        <v-accordion-status-item
          title="Organization setup"
          subtitle="Create your organization profile"
          statusLabel="In progress"
        >
          <p style="color:#344054;margin:0;">Fill in your organization details to continue with the setup process.</p>
        </v-accordion-status-item>
        <v-accordion-status-item
          title="Billing configuration"
          subtitle="Set up your payment method"
          statusLabel="Pending"
        >
          <p style="color:#344054;margin:0;">Add a payment method to activate your subscription.</p>
        </v-accordion-status-item>
      </v-accordion>
    `,
  }),
};

// --- Flush ---
export const Flush: Story = {
  render: () => ({
    template: `
      <v-accordion variant="flush">
        <v-accordion-item title="Getting started">
          Follow our quick-start guide to set up your first project in under 5 minutes.
        </v-accordion-item>
        <v-accordion-item title="Customization">
          Every component supports theming through CSS variables and Tailwind utility classes.
        </v-accordion-item>
        <v-accordion-item title="Support">
          Reach out to our team through the help center or email support@example.com.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
};

// --- Bordered ---
export const Bordered: Story = {
  render: () => ({
    template: `
      <v-accordion variant="bordered">
        <v-accordion-item title="Privacy Policy">
          We take your privacy seriously. Read our full privacy policy to understand how we handle your data.
        </v-accordion-item>
        <v-accordion-item title="Terms of Service">
          By using our platform you agree to the terms outlined in our Terms of Service document.
        </v-accordion-item>
        <v-accordion-item title="Cookie Policy">
          We use cookies to improve your experience. Learn more about the types of cookies we use and how to manage them.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
};

// --- Multiple Open ---
export const MultipleOpen: Story = {
  render: () => ({
    template: `
      <v-accordion variant="flush" [allowMultiple]="true">
        <v-accordion-item title="Section A">
          Content for section A. With allowMultiple enabled, multiple items can be open at once.
        </v-accordion-item>
        <v-accordion-item title="Section B">
          Content for section B. Try opening this alongside section A.
        </v-accordion-item>
        <v-accordion-item title="Section C">
          Content for section C. All three sections can remain open simultaneously.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px;">
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Small</p>
          <v-accordion variant="bordered" size="sm">
            <v-accordion-item title="Item One">Content for small size.</v-accordion-item>
            <v-accordion-item title="Item Two">More content here.</v-accordion-item>
          </v-accordion>
        </div>
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Medium</p>
          <v-accordion variant="bordered" size="md">
            <v-accordion-item title="Item One">Content for medium size.</v-accordion-item>
            <v-accordion-item title="Item Two">More content here.</v-accordion-item>
          </v-accordion>
        </div>
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Large</p>
          <v-accordion variant="bordered" size="lg">
            <v-accordion-item title="Item One">Content for large size.</v-accordion-item>
            <v-accordion-item title="Item Two">More content here.</v-accordion-item>
          </v-accordion>
        </div>
      </div>
    `,
  }),
};

// --- With Leading Icons ---
export const WithLeadingIcons: Story = {
  render: () => ({
    props: {
      clockIcon,
      listIcon,
      settingsIcon,
    },
    template: `
      <v-accordion variant="bordered">
        <v-accordion-item title="Recent Activity" [icon]="clockIcon">
          View all recent activity across your workspace including edits, comments, and status changes.
        </v-accordion-item>
        <v-accordion-item title="Task List" [icon]="listIcon">
          Your current tasks organized by priority and due date.
        </v-accordion-item>
        <v-accordion-item title="Preferences" [icon]="settingsIcon">
          Customize your notification preferences, display settings, and accessibility options.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
};

// --- With Badges ---
export const WithBadges: Story = {
  render: () => ({
    template: `
      <v-accordion variant="bordered">
        <v-accordion-item title="Completed Tasks" badge="12" badgeType="success">
          All tasks marked as completed this week.
        </v-accordion-item>
        <v-accordion-item title="Pending Review" badge="3" badgeType="warning">
          Tasks awaiting review from team leads.
        </v-accordion-item>
        <v-accordion-item title="Backlog" badge="28">
          Items in the backlog that have not been assigned yet.
        </v-accordion-item>
      </v-accordion>
    `,
  }),
};

// --- States ---
export const States: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;">
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Closed (default)</p>
          <v-accordion variant="bordered">
            <v-accordion-item title="Collapsed item">
              This content is hidden until the item is opened.
            </v-accordion-item>
          </v-accordion>
        </div>
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Open</p>
          <v-accordion variant="bordered">
            <v-accordion-item title="Click to open this item">
              This item can be opened by clicking the trigger. The content area expands smoothly with an animation.
            </v-accordion-item>
          </v-accordion>
        </div>
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Disabled</p>
          <v-accordion variant="bordered">
            <v-accordion-item title="Disabled item" [disabled]="true">
              This content cannot be revealed because the item is disabled.
            </v-accordion-item>
          </v-accordion>
        </div>
      </div>
    `,
  }),
};

// --- Nested ---
export const Nested: Story = {
  render: () => ({
    template: `
      <v-accordion variant="bordered">
        <v-accordion-item title="Product Categories">
          <v-accordion variant="flush">
            <v-accordion-item title="Electronics">
              Smartphones, laptops, tablets, and accessories.
            </v-accordion-item>
            <v-accordion-item title="Clothing">
              Men's, women's, and children's apparel.
            </v-accordion-item>
            <v-accordion-item title="Home & Garden">
              Furniture, decor, and outdoor equipment.
            </v-accordion-item>
          </v-accordion>
        </v-accordion-item>
        <v-accordion-item title="Shipping Information">
          We offer free shipping on orders over $50. Standard delivery takes 3-5 business days.
        </v-accordion-item>
        <v-accordion-item title="Return Policy">
          Items can be returned within 30 days of purchase with a valid receipt.
        </v-accordion-item>
      </v-accordion>
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
            <v-accordion variant="bordered">
              <v-accordion-item title="What payment methods do you accept?">
                We accept all major credit cards (Visa, Mastercard, AmEx), PayPal, and bank transfers.
              </v-accordion-item>
              <v-accordion-item title="How can I cancel my subscription?">
                You can cancel anytime from the Billing section in your account settings.
              </v-accordion-item>
            </v-accordion>
            <p class="dnd-caption">Use descriptive titles that clearly indicate the content inside, especially for FAQ-style layouts.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-accordion variant="bordered">
              <v-accordion-item title="Item 1">
                Some information.
              </v-accordion-item>
              <v-accordion-item title="Item 2">
                More information.
              </v-accordion-item>
            </v-accordion>
            <p class="dnd-caption">Don't use generic or numbered labels -- users cannot predict what content they will find inside each item.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
