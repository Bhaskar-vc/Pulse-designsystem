import { tv } from 'tailwind-variants';

export const toastVariants = tv({
  base: 'toast',
  variants: {
    status: {
      default: '',
      success: 'toast-success',
      warning: 'toast-warning',
      error:   'toast-error',
    },
  },
  defaultVariants: {
    status: 'default',
  },
});
