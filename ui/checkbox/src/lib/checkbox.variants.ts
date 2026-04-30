import { tv } from 'tailwind-variants';

export const checkboxVariants = tv({
  base: 'checkbox',
  variants: {
    size: {
      sm: 'checkbox-sm',
      md: 'checkbox-md',
      lg: 'checkbox-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
