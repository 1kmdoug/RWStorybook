import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Elements/Dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Basic Dropdown

Menu dropdown component.

**Approved Variant:** Basic

**Reference:** [Vristo Dropdown Documentation](https://angular.vristo.sbthemes.com/elements/dropdown)
        `,
      },
    },
  },
  render: () => ({
    template: `
      <div class="component-container">
        <button class="btn btn-primary" style="position: relative;">
          Dropdown Menu ▼
        </button>
        
        <div class="mt-4 p-4" style="background: #f8f9fa; border-radius: 0.5rem;">
          <p><strong>Dropdown Menu Preview:</strong></p>
          <div style="position: relative; display: inline-block;">
            <button class="btn btn-primary">
              Actions ▼
            </button>
            <div style="position: absolute; top: 100%; left: 0; margin-top: 0.5rem; min-width: 160px; background: white; border: 1px solid #dee2e6; border-radius: 0.375rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1000;">
              <a href="javascript:void(0)" style="display: block; padding: 0.75rem 1rem; color: #212529; text-decoration: none; transition: background-color 0.2s; border-bottom: 1px solid #f8f9fa;">
                Edit
              </a>
              <a href="javascript:void(0)" style="display: block; padding: 0.75rem 1rem; color: #212529; text-decoration: none; transition: background-color 0.2s; border-bottom: 1px solid #f8f9fa;">
                Duplicate
              </a>
              <a href="javascript:void(0)" style="display: block; padding: 0.75rem 1rem; color: #212529; text-decoration: none; transition: background-color 0.2s; border-bottom: 1px solid #f8f9fa;">
                Archive
              </a>
              <hr style="margin: 0; border: none; border-top: 1px solid #dee2e6;">
              <a href="javascript:void(0)" style="display: block; padding: 0.75rem 1rem; color: #dc3545; text-decoration: none; transition: background-color 0.2s;">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export default meta;
type Story = StoryObj;

export const BasicDropdown: Story = {};
