import { tv } from 'tailwind-variants';

export const tabsVariants = tv({
  base: 'tabs',
  variants: {
    variant: {
      line: 'tabs--line',
    },
    size: {
      sm: 'tabs--sm',
      md: '',
      lg: 'tabs--lg',
    },
    vertical: {
      true: 'tabs--vertical',
    },
  },
  defaultVariants: {
    variant:  'line',
    size:     'md',
    vertical: false,
  },
});
