import type { Preview } from '@storybook/angular';
import '!!style-loader!css-loader!sass-loader!./vristo-base.scss';

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
        order: ['Introduction', 'Components', 'Elements', 'Forms', 'Datatables'],
      },
    },
  },
};

export default preview;
