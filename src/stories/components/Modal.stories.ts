import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Modal

Dialog boxes for user interaction and content display.

**Use Cases:** 
- Confirmations
- Forms
- Alerts
- Detailed information display

**Approved Variants:** 
- Vertically Centered
- Custom Examples

**Reference:** [Vristo Modal Documentation](https://angular.vristo.sbthemes.com/components/modals)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const VerticallyCentered: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <button class="btn btn-primary">Launch Modal</button>
        
        <div class="mt-4 p-4" style="background-color: #f8f9fa; border-radius: 0.5rem;">
          <p><strong>Modal Preview:</strong></p>
          <div class="modal" style="position: relative; display: block; transform: none;">
            <div class="modal-header">
              <h5 class="modal-title">Modal Title</h5>
              <button type="button" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <div class="modal-body">
              <p>This is a vertically centered modal. It appears in the center of the viewport.</p>
              <p>Add your content here.</p>
            </div>
            <div class="modal-footer">
              <button class="btn" style="background-color: #6c757d; color: white;">Close</button>
              <button class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const CustomExample: Story = {
  render: () => ({
    template: `
      <div class="component-container">
        <button class="btn btn-primary">Launch Custom Modal</button>
        
        <div class="mt-4 p-4" style="background-color: #f8f9fa; border-radius: 0.5rem;">
          <p><strong>Custom Modal Preview:</strong></p>
          <div class="modal" style="position: relative; display: block; transform: none;">
            <div class="modal-header">
              <h5 class="modal-title">Confirm Action</h5>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to perform this action?</p>
              <p class="text-secondary" style="font-size: 0.875rem;">This action cannot be undone.</p>
            </div>
            <div class="modal-footer">
              <button class="btn" style="background-color: #6c757d; color: white;">Cancel</button>
              <button class="btn" style="background-color: #dc3545; color: white;">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
