import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Elements/Progress Bar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Basic Progress Bar

Visual indicator of process completion.

**Approved Variant:** Basic Progress Bar

**Reference:** [Vristo Progress Bar Documentation](https://angular.vristo.sbthemes.com/elements/progress-bar)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <div class="mb-4">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>Progress</span>
            <span>25%</span>
          </div>
          <div class="progress">
            <div class="progress-bar" style="width: 25%;"></div>
          </div>
        </div>
        
        <div class="mb-4">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>Progress</span>
            <span>50%</span>
          </div>
          <div class="progress">
            <div class="progress-bar" style="width: 50%;"></div>
          </div>
        </div>
        
        <div class="mb-4">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>Progress</span>
            <span>75%</span>
          </div>
          <div class="progress">
            <div class="progress-bar" style="width: 75%;"></div>
          </div>
        </div>
        
        <div class="mb-4">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>Complete</span>
            <span>100%</span>
          </div>
          <div class="progress">
            <div class="progress-bar" style="width: 100%; background-color: #28a745;"></div>
          </div>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const BasicProgressBar: Story = {};
