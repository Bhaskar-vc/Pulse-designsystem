import { tv } from 'tailwind-variants';

export const stepperVariants = tv({
  base: 'vc-stepper',
  variants: {
    orientation: {
      horizontal: 'vc-stepper-horizontal',
      vertical:   'vc-stepper-vertical',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});
