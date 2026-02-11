import type { Preview } from '@storybook/angular';
import './vristo-theme.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Components',
          'Elements',
          'Charts',
          'Widgets',
          'Font Icons',
          'Tables',
          'Datatables',
          'Forms',
        ],
      },
    },
  },
};

export default preview;
