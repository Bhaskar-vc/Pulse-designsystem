import { tv } from 'tailwind-variants';

export const tooltipV2Variants = tv({
  base: 'tooltip',
  variants: {
    placement: {
      top:    'tooltip-top',
      bottom: 'tooltip-bottom',
      left:   'tooltip-left',
      right:  'tooltip-right',
    },
  },
  defaultVariants: {
    placement: 'bottom',
  },
});
