import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Basic Accordion

Collapsible content panels for organizing information hierarchically.

**Use Case:** FAQ sections, settings panels, or any content that benefits from progressive disclosure.

**Approved Variant:** Basic Accordion only

**Reference:** [Vristo Accordion Documentation](https://angular.vristo.sbthemes.com/components/accordions)
        `,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="component-container">
        <div class="accordion">
          <div class="card mb-2">
            <div class="card-header" style="cursor: pointer; background-color: var(--light-color);">
              <strong>Accordion Item #1</strong>
            </div>
            <div class="card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          
          <div class="card mb-2">
            <div class="card-header" style="cursor: pointer; background-color: var(--light-color);">
              <strong>Accordion Item #2</strong>
            </div>
          </div>
          
          <div class="card mb-2">
            <div class="card-header" style="cursor: pointer; background-color: var(--light-color);">
              <strong>Accordion Item #3</strong>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const BasicAccordion: Story = {
  args: {},
};
