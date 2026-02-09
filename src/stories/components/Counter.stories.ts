import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Components/Counter',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Simple Counter

Animated number counter for statistics and metrics display.

**Approved Variant:** Simple Counter

**Reference:** [Vristo Counter Documentation](https://angular.vristo.sbthemes.com/components/counter)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
          <div style="text-align: center; padding: 2rem; background: #f8f9fa; border-radius: 0.5rem; min-width: 150px;">
            <div style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">2,547</div>
            <div style="color: #6c757d; margin-top: 0.5rem;">Total Users</div>
          </div>
          
          <div style="text-align: center; padding: 2rem; background: #f8f9fa; border-radius: 0.5rem; min-width: 150px;">
            <div style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">18,249</div>
            <div style="color: #6c757d; margin-top: 0.5rem;">Total Revenue</div>
          </div>
          
          <div style="text-align: center; padding: 2rem; background: #f8f9fa; border-radius: 0.5rem; min-width: 150px;">
            <div style="font-size: 3rem; font-weight: bold; color: var(--primary-color);">98%</div>
            <div style="color: #6c757d; margin-top: 0.5rem;">Satisfaction</div>
          </div>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const SimpleCounter: Story = {};
