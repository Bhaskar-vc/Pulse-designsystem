import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { Component, inject } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { VcToast } from './toast.component';
import { VcToastItem } from './toast-item.component';
import { ToastService } from './toast.service';
import { ToastPositionType } from './toast.interface';

@Component({
  standalone: true,
  selector: 'toast-story-wrapper',
  imports: [VcToast],
  template: `
    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
      <button (click)="showDefault()" style="padding: 8px 16px; cursor: pointer;">Default</button>
      <button (click)="showSuccess()" style="padding: 8px 16px; cursor: pointer;">Success</button>
      <button (click)="showWarning()" style="padding: 8px 16px; cursor: pointer;">Warning</button>
      <button (click)="showError()" style="padding: 8px 16px; cursor: pointer;">Error</button>
    </div>
    <vc-toast [key]="key" [position]="position" [life]="life"></vc-toast>
  `,
})
class ToastStoryWrapperComponent {
  key = 'story';
  position: ToastPositionType = 'top-right';
  life = 3000;

  private toastService = inject(ToastService);

  showDefault(): void {
    this.toastService.add({
      status: 'default',
      heading: 'Notification',
      description: 'This is a default toast message.',
      key: this.key,
    });
  }

  showSuccess(): void {
    this.toastService.add({
      status: 'success',
      heading: 'Success',
      description: 'The operation completed successfully.',
      key: this.key,
    });
  }

  showWarning(): void {
    this.toastService.add({
      status: 'warning',
      heading: 'Warning',
      description: 'Please review the details before proceeding.',
      key: this.key,
    });
  }

  showError(): void {
    this.toastService.add({
      status: 'error',
      heading: 'Error',
      description: 'Something went wrong. Please try again.',
      key: this.key,
    });
  }
}

const meta: Meta<ToastStoryWrapperComponent> = {
  title: 'Utilities/Toast',
  component: ToastStoryWrapperComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideAnimations(), ToastService],
    }),
    moduleMetadata({
      imports: [VcToast, VcToastItem],
    }),
  ],
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center', 'top-center', 'bottom-center'],
      description: 'Position of the toast in the viewport',
    },
    life: {
      control: 'number',
      description: 'Auto-dismiss duration in milliseconds',
    },
    key: {
      control: 'text',
      description: 'Key to match toast messages to this container',
    },
  },
};
export default meta;
type Story = StoryObj<ToastStoryWrapperComponent>;

// --- Default ---
export const Default: Story = {
  args: {
    position: 'top-right' as ToastPositionType,
    life: 3000,
    key: 'story',
  },
};

// --- Top Left ---
export const TopLeft: Story = {
  args: {
    position: 'top-left' as ToastPositionType,
    life: 3000,
    key: 'story-tl',
  },
};

// --- Bottom Right ---
export const BottomRight: Story = {
  args: {
    position: 'bottom-right' as ToastPositionType,
    life: 3000,
    key: 'story-br',
  },
};

// --- Center ---
export const Center: Story = {
  args: {
    position: 'center' as ToastPositionType,
    life: 3000,
    key: 'story-c',
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
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px 16px;display:flex;flex-direction:column;gap:2px;">
              <span style="font-weight:600;font-size:14px;color:#15803d;">File uploaded</span>
              <span style="font-size:13px;color:#166534;">report-q4.pdf was uploaded successfully.</span>
            </div>
            <p class="dnd-caption">Use a concise heading and a brief description that tells the user exactly what happened.</p>
          </div>
        </div>
        <div class="dnd-dont">
          <div class="dnd-dont-header">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 3L3 11M3 3l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Don't
          </div>
          <div class="dnd-dont-body">
            <div style="background:#fafafa;border:1px solid #e5e5e5;border-radius:8px;padding:12px 16px;">
              <span style="font-size:14px;color:#737373;">Done.</span>
            </div>
            <p class="dnd-caption">Don't use vague messages like "Done" or "Success" -- the user needs to know what was completed.</p>
          </div>
        </div>
      </div>
    `,
  }),
};
