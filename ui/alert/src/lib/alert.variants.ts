import { tv } from 'tailwind-variants';

export const alertVariants = tv({
  base: 'alert',
  variants: {
    type: {
      info:    'alert-info',
      success: 'alert-success',
      warning: 'alert-warning',
      error:   'alert-error',
    },
    variant: {
      default:  '',
      outlined: 'alert-outlined',
      filled:   'alert-filled',
    },
    size: {
      default: '',
      sm:      'alert-sm',
    },
    isDismissing: {
      true: 'dismissing',
    },
  },
  defaultVariants: {
    type:    'info',
    variant: 'default',
    size:    'default',
  },
});
