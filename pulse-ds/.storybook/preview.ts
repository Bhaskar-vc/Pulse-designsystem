import type { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  parameters: {
    backgrounds: {
      grid: { disable: true },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    options: {
      initialActive: 'addons',
      storySort: {
        order: [
          'Pulse Design System',
          'Design Tokens',
          ['Colors', 'Typography', 'Shadow & Border'],
          'Getting Started',
          'Layout',
          'Form Controls',
          'Data Display',
          'Feedback',
          'Navigation',
          'Utilities',
        ],
      },
    },
  },
};

export default preview;
