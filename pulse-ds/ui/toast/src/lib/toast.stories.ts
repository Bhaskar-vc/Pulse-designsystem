import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { Component, inject } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { VcToast } from './toast.component';
import { VcToastItem } from './toast-item.component';
import { ToastService } from './toast.service';
import { ToastPositionType } from './toast.interface';

/**
 * Helper wrapper component that provides buttons to trigger toasts
 * via the ToastService, since VcToast is driven imperatively.
 */
@Component({
  standalone: true,
  selector: 'toast-story-wrapper',
  imports: [VcToast],
  template: `
    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
      <button (click)="showDefault()" style="padding: 8px 16px; cursor: pointer;">Default Toast</button>
      <button (click)="showSuccess()" style="padding: 8px 16px; cursor: pointer;">Success Toast</button>
      <button (click)="showWarning()" style="padding: 8px 16px; cursor: pointer;">Warning Toast</button>
      <button (click)="showError()" style="padding: 8px 16px; cursor: pointer;">Error Toast</button>
    </div>
    <vc-toast [key]="key" [position]="position" [life]="life"></vc-toast>
  `,
})
class ToastStoryWrapperComponent {
  key = 'story';
  position: ToastPositionType = 'top-right';
  life = 3000;

  private toastService = inject(ToastService);

  showDefault() {
    this.toastService.add({
      status: 'default',
      heading: 'Information',
      description: 'This is a default toast message.',
      key: this.key,
      life: this.life,
    });
  }

  showSuccess() {
    this.toastService.add({
      status: 'success',
      heading: 'Success',
      description: 'The operation completed successfully.',
      key: this.key,
      life: this.life,
    });
  }

  showWarning() {
    this.toastService.add({
      status: 'warning',
      heading: 'Warning',
      description: 'Please review before proceeding.',
      key: this.key,
      life: this.life,
    });
  }

  showError() {
    this.toastService.add({
      status: 'error',
      heading: 'Error',
      description: 'Something went wrong. Please try again.',
      key: this.key,
      life: this.life,
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
      options: [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'center',
        'top-center',
        'bottom-center',
      ],
      description: 'Position of the toast container in the viewport.',
    },
    life: {
      control: 'number',
      description: 'Duration in milliseconds before the toast auto-closes.',
    },
    key: {
      control: 'text',
      description: 'Key to scope toast messages to this container.',
    },
  },
};

export default meta;
type Story = StoryObj<ToastStoryWrapperComponent>;

export const Default: Story = {
  args: {
    position: 'top-right',
    life: 3000,
    key: 'story',
  },
};

export const TopLeft: Story = {
  args: {
    position: 'top-left',
    life: 4000,
    key: 'story',
  },
};

export const BottomRight: Story = {
  args: {
    position: 'bottom-right',
    life: 5000,
    key: 'story',
  },
};

export const Center: Story = {
  args: {
    position: 'center',
    life: 3000,
    key: 'story',
  },
};
