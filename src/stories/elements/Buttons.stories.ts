import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Elements/Buttons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Default Buttons

Standard button components for user actions.

**Approved Variant:** Default Buttons

**Reference:** [Vristo Buttons Documentation](https://angular.vristo.sbthemes.com/elements/buttons)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <h5>Solid Buttons</h5>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
          <button class="btn btn-primary">Primary</button>
          <button class="btn" style="background-color: #28a745; color: white; border-color: #28a745;">Success</button>
          <button class="btn" style="background-color: #dc3545; color: white; border-color: #dc3545;">Danger</button>
          <button class="btn" style="background-color: #ffc107; color: #212529; border-color: #ffc107;">Warning</button>
          <button class="btn" style="background-color: #17a2b8; color: white; border-color: #17a2b8;">Info</button>
          <button class="btn" style="background-color: #6c757d; color: white; border-color: #6c757d;">Secondary</button>
        </div>
        
        <h5>Button Sizes</h5>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; margin-bottom: 2rem;">
          <button class="btn btn-primary btn-sm">Small</button>
          <button class="btn btn-primary">Default</button>
          <button class="btn btn-primary btn-lg">Large</button>
        </div>
        
        <h5>Outline Buttons</h5>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn" style="background: transparent; color: var(--primary-color); border: 1px solid var(--primary-color);">Primary</button>
          <button class="btn" style="background: transparent; color: #28a745; border: 1px solid #28a745;">Success</button>
          <button class="btn" style="background: transparent; color: #dc3545; border: 1px solid #dc3545;">Danger</button>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const DefaultButtons: Story = {};
