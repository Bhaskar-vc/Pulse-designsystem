import { tv } from 'tailwind-variants';

export const selectBtnVariants = tv({
  variants: {
    type: {
      light:    'select-light',
      bordered: '',
    },
    widthFitContent: {
      true: 'fit-content',
    },
    borderLess: {
      true: 'borderless',
    },
  },
  defaultVariants: {
    type:            'bordered',
    widthFitContent: false,
    borderLess:      false,
  },
});
