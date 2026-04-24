import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const pulseTheme = create({
  base: 'light',
  brandTitle: 'Pulse Design System',
  brandUrl: 'https://github.com/Bhaskar-vc/Pulse-designsystem',
  brandImage: './VC-logo.svg',
  brandTarget: '_blank',

  // Colors
  colorPrimary: '#7f56d9',
  colorSecondary: '#6941c6',

  // UI
  appBg: '#f9fafb',
  appContentBg: '#ffffff',
  appBorderColor: '#eaeaed',
  appBorderRadius: 8,

  // Text
  textColor: '#29294c',
  textInverseColor: '#ffffff',
  textMutedColor: '#707087',

  // Toolbar
  barTextColor: '#707087',
  barSelectedColor: '#6941c6',
  barHoverColor: '#29294c',
  barBg: '#ffffff',

  // Form
  inputBg: '#ffffff',
  inputBorder: '#eaeaed',
  inputTextColor: '#29294c',
  inputBorderRadius: 6,
});

addons.setConfig({
  theme: pulseTheme,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
  },
});
