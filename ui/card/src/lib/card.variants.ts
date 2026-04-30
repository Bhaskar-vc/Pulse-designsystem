import { tv } from 'tailwind-variants';

export const cardVariants = tv({
  base: 'card',
  variants: {
    size: {
      sm: 'card--sm',
      md: '',
      lg: 'card--lg',
    },
    selected: {
      true: 'card--selected',
    },
    disabled: {
      true: 'card--disabled',
    },
    clickable: {
      true: 'card--clickable',
    },
    flat: {
      true: 'card--flat',
    },
    horizontal: {
      true: 'card--horizontal',
    },
    glass: {
      true: 'card--glass',
    },
    outlined: {
      true: 'card--outlined',
    },
    overlay: {
      true: 'card--overlay',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
