import { tv } from 'tailwind-variants';

export const tabNavigationVariants = tv({
  base: 'tab-nav',
  variants: {
    labelSize: {
      sm:      'tab-nav--sm',
      default: '',
    },
  },
  defaultVariants: {
    labelSize: 'default',
  },
});
