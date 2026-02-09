import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Components/Countdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Simple Countdown

Timer countdown component for time-sensitive events.

**Approved Variant:** Simple Countdown

**Reference:** [Vristo Countdown Documentation](https://angular.vristo.sbthemes.com/components/countdown)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <div style="text-align: center; padding: 2rem; background: #f8f9fa; border-radius: 0.5rem;">
          <h3 class="mb-3">Event Starts In</h3>
          <div style="display: flex; gap: 1rem; justify-content: center; font-size: 2rem; font-weight: bold; color: var(--primary-color);">
            <div style="text-align: center;">
              <div>05</div>
              <div style="font-size: 0.875rem; font-weight: normal; color: #6c757d;">Days</div>
            </div>
            <div>:</div>
            <div style="text-align: center;">
              <div>12</div>
              <div style="font-size: 0.875rem; font-weight: normal; color: #6c757d;">Hours</div>
            </div>
            <div>:</div>
            <div style="text-align: center;">
              <div>34</div>
              <div style="font-size: 0.875rem; font-weight: normal; color: #6c757d;">Minutes</div>
            </div>
            <div>:</div>
            <div style="text-align: center;">
              <div>56</div>
              <div style="font-size: 0.875rem; font-weight: normal; color: #6c757d;">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const SimpleCountdown: Story = {};
