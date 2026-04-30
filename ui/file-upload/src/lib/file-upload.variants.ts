import { tv } from 'tailwind-variants';

export const fileUploadBtnVariants = tv({
  variants: {
    disabled: {
      true:  'btn-disabled',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
