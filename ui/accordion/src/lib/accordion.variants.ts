import { tv } from 'tailwind-variants';

export const accordionVariants = tv({
  variants: {
    variant: {
      default:      'accordion',
      bordered:     'accordion accordion--bordered',
      flush:        'accordion accordion--flush',
      status:       'accordion--status',
      'status-gap': 'accordion--status-gap',
    },
    size: {
      sm: 'accordion--sm',
      md: '',
      lg: 'accordion--lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size:    'md',
  },
});
