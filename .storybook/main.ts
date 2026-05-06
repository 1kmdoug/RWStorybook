import type { StorybookConfig } from '@storybook/angular';

const addCssLoaders = (rule: any): any => {
  if (!rule || typeof rule !== 'object') return rule;

  if (Array.isArray(rule.oneOf)) {
    return { ...rule, oneOf: rule.oneOf.map(addCssLoaders) };
  }

  if (!rule.test || !rule.test.toString().includes('scss')) return rule;
  if (!Array.isArray(rule.use)) return rule;

  const hasCssLoader = rule.use.some((u: any) => {
    const loader = typeof u === 'string' ? u : (u?.loader ?? '');
    return loader.includes('css-loader');
  });

  if (!hasCssLoader) {
    return {
      ...rule,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { sourceMap: true } },
        ...rule.use,
      ],
    };
  }
  return rule;
};

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules = config.module.rules.map(addCssLoaders);
    }
    return config;
  },
};

export default config;
