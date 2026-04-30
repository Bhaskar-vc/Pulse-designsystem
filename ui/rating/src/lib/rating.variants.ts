import { tv } from 'tailwind-variants';

export const ratingVariants = tv({
  base: 'rating',
  variants: {
    size: {
      sm: 'rating-sm',
      md: 'rating-md',
      lg: 'rating-lg',
    },
    interactive: {
      true: 'rating-interactive',
    },
  },
  defaultVariants: {
    size:        'md',
    interactive: false,
  },
});

export const starFillVariants = tv({
  variants: {
    color: {
      yellow: 'star-filled',
      purple: 'star-filled-purple',
      gray:   'star-filled-gray',
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
});
