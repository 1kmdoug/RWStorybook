import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Forms/Switches',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Rounded Switches

Toggle switches for binary options.

**Approved Variant:** Rounded

**Reference:** [Vristo Switches Documentation](https://angular.vristo.sbthemes.com/forms/switches)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; max-width: 400px;">
            <span>Email Notifications</span>
            <label style="position: relative; display: inline-block; width: 50px; height: 26px;">
              <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
              <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: var(--primary-color); transition: 0.3s; border-radius: 26px;">
                <span style="position: absolute; content: ''; height: 20px; width: 20px; left: 26px; bottom: 3px; background-color: white; transition: 0.3s; border-radius: 50%;"></span>
              </span>
            </label>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; max-width: 400px;">
            <span>SMS Alerts</span>
            <label style="position: relative; display: inline-block; width: 50px; height: 26px;">
              <input type="checkbox" style="opacity: 0; width: 0; height: 0;">
              <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: 0.3s; border-radius: 26px;">
                <span style="position: absolute; content: ''; height: 20px; width: 20px; left: 3px; bottom: 3px; background-color: white; transition: 0.3s; border-radius: 50%;"></span>
              </span>
            </label>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; max-width: 400px;">
            <span>Push Notifications</span>
            <label style="position: relative; display: inline-block; width: 50px; height: 26px;">
              <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
              <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: var(--primary-color); transition: 0.3s; border-radius: 26px;">
                <span style="position: absolute; content: ''; height: 20px; width: 20px; left: 26px; bottom: 3px; background-color: white; transition: 0.3s; border-radius: 50%;"></span>
              </span>
            </label>
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between; max-width: 400px; opacity: 0.5;">
            <span>Marketing Emails (Disabled)</span>
            <label style="position: relative; display: inline-block; width: 50px; height: 26px;">
              <input type="checkbox" disabled style="opacity: 0; width: 0; height: 0;">
              <span style="position: absolute; cursor: not-allowed; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: 0.3s; border-radius: 26px;">
                <span style="position: absolute; content: ''; height: 20px; width: 20px; left: 3px; bottom: 3px; background-color: white; transition: 0.3s; border-radius: 50%;"></span>
              </span>
            </label>
          </div>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const RoundedSwitches: Story = {};
