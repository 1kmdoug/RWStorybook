import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Forms/Checkbox and Radio',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Checkbox and Radio

Selection controls for forms.

**Approved Variant:** Default

**Reference:** [Vristo Checkbox and Radio Documentation](https://angular.vristo.sbthemes.com/forms/checkbox-radio)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Checkboxes: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <h5 class="mb-3">Checkboxes</h5>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" checked style="margin-right: 0.75rem; width: 18px; height: 18px; cursor: pointer;">
            <span>Option 1 - Selected</span>
          </label>
          
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" style="margin-right: 0.75rem; width: 18px; height: 18px; cursor: pointer;">
            <span>Option 2</span>
          </label>
          
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="checkbox" style="margin-right: 0.75rem; width: 18px; height: 18px; cursor: pointer;">
            <span>Option 3</span>
          </label>
          
          <label style="display: flex; align-items: center; cursor: not-allowed; opacity: 0.5;">
            <input type="checkbox" disabled style="margin-right: 0.75rem; width: 18px; height: 18px;">
            <span>Option 4 - Disabled</span>
          </label>
        </div>
      </div>
    `,
  }),
};

export const RadioButtons: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <h5 class="mb-3">Radio Buttons</h5>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="radio" name="options" checked style="margin-right: 0.75rem; width: 18px; height: 18px; cursor: pointer;">
            <span>Option A - Selected</span>
          </label>
          
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="radio" name="options" style="margin-right: 0.75rem; width: 18px; height: 18px; cursor: pointer;">
            <span>Option B</span>
          </label>
          
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input type="radio" name="options" style="margin-right: 0.75rem; width: 18px; height: 18px; cursor: pointer;">
            <span>Option C</span>
          </label>
          
          <label style="display: flex; align-items: center; cursor: not-allowed; opacity: 0.5;">
            <input type="radio" name="options" disabled style="margin-right: 0.75rem; width: 18px; height: 18px;">
            <span>Option D - Disabled</span>
          </label>
        </div>
      </div>
    `,
  }),
};
