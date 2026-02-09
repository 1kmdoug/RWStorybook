import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Elements/Alerts',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Default Alerts

Contextual feedback messages for user actions.

**Approved Variant:** Default Alerts

**Reference:** [Vristo Alerts Documentation](https://angular.vristo.sbthemes.com/elements/alerts)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <div class="alert alert-primary">
          <strong>Primary Alert:</strong> This is a primary alert message.
        </div>
        
        <div class="alert alert-success">
          <strong>Success:</strong> Your operation was successful!
        </div>
        
        <div class="alert alert-danger">
          <strong>Error:</strong> Something went wrong.
        </div>
        
        <div class="alert alert-warning">
          <strong>Warning:</strong> Please review your input.
        </div>
        
        <div class="alert alert-info">
          <strong>Info:</strong> Here's some helpful information.
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const DefaultAlerts: Story = {};
