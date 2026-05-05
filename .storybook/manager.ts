import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'ReportAll Vristo',
    brandUrl: 'https://reportallusa.com',
    colorPrimary: '#2e7d32',
    colorSecondary: '#2563eb',
    appBg: '#f8fafc',
    appContentBg: '#ffffff',
    appBorderColor: '#d9e2ec',
    appBorderRadius: 6,
    textColor: '#172033',
    textInverseColor: '#ffffff',
    barTextColor: '#3b485c',
    barSelectedColor: '#2e7d32',
    barBg: '#ffffff',
    inputBg: '#ffffff',
    inputBorder: '#cbd5e1',
    inputTextColor: '#172033',
    inputBorderRadius: 4,
  }),
});
