import { tv } from 'tailwind-variants';

export const avatarVariants = tv({
  base: 'av',
  variants: {
    size: {
      '2xs': 'av-2xs',
      xs:    'av-xs',
      sm:    'av-sm',
      md:    'av-md',
      lg:    'av-lg',
      xl:    'av-xl',
      '2xl': 'av-2xl',
    },
    color: {
      purple: 'av-purple',
      blue:   'av-blue',
      green:  'av-green',
      orange: 'av-orange',
      teal:   'av-teal',
      pink:   'av-pink',
      gray:   'av-gray',
    },
    placeholder: {
      true: 'av-placeholder',
    },
  },
  defaultVariants: {
    size:  'md',
    color: 'purple',
  },
});
