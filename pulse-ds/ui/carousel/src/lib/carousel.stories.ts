import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { VcCarousel } from './carousel.component';
import { VcCarouselItem } from './carousel-item/carousel-item.component';

const meta: Meta<VcCarousel> = {
  title: 'Layout/Carousel',
  component: VcCarousel,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VcCarouselItem],
    }),
  ],
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Color theme for controls and indicators',
    },
    width: {
      control: 'number',
      description: 'Width of the carousel viewport in pixels',
    },
    height: {
      control: 'number',
      description: 'Height of the carousel viewport in pixels',
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: 'Size of controls and indicators',
    },
    indicatorType: {
      control: 'select',
      options: ['dot', 'line'],
      description: 'Style of the slide indicators',
    },
    indicatorsFramed: {
      control: 'boolean',
      description: 'Whether indicators have a framed background',
    },
    wrapSlides: {
      control: 'boolean',
      description: 'Whether slides wrap around at the ends',
    },
    cols: {
      control: 'number',
      description: 'Number of columns (items visible per slide)',
    },
    columnGap: {
      control: 'number',
      description: 'Gap between columns in pixels',
    },
    innerHorizontalPadding: {
      control: 'number',
      description: 'Inner horizontal padding in pixels',
    },
    innerVerticalPadding: {
      control: 'number',
      description: 'Inner vertical padding in pixels',
    },
    showSlideControlsOnHover: {
      control: 'boolean',
      description: 'Only show prev/next controls on hover',
    },
    showCarouselIndicators: {
      control: 'boolean',
      description: 'Whether to show slide indicators',
    },
    showCarouselControlsInside: {
      control: 'boolean',
      description: 'Whether controls are rendered inside the carousel body',
    },
  },
};
export default meta;
type Story = StoryObj<VcCarousel>;

const slideStyle =
  'display: flex; align-items: center; justify-content: center; background: #e2e8f0; border-radius: 8px; height: 100%; font-weight: 600; font-size: 1.25rem; color: #334155;';

// --- Default ---
export const Default: Story = {
  args: {
    width: 600,
    height: 300,
    theme: 'dark',
    size: 'md',
    indicatorType: 'dot',
    indicatorsFramed: true,
    wrapSlides: true,
    cols: 1,
    columnGap: 0,
    showSlideControlsOnHover: true,
    showCarouselIndicators: true,
    showCarouselControlsInside: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <vc-carousel
        [width]="width"
        [height]="height"
        [theme]="theme"
        [size]="size"
        [indicatorType]="indicatorType"
        [indicatorsFramed]="indicatorsFramed"
        [wrapSlides]="wrapSlides"
        [cols]="cols"
        [columnGap]="columnGap"
        [showSlideControlsOnHover]="showSlideControlsOnHover"
        [showCarouselIndicators]="showCarouselIndicators"
        [showCarouselControlsInside]="showCarouselControlsInside"
      >
        <vc-carousel-item><div style="${slideStyle}">Slide 1</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Slide 2</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Slide 3</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Slide 4</div></vc-carousel-item>
      </vc-carousel>
    `,
  }),
};

// --- Light Theme ---
export const LightTheme: Story = {
  render: () => ({
    template: `
      <vc-carousel [width]="600" [height]="300" theme="light" [wrapSlides]="true">
        <vc-carousel-item><div style="${slideStyle} background: #1e293b; color: #f1f5f9;">Slide 1</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle} background: #1e293b; color: #f1f5f9;">Slide 2</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle} background: #1e293b; color: #f1f5f9;">Slide 3</div></vc-carousel-item>
      </vc-carousel>
    `,
  }),
};

// --- Line Indicators ---
export const LineIndicators: Story = {
  render: () => ({
    template: `
      <vc-carousel [width]="600" [height]="300" indicatorType="line" [wrapSlides]="true">
        <vc-carousel-item><div style="${slideStyle}">Slide 1</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Slide 2</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Slide 3</div></vc-carousel-item>
      </vc-carousel>
    `,
  }),
};

// --- Multiple Columns ---
export const MultipleColumns: Story = {
  render: () => ({
    template: `
      <vc-carousel [width]="800" [height]="200" [cols]="3" [columnGap]="16" [wrapSlides]="true">
        <vc-carousel-item><div style="${slideStyle}">Item 1</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Item 2</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Item 3</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Item 4</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Item 5</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Item 6</div></vc-carousel-item>
      </vc-carousel>
    `,
  }),
};

// --- No Wrap ---
export const NoWrap: Story = {
  render: () => ({
    template: `
      <vc-carousel [width]="600" [height]="300" [wrapSlides]="false">
        <vc-carousel-item><div style="${slideStyle}">Slide 1</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Slide 2</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Slide 3</div></vc-carousel-item>
      </vc-carousel>
    `,
  }),
};

// --- Controls Outside ---
export const ControlsOutside: Story = {
  render: () => ({
    template: `
      <vc-carousel [width]="600" [height]="300" [showCarouselControlsInside]="false" [wrapSlides]="true">
        <vc-carousel-item><div style="${slideStyle}">Slide 1</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Slide 2</div></vc-carousel-item>
        <vc-carousel-item><div style="${slideStyle}">Slide 3</div></vc-carousel-item>
      </vc-carousel>
    `,
  }),
};
