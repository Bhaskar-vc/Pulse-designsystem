import { tv } from 'tailwind-variants';

export const modalActionsVariants = tv({
  base: 'modal-actions',
  variants: {
    actionsAlign: {
      between: '',
      right:   'modal-actions--right',
      center:  'modal-actions--centered',
      stacked: 'modal-actions--stacked',
    },
  },
  defaultVariants: {
    actionsAlign: 'between',
  },
});
