import { tv } from 'tailwind-variants';

export const toggleVariants = tv({
  base: 'toggle',
  variants: {
    size: {
      sm: 'toggle-sm',
      md: 'toggle-md',
      lg: 'toggle-lg',
    },
    color: {
      success: 'toggle-success',
      primary: 'toggle-primary',
      info:    'toggle-info',
    },
  },
  defaultVariants: {
    size:  'md',
    color: 'success',
  },
});
