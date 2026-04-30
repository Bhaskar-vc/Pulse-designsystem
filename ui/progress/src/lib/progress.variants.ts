import { tv } from 'tailwind-variants';

export const progressCircleFillVariants = tv({
  base: 'progress-circle-fill',
  variants: {
    color: {
      primary:   'progress-circle-fill--primary',
      secondary: 'progress-circle-fill--secondary',
      success:   'progress-circle-fill--success',
      info:      'progress-circle-fill--info',
      warning:   'progress-circle-fill--warning',
      danger:    'progress-circle-fill--danger',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export const progressTrackVariants = tv({
  variants: {
    size: {
      xs: 'progress-track--xs',
      sm: 'progress-track--sm',
      md: 'progress-track--md',
      lg: 'progress-track--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const progressFillVariants = tv({
  base: 'progress-fill',
  variants: {
    color: {
      primary:   'progress-fill--primary',
      secondary: 'progress-fill--secondary',
      success:   'progress-fill--success',
      info:      'progress-fill--info',
      warning:   'progress-fill--warning',
      danger:    'progress-fill--danger',
    },
    striped: {
      true: 'progress-fill--striped',
    },
    animated: {
      true: 'progress-fill--animated',
    },
    indeterminate: {
      true: 'progress-fill--indeterminate',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});
