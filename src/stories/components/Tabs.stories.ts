import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Simple Tabs

Standard horizontal tab navigation component.

**Use Case:** Navigation between related content sections within the same page.

**Approved Variant:** Simple Tabs only (no pills, icons, or fancy styles)

**Reference:** [Vristo Tabs Documentation](https://angular.vristo.sbthemes.com/components/tabs)
        `,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="component-container">
        <div class="nav-tabs">
          <a class="nav-link active" href="javascript:void(0)">Home</a>
          <a class="nav-link" href="javascript:void(0)">Profile</a>
          <a class="nav-link" href="javascript:void(0)">Contact</a>
          <a class="nav-link" href="javascript:void(0)" style="pointer-events: none; opacity: 0.5;">Disabled</a>
        </div>
        <div class="tab-content">
          <h3>We move your world!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const SimpleTabs: Story = {
  args: {},
};
