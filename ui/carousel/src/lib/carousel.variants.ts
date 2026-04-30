import { tv } from 'tailwind-variants';

export const carouselControlVariants = tv({
  variants: {
    theme: {
      light: 'btn-light',
      dark:  'btn-default',
    },
    showOnHover: {
      true: 'hover-visible',
    },
    showInside: {
      true: 'show-inside',
    },
  },
  defaultVariants: {
    theme:       'dark',
    showOnHover: false,
    showInside:  true,
  },
});

export const carouselFooterVariants = tv({
  variants: {
    showInside: {
      true: 'show-inside',
    },
  },
});

export const carouselOuterVariants = tv({
  variants: {
    controlsInside: {
      true: 'gap-none',
    },
  },
});

export const carouselBodyVariants = tv({
  variants: {
    controlsInside: {
      true: 'carousel-body-overflow-hidden gap-none',
    },
  },
});
