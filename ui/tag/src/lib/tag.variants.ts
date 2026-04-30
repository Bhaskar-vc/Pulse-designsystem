import { tv } from 'tailwind-variants';

export const tagVariants = tv({
  compoundVariants: [
    // primary
    { color: 'primary', variant: 'solid',    class: 'tag-primary-solid' },
    { color: 'primary', variant: 'light',    class: 'tag-primary-light' },
    { color: 'primary', variant: 'outlined', class: 'tag-primary-outlined' },
    { color: 'primary', variant: 'tinted',   class: 'tag-primary-tinted' },
    // secondary
    { color: 'secondary', variant: 'solid',    class: 'tag-secondary-solid' },
    { color: 'secondary', variant: 'light',    class: 'tag-secondary-light' },
    { color: 'secondary', variant: 'outlined', class: 'tag-secondary-outlined' },
    { color: 'secondary', variant: 'tinted',   class: 'tag-secondary-tinted' },
    // success
    { color: 'success', variant: 'solid',    class: 'tag-success-solid' },
    { color: 'success', variant: 'light',    class: 'tag-success-light' },
    { color: 'success', variant: 'outlined', class: 'tag-success-outlined' },
    { color: 'success', variant: 'tinted',   class: 'tag-success-tinted' },
    // warning
    { color: 'warning', variant: 'solid',    class: 'tag-warning-solid' },
    { color: 'warning', variant: 'light',    class: 'tag-warning-light' },
    { color: 'warning', variant: 'outlined', class: 'tag-warning-outlined' },
    { color: 'warning', variant: 'tinted',   class: 'tag-warning-tinted' },
    // error
    { color: 'error', variant: 'solid',    class: 'tag-error-solid' },
    { color: 'error', variant: 'light',    class: 'tag-error-light' },
    { color: 'error', variant: 'outlined', class: 'tag-error-outlined' },
    { color: 'error', variant: 'tinted',   class: 'tag-error-tinted' },
    // info
    { color: 'info', variant: 'solid',    class: 'tag-info-solid' },
    { color: 'info', variant: 'light',    class: 'tag-info-light' },
    { color: 'info', variant: 'outlined', class: 'tag-info-outlined' },
    { color: 'info', variant: 'tinted',   class: 'tag-info-tinted' },
  ],
  variants: {
    color: {
      primary: '', secondary: '', success: '',
      warning: '', error: '',    info: '',
    },
    variant: {
      solid: '', light: '', outlined: '', tinted: '',
    },
  },
  defaultVariants: {
    color:   'primary',
    variant: 'light',
  },
});
