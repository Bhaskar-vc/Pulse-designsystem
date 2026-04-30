import type { Meta, StoryObj } from '@storybook/angular';
import { VCard3d } from './card-3d.component';

const meta: Meta<VCard3d> = {
  title: 'Layout/Card 3D',
  component: VCard3d,
  tags: ['autodocs'],
  argTypes: {
    intensity:   { control: { type: 'range', min: 0, max: 30, step: 1 }, description: 'Max tilt angle in degrees' },
    scale:       { control: { type: 'number', step: 0.01 }, description: 'Scale factor on hover' },
    perspective: { control: { type: 'number', step: 50 }, description: 'CSS perspective depth (px)' },
  },
};
export default meta;
type Story = StoryObj<VCard3d>;

// ── Default ─────────────────────────────────────────
export const Default: Story = {
  args: { intensity: 15, scale: 1.04, perspective: 800 },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding:60px;background:#f8f9fb;display:flex;align-items:center;justify-content:center;min-height:340px;">
        <v-card-3d [intensity]="intensity" [scale]="scale" [perspective]="perspective" style="width:300px;">
          <div class="card-img-placeholder" style="height:160px;background:linear-gradient(135deg,#f4ebff,#e9d5ff);"></div>
          <div class="card-body">
            <span class="card-eyebrow">Design System</span>
            <div class="card-title">Getting Started</div>
            <div class="card-desc">Learn how to install and configure Pulse DS in your project in minutes.</div>
          </div>
          <div class="card-footer">
            <span style="font-size:12px;color:#98a2b3;">5 min read</span>
            <span class="card-badge card-badge-info">New</span>
          </div>
        </v-card-3d>
      </div>
    `,
  }),
};

// ── Custom Intensity ────────────────────────────────
export const CustomIntensity: Story = {
  render: () => ({
    template: `
      <div style="padding:60px;background:#f4f4f6;display:flex;gap:24px;justify-content:center;align-items:center;flex-wrap:wrap;">

        <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
          <p style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#98a2b3;margin:0 0 4px;">Subtle -- 8 deg</p>
          <v-card-3d [intensity]="8" style="width:200px;">
            <div class="card-body">
              <div class="card-title">Subtle</div>
              <div class="card-desc">Gentle tilt, professional feel.</div>
            </div>
          </v-card-3d>
        </div>

        <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
          <p style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#98a2b3;margin:0 0 4px;">Default -- 15 deg</p>
          <v-card-3d [intensity]="15" style="width:200px;">
            <div class="card-body">
              <div class="card-title">Default</div>
              <div class="card-desc">Balanced tilt for most UIs.</div>
            </div>
          </v-card-3d>
        </div>

        <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
          <p style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#98a2b3;margin:0 0 4px;">Dramatic -- 25 deg</p>
          <v-card-3d [intensity]="25" style="width:200px;">
            <div class="card-body">
              <div class="card-title">Dramatic</div>
              <div class="card-desc">Strong tilt for visual impact.</div>
            </div>
          </v-card-3d>
        </div>

      </div>
    `,
  }),
};
