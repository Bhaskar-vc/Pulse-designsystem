import type { Meta, StoryObj } from '@storybook/angular';
import { VEmptyState } from './empty-state.component';

const btnStyle = 'padding:8px 16px;border:none;border-radius:8px;background:#7f56d9;color:#fff;cursor:pointer;font-size:14px;';

const meta: Meta<VEmptyState> = {
  title: 'Feedback/Empty State',
  component: VEmptyState,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text',
    },
    description: {
      control: 'text',
      description: 'Description text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    containerStyle: {
      control: 'boolean',
      description: 'Wrap in a bordered container box',
    },
    hasIllustration: {
      control: 'boolean',
      description: 'Show illustration slot',
    },
  },
};
export default meta;
type Story = StoryObj<VEmptyState>;

const placeholderSvg = `
  <svg illustration width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="56" stroke="#e4e7ec" stroke-width="2" stroke-dasharray="6 4"/>
    <path d="M44 52a4 4 0 014-4h24a4 4 0 014 4v16a4 4 0 01-4 4H48a4 4 0 01-4-4V52z" stroke="#98a2b3" stroke-width="1.5"/>
    <path d="M44 56l16 10 16-10" stroke="#98a2b3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

// --- Default ---
export const Default: Story = {
  args: {
    title: 'No data found',
    description: 'There are no items to display right now. Try adjusting your filters or adding new content.',
    size: 'md',
    containerStyle: false,
    hasIllustration: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <v-empty-state
        [title]="title"
        [description]="description"
        [size]="size"
        [containerStyle]="containerStyle"
        [hasIllustration]="hasIllustration"
      >
        ${placeholderSvg}
      </v-empty-state>
    `,
  }),
};

// --- Sizes ---
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;">
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Small</p>
          <v-empty-state
            title="No results"
            description="No matching items found."
            size="sm"
          >
            ${placeholderSvg}
          </v-empty-state>
        </div>
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Medium (default)</p>
          <v-empty-state
            title="No results"
            description="No matching items found. Try a different search term."
            size="md"
          >
            ${placeholderSvg}
          </v-empty-state>
        </div>
        <div>
          <p style="margin:0 0 8px;font-weight:600;font-size:14px;color:#344054;">Large</p>
          <v-empty-state
            title="No results"
            description="No matching items found. Try adjusting your filters or search terms to see more results."
            size="lg"
          >
            ${placeholderSvg}
          </v-empty-state>
        </div>
      </div>
    `,
  }),
};

// --- Container Style ---
export const ContainerStyle: Story = {
  render: () => ({
    template: `
      <v-empty-state
        title="No projects yet"
        description="Create your first project to get started."
        [containerStyle]="true"
      >
        ${placeholderSvg}
      </v-empty-state>
    `,
  }),
};

// --- Without Illustration ---
export const WithoutIllustration: Story = {
  render: () => ({
    template: `
      <v-empty-state
        title="No notifications"
        description="You are all caught up! Check back later for new updates."
        [hasIllustration]="false"
      >
      </v-empty-state>
    `,
  }),
};

// --- With Action ---
export const WithAction: Story = {
  render: () => ({
    template: `
      <v-empty-state
        title="No team members"
        description="You haven't invited anyone yet. Invite team members to start collaborating."
      >
        ${placeholderSvg}
        <button emptyActions style="${btnStyle}">Invite members</button>
      </v-empty-state>
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
            <v-empty-state
              title="No reports available"
              description="Reports will appear here once your team starts submitting data. Create a report to get started."
            >
              ${placeholderSvg}
              <button emptyActions style="${btnStyle}">Create report</button>
            </v-empty-state>
            <p class="dnd-caption">Provide a clear title, helpful description, and an action that guides the user forward.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <v-empty-state
              title="Nothing here"
              [hasIllustration]="false"
            >
            </v-empty-state>
            <p class="dnd-caption">Don't show a bare empty state with no description, illustration, or action -- users won't know what to do next.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
