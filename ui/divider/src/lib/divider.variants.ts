import { tv } from 'tailwind-variants';

export const dividerVariants = tv({
  variants: {
    type: {
      horizontal: '',
      vertical:   '',
    },
  },
  defaultVariants: {
    type: 'horizontal',
  },
});
