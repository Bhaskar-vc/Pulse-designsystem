import { tv } from 'tailwind-variants';

export const radioVariants = tv({
  base: 'radio',
  variants: {
    size: {
      sm: 'radio-sm',
      md: 'radio-md',
      lg: 'radio-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
